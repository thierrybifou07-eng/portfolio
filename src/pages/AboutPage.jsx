import PagePlaceholder from '../components/common/PagePlaceholder.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

function AboutPage() {
  useDocumentTitle('À propos | Portfolio')

  return (
    <PagePlaceholder
      eyebrow="Présentation"
      title="À propos"
      description="Le parcours, les formations et la philosophie de travail seront ajoutés dans le module P6."
    />
  )
}

export default AboutPage
