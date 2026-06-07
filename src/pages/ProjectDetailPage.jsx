import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import PagePlaceholder from '../components/common/PagePlaceholder.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

function formatProjectTitle(slug = '') {
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function ProjectDetailPage() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const projectTitle =
    formatProjectTitle(slug) || t('pages.projectDetail.fallbackTitle')

  useDocumentTitle(
    t('pages.projectDetail.documentTitle', { project: projectTitle }),
  )

  return (
    <PagePlaceholder
      eyebrow={t('pages.projectDetail.eyebrow')}
      title={projectTitle}
      description={t('pages.projectDetail.description')}
    />
  )
}

export default ProjectDetailPage
