import { useTranslation } from 'react-i18next'
import Reveal from '../components/animations/Reveal.jsx'
import ContactDetails from '../components/contact/ContactDetails.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import usePortfolioData from '../hooks/usePortfolioData.js'
import '../styles/contact.css'

function ContactPage() {
  const { t } = useTranslation()
  const { contact, profile } = usePortfolioData()

  useDocumentTitle(t('pages.contact.documentTitle'))

  return (
    <div className="contact-page">
      <Reveal className="contact-introduction">
        <p className="page-eyebrow">{contact.eyebrow}</p>
        <h1>{contact.title}</h1>
        <p>{contact.introduction}</p>
      </Reveal>

      <div className="contact-layout">
        <Reveal>
          <ContactDetails contact={contact} profile={profile} />
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm recipient={contact.email} labels={contact.form} />
        </Reveal>
      </div>
    </div>
  )
}

export default ContactPage
