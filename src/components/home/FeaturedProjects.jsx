import { Link } from 'react-router'
import Reveal from '../animations/Reveal.jsx'
import ButtonLink from '../common/ButtonLink.jsx'
import SafeImage from '../common/SafeImage.jsx'

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
              <SafeImage
                className="home-project-image"
                src={project.image}
                alt={project.imageAlt}
                width="1200"
                height="750"
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
