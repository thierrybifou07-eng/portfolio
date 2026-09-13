import { useState } from 'react'
import siteConfig from '../../config/site.js'

function ResumePdfDownload({ resumeData }) {
  const [status, setStatus] = useState('idle')
  const { resume } = resumeData
  const isPreparing = status === 'preparing'

  const handleDownload = async () => {
    if (isPreparing) {
      return
    }

    setStatus('preparing')

    try {
      const [{ pdf }, { default: ResumeDocument }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('./ResumeDocument.jsx'),
      ])
      const blob = await pdf(<ResumeDocument {...resumeData} />).toBlob()
      const downloadUrl = URL.createObjectURL(blob)
      const link = document.createElement('a')

      link.href = downloadUrl
      link.download = siteConfig.resumeFileName
      link.hidden = true
      document.body.append(link)
      link.click()
      link.remove()
      window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 0)
      setStatus('idle')
    } catch {
      setStatus('error')
    }
  }

  return (
    <button
      type="button"
      className="button button-primary resume-download"
      aria-busy={isPreparing}
      aria-live="polite"
      disabled={isPreparing}
      onClick={handleDownload}
    >
      {status === 'error'
        ? resume.downloadError
        : isPreparing
          ? resume.downloadPreparing
          : resume.downloadLabel}
    </button>
  )
}

export default ResumePdfDownload
