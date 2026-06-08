import { useTranslation } from 'react-i18next'
import Reveal from '../components/animations/Reveal.jsx'
import ButtonLink from '../components/common/ButtonLink.jsx'
import SkillGroupCard from '../components/skills/SkillGroupCard.jsx'
import SkillLevelLegend from '../components/skills/SkillLevelLegend.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import usePortfolioData from '../hooks/usePortfolioData.js'
import '../styles/skills.css'

function SkillsPage() {
  const { t } = useTranslation()
  const { skillLevelLegend, skills, skillsPage } = usePortfolioData()

  useDocumentTitle(t('pages.skills.documentTitle'))

  return (
    <div className="skills-page">
      <section className="skills-introduction" aria-labelledby="skills-title">
        <Reveal className="skills-introduction-content">
          <p className="page-eyebrow">{skillsPage.eyebrow}</p>
          <h1 id="skills-title">{skillsPage.title}</h1>
          <p>{skillsPage.introduction}</p>
        </Reveal>

        <SkillLevelLegend
          title={skillsPage.legendTitle}
          levels={skillLevelLegend}
        />
      </section>

      <section className="skills-groups" aria-labelledby="skills-groups-title">
        <Reveal className="skills-section-heading">
          <h2 id="skills-groups-title">{skillsPage.groupsTitle}</h2>
        </Reveal>

        <div className="skills-grid">
          {skills.map((group, index) => (
            <SkillGroupCard
              key={group.id}
              group={group}
              delay={index * 0.06}
            />
          ))}
        </div>
      </section>

      <Reveal className="skills-projects-cta">
        <div>
          <h2>{skillsPage.practiceTitle}</h2>
          <p>{skillsPage.practiceDescription}</p>
        </div>
        <ButtonLink to="/projects">{skillsPage.projectsAction}</ButtonLink>
      </Reveal>
    </div>
  )
}

export default SkillsPage
