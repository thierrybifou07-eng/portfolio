import { useTranslation } from 'react-i18next'
import PagePlaceholder from '../components/common/PagePlaceholder.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

function ResumePage() {
  const { t } = useTranslation()

  useDocumentTitle(t('pages.resume.documentTitle'))

  return (
    <PagePlaceholder
      eyebrow={t('pages.resume.eyebrow')}
      title={t('pages.resume.title')}
      description={t('pages.resume.description')}
    />
  )
}

export default ResumePage
