import { useTranslation } from 'react-i18next'
import AboutIntroduction from '../components/about/AboutIntroduction.jsx'
import AboutPrinciples from '../components/about/AboutPrinciples.jsx'
import TimelineSection from '../components/about/TimelineSection.jsx'
import Reveal from '../components/animations/Reveal.jsx'
import ButtonLink from '../components/common/ButtonLink.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import usePortfolioData from '../hooks/usePortfolioData.js'
import '../styles/about.css'

function AboutPage() {
  const { t } = useTranslation()
  const { about, education, experience, locale, profile } = usePortfolioData()

  useDocumentTitle(t('pages.about.documentTitle'))

  return (
    <div className="about-page">
      <AboutIntroduction about={about} profile={profile} />
      <AboutPrinciples about={about} profile={profile} />
      <TimelineSection
        id="experience"
        title={about.experienceTitle}
        items={experience}
        locale={locale}
        currentLabel={about.currentLabel}
      />
      <TimelineSection
        id="education"
        title={about.educationTitle}
        items={education}
        locale={locale}
        currentLabel={about.currentLabel}
      />

      <Reveal className="about-contact-cta">
        <h2>{about.contactTitle}</h2>
        <ButtonLink to="/contact">{about.contactAction}</ButtonLink>
      </Reveal>
    </div>
  )
}

export default AboutPage
