import { Link } from 'react-router'
import Reveal from '../animations/Reveal.jsx'
import SafeImage from '../common/SafeImage.jsx'

function ExternalLink({ children, href }) {
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

function ProjectDetailHero({ labels, project }) {
  return (
    <section className="project-detail-hero" aria-labelledby="project-title">
      <Reveal className="project-detail-introduction">
        <Link className="project-back-link" to="/projects">
          <span aria-hidden="true">←</span>
          {labels.backAction}
        </Link>

        <div className="project-detail-meta">
          <span>{project.category.label}</span>
          <span>{project.statusLabel}</span>
        </div>

        <h1 id="project-title">{project.title}</h1>
        <p>{project.summary}</p>

        <div className="project-detail-external-links">
          <ExternalLink href={project.links.demo}>
            {labels.demoAction}
          </ExternalLink>
          <ExternalLink href={project.links.repository}>
            {labels.repositoryAction}
          </ExternalLink>
        </div>
      </Reveal>

      <Reveal className="project-detail-cover" delay={0.08}>
        <SafeImage
          src={project.image}
          alt={project.imageAlt}
          width="1200"
          height="750"
          loading="eager"
          fetchPriority="high"
        />
      </Reveal>
    </section>
  )
}

export default ProjectDetailHero
