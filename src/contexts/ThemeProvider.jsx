import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import {
  THEME_PREFERENCES,
  THEME_STORAGE_KEY,
  ThemeContext,
} from './ThemeContext.js'

const colorSchemeQuery = '(prefers-color-scheme: dark)'
const validPreferences = new Set(Object.values(THEME_PREFERENCES))

function getSystemTheme() {
  return window.matchMedia(colorSchemeQuery).matches
    ? THEME_PREFERENCES.DARK
    : THEME_PREFERENCES.LIGHT
}

function getStoredPreference() {
  try {
    const storedPreference = window.localStorage.getItem(THEME_STORAGE_KEY)

    return validPreferences.has(storedPreference)
      ? storedPreference
      : THEME_PREFERENCES.SYSTEM
  } catch {
    return THEME_PREFERENCES.SYSTEM
  }
}

function persistPreference(preference) {
  try {
    if (preference === THEME_PREFERENCES.SYSTEM) {
      window.localStorage.removeItem(THEME_STORAGE_KEY)
      return
    }

    window.localStorage.setItem(THEME_STORAGE_KEY, preference)
  } catch {
    // The in-memory preference still works when storage is unavailable.
  }
}

function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getStoredPreference)
  const [systemTheme, setSystemTheme] = useState(getSystemTheme)
  const resolvedTheme =
    theme === THEME_PREFERENCES.SYSTEM ? systemTheme : theme

  useEffect(() => {
    const mediaQuery = window.matchMedia(colorSchemeQuery)
    const handleSystemThemeChange = (event) => {
      setSystemTheme(
        event.matches ? THEME_PREFERENCES.DARK : THEME_PREFERENCES.LIGHT,
      )
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [])

  useLayoutEffect(() => {
    const root = document.documentElement

    root.dataset.theme = resolvedTheme
    root.dataset.themePreference = theme
    root.style.colorScheme = resolvedTheme
  }, [resolvedTheme, theme])

  const setTheme = useCallback((nextTheme) => {
    if (!validPreferences.has(nextTheme)) {
      return
    }

    persistPreference(nextTheme)
    setThemeState(nextTheme)
  }, [])

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      systemTheme,
      setTheme,
      themePreferences: THEME_PREFERENCES,
    }),
    [resolvedTheme, setTheme, systemTheme, theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
