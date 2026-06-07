import { useEffect } from 'react'

const defaultTitle = 'Portfolio'

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title || defaultTitle
  }, [title])
}

export default useDocumentTitle
