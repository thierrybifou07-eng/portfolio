import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/animations/Reveal.jsx'
import ProjectCard from '../components/projects/ProjectCard.jsx'
import ProjectFilters from '../components/projects/ProjectFilters.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import usePortfolioData from '../hooks/usePortfolioData.js'
import '../styles/projects.css'

const ALL_PROJECTS_FILTER = 'all'

function ProjectsPage() {
  const { t } = useTranslation()
  const { projectFilters, projectLinks, projects, projectsPage } =
    usePortfolioData()
  const [activeFilter, setActiveFilter] = useState(ALL_PROJECTS_FILTER)
  const filters = [
    { id: ALL_PROJECTS_FILTER, label: projectsPage.allFilter },
    ...projectFilters,
  ]
  const visibleProjects = useMemo(
    () =>
      activeFilter === ALL_PROJECTS_FILTER
        ? projects
        : projects.filter(({ categoryId }) => categoryId === activeFilter),
    [activeFilter, projects],
  )
  const resultLabel =
    visibleProjects.length === 1
      ? projectsPage.resultSingular
      : projectsPage.resultPlural

  useDocumentTitle(
    t('pages.projects.documentTitle'),
    projectsPage.introduction,
  )

  return (
    <div className="projects-page">
      <Reveal className="projects-introduction">
        <p className="page-eyebrow">{projectsPage.eyebrow}</p>
        <h1>{projectsPage.title}</h1>
        <p>{projectsPage.introduction}</p>
      </Reveal>

      <section className="projects-listing" aria-label={projectsPage.eyebrow}>
        <Reveal className="projects-toolbar">
          <ProjectFilters
            activeFilter={activeFilter}
            filters={filters}
            label={projectsPage.filtersLabel}
            onFilterChange={setActiveFilter}
          />
          <p className="projects-result-count" aria-live="polite">
            <strong>{visibleProjects.length}</strong> {resultLabel}
          </p>
        </Reveal>

        {visibleProjects.length > 0 ? (
          <div className="projects-grid">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                delay={index * 0.06}
                labels={{
                  detail: projectsPage.detailAction,
                  ...projectLinks,
                }}
              />
            ))}
          </div>
        ) : (
          <p className="projects-empty-state">{projectsPage.noResults}</p>
        )}
      </section>
    </div>
  )
}

export default ProjectsPage
