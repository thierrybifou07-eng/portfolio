import { PDFDownloadLink } from '@react-pdf/renderer'
import siteConfig from '../../config/site.js'
import ResumeDocument from './ResumeDocument.jsx'

function ResumePdfDownload({ resumeData }) {
  const { resume } = resumeData

  return (
    <PDFDownloadLink
      className="button button-primary resume-download"
      document={<ResumeDocument {...resumeData} />}
      fileName={siteConfig.resumeFileName}
    >
      {({ error, loading }) => {
        if (error) {
          return resume.downloadError
        }

        return loading ? resume.downloadPreparing : resume.downloadLabel
      }}
    </PDFDownloadLink>
  )
}

export default ResumePdfDownload
