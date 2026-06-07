import { useTranslation } from 'react-i18next'
import PagePlaceholder from '../components/common/PagePlaceholder.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

function ProjectsPage() {
  const { t } = useTranslation()

  useDocumentTitle(t('pages.projects.documentTitle'))

  return (
    <PagePlaceholder
      eyebrow={t('pages.projects.eyebrow')}
      title={t('pages.projects.title')}
      description={t('pages.projects.description')}
    />
  )
}

export default ProjectsPage
