import PagePlaceholder from '../components/common/PagePlaceholder.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

function ProjectsPage() {
  useDocumentTitle('Projets | Portfolio')

  return (
    <PagePlaceholder
      eyebrow="Réalisations"
      title="Projets"
      description="La liste filtrable des projets sera construite dans le module P8."
    />
  )
}

export default ProjectsPage
