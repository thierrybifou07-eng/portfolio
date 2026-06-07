import PagePlaceholder from '../components/common/PagePlaceholder.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

function ContactPage() {
  useDocumentTitle('Contact | Portfolio')

  return (
    <PagePlaceholder
      eyebrow="Échangeons"
      title="Contact"
      description="Les coordonnées et le formulaire frontend seront construits dans le module P11."
    />
  )
}

export default ContactPage
