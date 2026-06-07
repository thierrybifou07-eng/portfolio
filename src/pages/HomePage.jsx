import { useTranslation } from 'react-i18next'
import PagePlaceholder from '../components/common/PagePlaceholder.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

function HomePage() {
  const { t } = useTranslation()

  useDocumentTitle(t('pages.home.documentTitle'))

  return (
    <PagePlaceholder
      eyebrow={t('pages.home.eyebrow')}
      title={t('pages.home.title')}
      description={t('pages.home.description')}
    />
  )
}

export default HomePage
