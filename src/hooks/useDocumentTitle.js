import { useEffect } from 'react'
import siteConfig from '../config/site.js'

function updateMetaContent(selector, content) {
  const element = document.head.querySelector(selector)

  if (element && content) {
    element.setAttribute('content', content)
  }
}

function useDocumentTitle(
  title,
  description,
  robots = 'index,follow',
) {
  useEffect(() => {
    const resolvedTitle = title || siteConfig.defaultTitle

    document.title = resolvedTitle
    updateMetaContent('meta[property="og:title"]', resolvedTitle)
    updateMetaContent('meta[name="twitter:title"]', resolvedTitle)
    updateMetaContent('meta[name="description"]', description)
    updateMetaContent('meta[property="og:description"]', description)
    updateMetaContent('meta[name="twitter:description"]', description)
    updateMetaContent('meta[name="robots"]', robots)
  }, [description, robots, title])
}

export default useDocumentTitle
