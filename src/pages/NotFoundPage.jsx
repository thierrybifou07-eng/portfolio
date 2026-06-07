import { useTranslation } from 'react-i18next'
import ButtonLink from '../components/common/ButtonLink.jsx'
import PagePlaceholder from '../components/common/PagePlaceholder.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

function NotFoundPage() {
  const { t } = useTranslation()

  useDocumentTitle(t('pages.notFound.documentTitle'))

  return (
    <PagePlaceholder
      eyebrow={t('pages.notFound.eyebrow')}
      title={t('pages.notFound.title')}
      description={t('pages.notFound.description')}
    >
      <ButtonLink to="/">{t('pages.notFound.action')}</ButtonLink>
    </PagePlaceholder>
  )
}

export default NotFoundPage
