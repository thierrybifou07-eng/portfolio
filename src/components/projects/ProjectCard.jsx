import { Link } from 'react-router'
import Reveal from '../animations/Reveal.jsx'
import ProjectPreview from './ProjectPreview.jsx'

function ExternalProjectLink({ children, href }) {
  if (!href) {
    return null
  }

  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  )
}

function ProjectCard({ actions, delay, project }) {
  return (
    <Reveal delay={delay}>
      <article className="surface-card project-card">
        <ProjectPreview className="project-card-preview" project={project} />

        <div className="project-card-content">
          <div className="project-card-meta">
            <span>{project.category.label}</span>
            <span>{project.statusLabel}</span>
          </div>

          <div className="project-card-copy">
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
          </div>

          <ul className="project-card-technologies">
            {project.technologies.map((technology) => (
              <li key={technology.id}>{technology.label}</li>
            ))}
          </ul>

          <div className="project-card-actions">
            <Link
              className="project-detail-link"
              to={`/projects/${project.slug}`}
            >
              {actions.detail}
              <span aria-hidden="true">→</span>
            </Link>
            <ExternalProjectLink href={project.links.demo}>
              {actions.demo}
            </ExternalProjectLink>
            <ExternalProjectLink href={project.links.repository}>
              {actions.repository}
            </ExternalProjectLink>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default ProjectCard
