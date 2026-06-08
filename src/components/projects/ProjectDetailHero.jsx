import { Link } from 'react-router'
import Reveal from '../animations/Reveal.jsx'
import ProjectExternalLinks from './ProjectExternalLinks.jsx'
import ProjectPreview from './ProjectPreview.jsx'

function ProjectDetailHero({ labels, linkLabels, project }) {
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

        <ProjectExternalLinks
          className="project-detail-external-links"
          labels={linkLabels}
          project={project}
        />
      </Reveal>

      <Reveal className="project-detail-cover" delay={0.08}>
        <ProjectPreview
          className="project-detail-preview"
          project={project}
          loading="eager"
          fetchPriority="high"
        />
      </Reveal>
    </section>
  )
}

export default ProjectDetailHero
