import PagePlaceholder from '../components/common/PagePlaceholder.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

function ResumePage() {
  useDocumentTitle('CV | Portfolio')

  return (
    <PagePlaceholder
      eyebrow="Parcours professionnel"
      title="Curriculum vitae"
      description="L'aperçu du CV et son téléchargement PDF seront construits dans le module P10."
    />
  )
}

export default ResumePage
