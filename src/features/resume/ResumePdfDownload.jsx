import { useState } from 'react'

function ResumePdfDownload({ model }) {
  const [status, setStatus] = useState('idle')
  const { labels } = model
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
      const blob = await pdf(<ResumeDocument model={model} />).toBlob()
      const downloadUrl = URL.createObjectURL(blob)
      const link = document.createElement('a')

      link.href = downloadUrl
      link.download = model.fileName
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
      disabled={isPreparing}
      onClick={handleDownload}
    >
      {status === 'error'
        ? labels.downloadError
        : isPreparing
          ? labels.downloadPreparing
          : labels.download}
    </button>
  )
}

export default ResumePdfDownload
