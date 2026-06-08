import { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/animations/Reveal.jsx'
import ResumePreview from '../components/resume/ResumePreview.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import usePortfolioData from '../hooks/usePortfolioData.js'
import '../styles/resume.css'

const ResumePdfDownload = lazy(
  () => import('../features/resume/ResumePdfDownload.jsx'),
)

function ResumePage() {
  const { t } = useTranslation()
  const {
    contact,
    education,
    experience,
    locale,
    profile,
    resume,
    skills,
  } = usePortfolioData()
  const resumeData = {
    contact,
    education,
    experience,
    locale,
    profile,
    resume,
    skills,
  }

  useDocumentTitle(t('pages.resume.documentTitle'))

  return (
    <div className="resume-page">
      <Reveal className="resume-introduction">
        <div>
          <p className="page-eyebrow">{resume.eyebrow}</p>
          <h1>{resume.title}</h1>
          <p>{resume.summary}</p>
        </div>

        <div className="resume-actions">
          <Suspense
            fallback={
              <button className="button button-primary" type="button" disabled>
                {resume.downloadPreparing}
              </button>
            }
          >
            <ResumePdfDownload resumeData={resumeData} />
          </Suspense>
          <p>{resume.fictitiousNotice}</p>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <ResumePreview {...resumeData} />
      </Reveal>
    </div>
  )
}

export default ResumePage
