import { Link } from 'react-router'
import PagePlaceholder from '../components/common/PagePlaceholder.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

function NotFoundPage() {
  useDocumentTitle('Page introuvable | Portfolio')

  return (
    <PagePlaceholder
      eyebrow="Erreur 404"
      title="Page introuvable"
      description="L'adresse demandée n'existe pas ou a été déplacée."
    >
      <Link to="/">Retour à l'accueil</Link>
    </PagePlaceholder>
  )
}

export default NotFoundPage
