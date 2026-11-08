import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/animations/Reveal.jsx'
import ResumePreview from '../components/resume/ResumePreview.jsx'
import buildResumeModel from '../features/resume/buildResumeModel.js'
import ResumePdfDownload from '../features/resume/ResumePdfDownload.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import usePortfolioData from '../hooks/usePortfolioData.js'
import '../styles/resume.css'

function ResumePage() {
  const { t } = useTranslation()
  const portfolioData = usePortfolioData()
  const { resume } = portfolioData
  const model = useMemo(() => buildResumeModel(portfolioData), [portfolioData])

  useDocumentTitle(t('pages.resume.documentTitle'), resume.summary)

  return (
    <div className="resume-page">
      <Reveal className="resume-introduction">
        <div>
          <p className="page-eyebrow">{resume.eyebrow}</p>
          <h1>{resume.title}</h1>
          <p>{resume.summary}</p>
        </div>

        <div className="resume-actions">
          <ResumePdfDownload model={model} />
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <ResumePreview model={model} />
      </Reveal>
    </div>
  )
}

export default ResumePage
