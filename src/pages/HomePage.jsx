import { useTranslation } from 'react-i18next'
import Reveal from '../components/animations/Reveal.jsx'
import ButtonLink from '../components/common/ButtonLink.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import FeaturedSkills from '../components/home/FeaturedSkills.jsx'
import HomeHero from '../components/home/HomeHero.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import usePortfolioData from '../hooks/usePortfolioData.js'
import '../styles/home.css'

function HomePage() {
  const { t } = useTranslation()
  const { home, profile, projects, skills } = usePortfolioData()
  const featuredProjects = projects.filter(({ featured }) => featured)

  useDocumentTitle(t('pages.home.documentTitle'))

  return (
    <div className="home-page">
      <HomeHero home={home} profile={profile} />
      <FeaturedSkills home={home} skillGroups={skills} />
      <FeaturedProjects home={home} projects={featuredProjects} />

      <Reveal className="home-contact-cta">
        <h2>{home.contactTitle}</h2>
        <ButtonLink to="/contact">{home.contactAction}</ButtonLink>
      </Reveal>
    </div>
  )
}

export default HomePage
