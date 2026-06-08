import { Link } from 'react-router'
import Reveal from '../animations/Reveal.jsx'
import ButtonLink from '../common/ButtonLink.jsx'
import ProjectPreview from '../projects/ProjectPreview.jsx'

function FeaturedProjects({ home, projects }) {
  return (
    <section className="home-section" aria-labelledby="featured-projects-title">
      <Reveal className="home-section-heading">
        <h2 id="featured-projects-title">{home.featuredProjectsTitle}</h2>
        <ButtonLink to="/projects" variant="secondary">
          {home.primaryAction}
        </ButtonLink>
      </Reveal>

      <div className="home-projects-grid">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.06}>
            <article className="surface-card home-project-card">
              <ProjectPreview
                className="home-project-preview"
                project={project}
              />

              <div className="home-project-content">
                <div className="home-project-meta">
                  <span>{project.category.label}</span>
                  <span>{project.statusLabel}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.shortSummary}</p>

                <ul className="home-technology-list">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <li key={technology.id}>{technology.label}</li>
                  ))}
                </ul>

                <Link
                  className="home-project-link"
                  to={`/projects/${project.slug}`}
                >
                  {home.projectAction}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects
