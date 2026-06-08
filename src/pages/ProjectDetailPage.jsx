import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import Reveal from '../components/animations/Reveal.jsx'
import ButtonLink from '../components/common/ButtonLink.jsx'
import ProjectDetailHero from '../components/projects/ProjectDetailHero.jsx'
import ProjectGallery from '../components/projects/ProjectGallery.jsx'
import ProjectNavigation from '../components/projects/ProjectNavigation.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import usePortfolioData from '../hooks/usePortfolioData.js'
import '../styles/project-detail.css'

function ProjectDetailPage() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const { projectDetailPage, projectLinks, projects } = usePortfolioData()
  const projectIndex = projects.findIndex((project) => project.slug === slug)
  const project = projects[projectIndex]
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject =
    projectIndex >= 0 && projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : null
  const projectTitle = project?.title ?? projectDetailPage.unknownTitle

  useDocumentTitle(
    t('pages.projectDetail.documentTitle', { project: projectTitle }),
    project?.shortSummary ?? projectDetailPage.unknownDescription,
    project ? 'index,follow' : 'noindex,follow',
  )

  if (!project) {
    return (
      <Reveal className="project-unknown">
        <p className="page-eyebrow">{projectDetailPage.unknownEyebrow}</p>
        <h1>{projectDetailPage.unknownTitle}</h1>
        <p>{projectDetailPage.unknownDescription}</p>
        <ButtonLink to="/projects">
          {projectDetailPage.unknownAction}
        </ButtonLink>
      </Reveal>
    )
  }

  return (
    <article className="project-detail-page">
      <ProjectDetailHero
        labels={projectDetailPage}
        linkLabels={projectLinks}
        project={project}
      />

      <section className="project-case-study">
        <Reveal className="surface-card project-case-study-block">
          <h2>{projectDetailPage.problemTitle}</h2>
          <p>{project.problem}</p>
        </Reveal>
        <Reveal className="surface-card project-case-study-block" delay={0.06}>
          <h2>{projectDetailPage.solutionTitle}</h2>
          <p>{project.solution}</p>
        </Reveal>
      </section>

      <section className="project-detail-columns">
        <Reveal className="project-features">
          <h2>{projectDetailPage.featuresTitle}</h2>
          <ol>
            {project.features.map((feature, index) => (
              <li key={feature}>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p>{feature}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="project-technologies" delay={0.06}>
          <h2>{projectDetailPage.technologiesTitle}</h2>
          <ul>
            {project.technologies.map((technology) => (
              <li key={technology.id}>{technology.label}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <ProjectGallery
        title={projectDetailPage.galleryTitle}
        images={project.gallery}
      />
      <ProjectNavigation
        labels={projectDetailPage}
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </article>
  )
}

export default ProjectDetailPage
