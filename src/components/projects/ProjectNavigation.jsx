import { Link } from 'react-router'
import Reveal from '../animations/Reveal.jsx'

function NavigationLink({ direction, label, project }) {
  if (!project) {
    return null
  }

  const isPrevious = direction === 'previous'

  return (
    <Link
      className={`project-navigation-link is-${direction}`}
      to={`/projects/${project.slug}`}
    >
      <span className="project-navigation-label">
        {isPrevious ? '← ' : null}
        {label}
        {!isPrevious ? ' →' : null}
      </span>
      <strong>{project.title}</strong>
    </Link>
  )
}

function ProjectNavigation({ labels, nextProject, previousProject }) {
  return (
    <nav
      className="project-navigation"
      aria-label={labels.navigationLabel}
    >
      <Reveal className="project-navigation-inner">
        <NavigationLink
          direction="previous"
          label={labels.previousLabel}
          project={previousProject}
        />
        <NavigationLink
          direction="next"
          label={labels.nextLabel}
          project={nextProject}
        />
      </Reveal>
    </nav>
  )
}

export default ProjectNavigation
