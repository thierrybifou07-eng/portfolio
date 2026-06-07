import { useTranslation } from 'react-i18next'
import PagePlaceholder from '../components/common/PagePlaceholder.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

function SkillsPage() {
  const { t } = useTranslation()

  useDocumentTitle(t('pages.skills.documentTitle'))

  return (
    <PagePlaceholder
      eyebrow={t('pages.skills.eyebrow')}
      title={t('pages.skills.title')}
      description={t('pages.skills.description')}
    />
  )
}

export default SkillsPage
