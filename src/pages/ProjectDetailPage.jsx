import { useParams } from 'react-router'
import PagePlaceholder from '../components/common/PagePlaceholder.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

function formatProjectTitle(slug = '') {
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function ProjectDetailPage() {
  const { slug } = useParams()
  const projectTitle = formatProjectTitle(slug) || 'Projet'

  useDocumentTitle(`${projectTitle} | Projets | Portfolio`)

  return (
    <PagePlaceholder
      eyebrow="Étude de cas"
      title={projectTitle}
      description="Le contenu détaillé et la validation du projet seront ajoutés dans le module P9."
    />
  )
}

export default ProjectDetailPage
