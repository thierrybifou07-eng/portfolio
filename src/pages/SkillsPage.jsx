import PagePlaceholder from '../components/common/PagePlaceholder.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

function SkillsPage() {
  useDocumentTitle('Compétences | Portfolio')

  return (
    <PagePlaceholder
      eyebrow="Savoir-faire"
      title="Compétences"
      description="Les compétences catégorisées et leurs niveaux indicatifs seront ajoutés dans le module P7."
    />
  )
}

export default SkillsPage
