import { projectLiveStatuses } from '../../data/shared/projects.js'
import ExternalLinkIcon from '../icons/ExternalLinkIcon.jsx'
import '../../styles/project-links.css'

function isHttpUrl(value) {
  if (typeof value !== 'string') {
    return false
  }

  try {
    const url = new URL(value)

    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

function ExternalProjectLink({ children, href }) {
  return (
    <a
      className="project-external-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{children}</span>
      <ExternalLinkIcon />
    </a>
  )
}

function ProjectExternalLinks({ className = '', labels, project }) {
  const liveUrl =
    project.liveStatus === projectLiveStatuses.AVAILABLE &&
    isHttpUrl(project.liveUrl)
      ? project.liveUrl
      : null
  const repositoryUrl = isHttpUrl(project.repositoryUrl)
    ? project.repositoryUrl
    : null
  const statusLabel =
    project.liveStatus === projectLiveStatuses.COMING_SOON
      ? labels.comingSoon
      : project.liveStatus === projectLiveStatuses.UNAVAILABLE
        ? labels.unavailable
        : null

  if (!liveUrl && !repositoryUrl && !statusLabel) {
    return null
  }

  return (
    <div
      className={['project-external-links', className]
        .filter(Boolean)
        .join(' ')}
    >
      {liveUrl ? (
        <ExternalProjectLink href={liveUrl}>
          {labels.liveDemo}
        </ExternalProjectLink>
      ) : null}

      {repositoryUrl ? (
        <ExternalProjectLink href={repositoryUrl}>
          {labels.sourceCode}
        </ExternalProjectLink>
      ) : null}

      {statusLabel ? (
        <span
          className="project-live-status"
          data-status={project.liveStatus}
        >
          {statusLabel}
        </span>
      ) : null}
    </div>
  )
}

export default ProjectExternalLinks
