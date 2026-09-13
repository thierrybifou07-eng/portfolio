import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import { rm } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const previewPort = 41000 + (process.pid % 5000)
const debuggingPort = 47000 + (process.pid % 5000)
const baseUrl = `http://127.0.0.1:${previewPort}`
const debuggingUrl = `http://127.0.0.1:${debuggingPort}`
const chromeProfile = path.join(
  os.tmpdir(),
  `portfolio-performance-${process.pid}`,
)
const viteCli = path.join(root, 'node_modules', 'vite', 'bin', 'vite.js')

const profiles = {
  slow4g: {
    latency: 150,
    downloadThroughput: (1.6 * 1024 * 1024) / 8,
    uploadThroughput: (750 * 1024) / 8,
    connectionType: 'cellular4g',
  },
  slow3g: {
    latency: 400,
    downloadThroughput: (400 * 1024) / 8,
    uploadThroughput: (400 * 1024) / 8,
    connectionType: 'cellular3g',
  },
}

const scenarios = [
  {
    name: 'Accueil initial - 4G lente',
    path: '/',
    profile: profiles.slow4g,
    maximumKilobytes: 300,
    maximumMilliseconds: 5000,
    readySelector: '.home-page',
  },
  {
    name: 'Accueil initial - 3G',
    path: '/',
    profile: profiles.slow3g,
    maximumKilobytes: 300,
    maximumMilliseconds: 12000,
    readySelector: '.home-page',
  },
  {
    name: 'Accueil complet - 4G lente',
    path: '/',
    profile: profiles.slow4g,
    maximumKilobytes: 600,
    maximumMilliseconds: 8000,
    readySelector: '.home-page',
    scroll: true,
  },
  {
    name: 'Détail ARMS - 4G lente',
    path: '/projects/arms',
    profile: profiles.slow4g,
    maximumKilobytes: 500,
    maximumMilliseconds: 6000,
    readySelector: '.project-detail-page',
  },
  {
    name: 'Détail ARMS - 3G',
    path: '/projects/arms',
    profile: profiles.slow3g,
    maximumKilobytes: 500,
    maximumMilliseconds: 14000,
    readySelector: '.project-detail-page',
  },
  {
    name: 'CV avant téléchargement - 4G lente',
    path: '/resume',
    profile: profiles.slow4g,
    maximumKilobytes: 300,
    maximumMilliseconds: 6000,
    readySelector: '.resume-page',
    rejectPdfRequest: true,
  },
]

function findChrome() {
  const candidates =
    process.platform === 'win32'
      ? [
          'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
          'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
          'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
          'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        ]
      : [
          '/usr/bin/google-chrome',
          '/usr/bin/google-chrome-stable',
          '/usr/bin/chromium',
          '/usr/bin/chromium-browser',
        ]

  return candidates.find(existsSync)
}

async function waitForUrl(url, timeout = 15000) {
  const startedAt = Date.now()

  while (Date.now() - startedAt < timeout) {
    try {
      const response = await fetch(url)

      if (response.ok) {
        return response
      }
    } catch {
      // The local process may still be starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 200))
  }

  throw new Error(`Timed out while waiting for ${url}`)
}

function createCdpClient(webSocketUrl) {
  const socket = new WebSocket(webSocketUrl)
  const pending = new Map()
  const listeners = new Map()
  let nextId = 1

  const opened = new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true })
    socket.addEventListener('error', reject, { once: true })
  })

  socket.addEventListener('message', ({ data }) => {
    const message = JSON.parse(data)

    if (message.id) {
      const callback = pending.get(message.id)

      if (!callback) {
        return
      }

      pending.delete(message.id)
      if (message.error) {
        callback.reject(new Error(message.error.message))
      } else {
        callback.resolve(message.result)
      }
      return
    }

    for (const listener of listeners.get(message.method) ?? []) {
      listener(message.params ?? {})
    }
  })

  return {
    async connect() {
      await opened
    },
    close() {
      socket.close()
    },
    on(method, listener) {
      const methodListeners = listeners.get(method) ?? []

      methodListeners.push(listener)
      listeners.set(method, methodListeners)
    },
    send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = nextId++

        pending.set(id, { reject, resolve })
        socket.send(JSON.stringify({ id, method, params }))
      })
    },
  }
}

async function runAudit(client) {
  let activeRun = null

  client.on('Network.requestWillBeSent', ({ request, requestId, type }) => {
    if (!activeRun || !request.url.startsWith(baseUrl)) {
      return
    }

    activeRun.activeRequests.add(requestId)
    activeRun.requests.set(requestId, {
      bytes: 0,
      type,
      url: request.url,
    })
    activeRun.lastActivity = Date.now()
  })

  client.on('Network.loadingFinished', ({ encodedDataLength, requestId }) => {
    if (!activeRun) {
      return
    }

    activeRun.activeRequests.delete(requestId)
    const request = activeRun.requests.get(requestId)

    if (request) {
      request.bytes = encodedDataLength
    }
    activeRun.lastActivity = Date.now()
  })

  client.on('Network.loadingFailed', ({ requestId }) => {
    if (!activeRun) {
      return
    }

    activeRun.activeRequests.delete(requestId)
    activeRun.lastActivity = Date.now()
  })

  await Promise.all([
    client.send('Page.enable'),
    client.send('Network.enable'),
    client.send('Runtime.enable'),
  ])
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
    mobile: true,
  })
  await client.send('Emulation.setCPUThrottlingRate', { rate: 4 })
  await client.send('Page.addScriptToEvaluateOnNewDocument', {
    source: `
      window.__portfolioPerformance = {
        cls: 0,
        lcp: 0,
        longTaskCount: 0,
        longTaskDuration: 0,
      };
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) window.__portfolioPerformance.lcp = lastEntry.startTime;
      }).observe({ type: 'largest-contentful-paint', buffered: true });
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) window.__portfolioPerformance.cls += entry.value;
        }
      }).observe({ type: 'layout-shift', buffered: true });
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          window.__portfolioPerformance.longTaskCount += 1;
          window.__portfolioPerformance.longTaskDuration += entry.duration;
        }
      }).observe({ type: 'longtask', buffered: true });
    `,
  })

  async function waitForPageReady(selector, startedAt, timeout) {
    while (Date.now() - startedAt < timeout) {
      await new Promise((resolve) => setTimeout(resolve, 100))
      const result = await client.send('Runtime.evaluate', {
        expression: `Boolean(document.querySelector(${JSON.stringify(selector)}))`,
        returnByValue: true,
      })

      if (result.result.value) {
        return
      }
    }

    throw new Error(`Page did not render ${selector} before the timeout`)
  }

  async function waitForIdle(startedAt, timeout) {
    while (Date.now() - startedAt < timeout) {
      await new Promise((resolve) => setTimeout(resolve, 100))

      if (
        activeRun.activeRequests.size === 0 &&
        Date.now() - activeRun.lastActivity >= 750
      ) {
        return
      }
    }

    throw new Error('Network did not become idle before the timeout')
  }

  const results = []

  for (const scenario of scenarios) {
    await client.send('Page.navigate', { url: 'about:blank' })
    await new Promise((resolve) => setTimeout(resolve, 200))
    await client.send('Network.clearBrowserCache')
    await client.send('Network.setCacheDisabled', { cacheDisabled: true })
    await client.send('Network.emulateNetworkConditions', {
      offline: false,
      ...scenario.profile,
    })

    activeRun = {
      activeRequests: new Set(),
      lastActivity: Date.now(),
      requests: new Map(),
    }

    const startedAt = Date.now()

    await client.send('Page.navigate', {
      url: `${baseUrl}${scenario.path}`,
    })
    await waitForPageReady(
      scenario.readySelector,
      startedAt,
      scenario.maximumMilliseconds + 15000,
    )
    await waitForIdle(startedAt, scenario.maximumMilliseconds + 15000)

    if (scenario.scroll) {
      await client.send('Runtime.evaluate', {
        awaitPromise: true,
        expression: `
          (async () => {
            window.scrollTo(0, document.documentElement.scrollHeight);
            await new Promise((resolve) =>
              requestAnimationFrame(() => requestAnimationFrame(resolve)),
            );
          })()
        `,
      })
      activeRun.lastActivity = Date.now()
      await waitForIdle(startedAt, scenario.maximumMilliseconds + 15000)
    }

    const requests = [...activeRun.requests.values()]
    const bytes = requests.reduce(
      (total, request) => total + request.bytes,
      0,
    )
    const pdfRequested = requests.some(({ url }) =>
      /react-pdf|ResumeDocument/i.test(url),
    )
    const performanceResult = await client.send('Runtime.evaluate', {
      expression: `JSON.stringify((() => {
        const paints = Object.fromEntries(
          performance.getEntriesByType('paint').map((entry) => [
            entry.name,
            entry.startTime,
          ]),
        );
        return {
          ...window.__portfolioPerformance,
          fcp: paints['first-contentful-paint'] ?? 0,
        };
      })())`,
      returnByValue: true,
    })
    const browserMetrics = JSON.parse(performanceResult.result.value)
    const duration = Math.round(
      Math.max(
        activeRun.lastActivity - startedAt,
        browserMetrics.lcp,
      ),
    )
    const kilobytes = bytes / 1024
    const failures = []

    if (kilobytes > scenario.maximumKilobytes) {
      failures.push(
        `${Math.round(kilobytes)} KB > ${scenario.maximumKilobytes} KB`,
      )
    }
    if (duration > scenario.maximumMilliseconds) {
      failures.push(
        `${duration} ms > ${scenario.maximumMilliseconds} ms`,
      )
    }
    if (scenario.rejectPdfRequest && pdfRequested) {
      failures.push('le moteur PDF a été chargé avant le clic')
    }

    results.push({
      browserMetrics,
      duration,
      failures,
      kilobytes,
      name: scenario.name,
      pdfRequested,
      requestCount: requests.length,
    })
    activeRun = null
  }

  return results
}

const chromePath = findChrome()

if (!chromePath) {
  throw new Error('Chrome or Edge was not found for the CDP audit.')
}

const preview = spawn(
  process.execPath,
  [
    viteCli,
    'preview',
    '--host',
    '127.0.0.1',
    '--port',
    String(previewPort),
    '--strictPort',
  ],
  {
    cwd: root,
    stdio: 'ignore',
    windowsHide: true,
  },
)
const chrome = spawn(
  chromePath,
  [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--no-first-run',
    '--no-default-browser-check',
    '--remote-debugging-address=127.0.0.1',
    `--remote-debugging-port=${debuggingPort}`,
    `--user-data-dir=${chromeProfile}`,
    'about:blank',
  ],
  {
    stdio: 'ignore',
    windowsHide: true,
  },
)

try {
  await Promise.all([
    waitForUrl(baseUrl),
    waitForUrl(`${debuggingUrl}/json/version`),
  ])
  const targets = await (await fetch(`${debuggingUrl}/json`)).json()
  const page = targets.find(({ type }) => type === 'page')

  if (!page) {
    throw new Error('No browser page target was found.')
  }

  const client = createCdpClient(page.webSocketDebuggerUrl)

  await client.connect()
  const results = await runAudit(client)
  client.close()

  console.table(
    results.map(
      ({
        browserMetrics,
        duration,
        failures,
        kilobytes,
        name,
        requestCount,
      }) => ({
        Scénario: name,
        Requêtes: requestCount,
        'Transfert (KB)': Math.round(kilobytes),
        'Durée (ms)': duration,
        'FCP (ms)': Math.round(browserMetrics.fcp),
        'LCP (ms)': Math.round(browserMetrics.lcp),
        'Tâches longues (ms)': Math.round(
          browserMetrics.longTaskDuration,
        ),
        Statut: failures.length === 0 ? 'OK' : failures.join('; '),
      }),
    ),
  )

  const failedResults = results.filter(({ failures }) => failures.length > 0)

  if (failedResults.length > 0) {
    process.exitCode = 1
  }
} finally {
  chrome.kill()
  preview.kill()

  if (path.dirname(chromeProfile) === os.tmpdir()) {
    await rm(chromeProfile, { force: true, recursive: true }).catch(() => {})
  }
}
