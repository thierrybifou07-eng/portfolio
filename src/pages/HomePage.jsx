import PagePlaceholder from '../components/common/PagePlaceholder.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

function HomePage() {
  useDocumentTitle('Accueil | Portfolio')

  return (
    <PagePlaceholder
      eyebrow="Portfolio"
      title="Accueil"
      description="Le contenu de la page d'accueil sera construit dans le module P5."
    />
  )
}

export default HomePage
