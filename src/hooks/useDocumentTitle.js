import { useEffect } from 'react'
import siteConfig from '../config/site.js'

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title || siteConfig.defaultTitle
  }, [title])
}

export default useDocumentTitle
