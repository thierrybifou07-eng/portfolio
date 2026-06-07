import { useTranslation } from 'react-i18next'
import PagePlaceholder from '../components/common/PagePlaceholder.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

function ContactPage() {
  const { t } = useTranslation()

  useDocumentTitle(t('pages.contact.documentTitle'))

  return (
    <PagePlaceholder
      eyebrow={t('pages.contact.eyebrow')}
      title={t('pages.contact.title')}
      description={t('pages.contact.description')}
    />
  )
}

export default ContactPage
