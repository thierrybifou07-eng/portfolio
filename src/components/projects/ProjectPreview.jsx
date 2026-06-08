import SafeImage from '../common/SafeImage.jsx'
import '../../styles/project-preview.css'

function ProjectPreview({
  className = '',
  fetchPriority,
  loading = 'lazy',
  project,
}) {
  const classes = [
    'project-preview',
    `project-preview-${project.previewVariant}`,
    `project-preview-fit-${project.previewFit}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')
  const isMobile = project.previewVariant === 'mobile'

  return (
    <div
      className={classes}
      data-preview-fit={project.previewFit}
      data-preview-variant={project.previewVariant}
    >
      <div className="project-preview-frame">
        <SafeImage
          className="project-preview-image"
          src={project.image}
          alt={project.imageAlt}
          width={isMobile ? 750 : 1200}
          height={isMobile ? 1334 : 750}
          loading={loading}
          fetchPriority={fetchPriority}
        />
      </div>
    </div>
  )
}

export default ProjectPreview
