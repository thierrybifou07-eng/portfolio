import ButtonLink from '../components/common/ButtonLink.jsx'
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
      <ButtonLink to="/">Retour à l'accueil</ButtonLink>
    </PagePlaceholder>
  )
}

export default NotFoundPage
