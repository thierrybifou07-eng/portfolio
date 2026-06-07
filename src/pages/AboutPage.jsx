import { useTranslation } from 'react-i18next'
import PagePlaceholder from '../components/common/PagePlaceholder.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

function AboutPage() {
  const { t } = useTranslation()

  useDocumentTitle(t('pages.about.documentTitle'))

  return (
    <PagePlaceholder
      eyebrow={t('pages.about.eyebrow')}
      title={t('pages.about.title')}
      description={t('pages.about.description')}
    />
  )
}

export default AboutPage
