import projectPlaceholder from '../../assets/images/projects/project-placeholder.svg'
import mediaPlaceholder from '../../assets/images/placeholders/media-placeholder.svg'

export const projectPreviewVariants = Object.freeze({
  MOBILE: 'mobile',
  DESKTOP: 'desktop',
})

export const projectPreviewFits = Object.freeze({
  CONTAIN: 'contain',
  COVER: 'cover',
})

export const projectLiveStatuses = Object.freeze({
  AVAILABLE: 'available',
  UNAVAILABLE: 'unavailable',
  COMING_SOON: 'coming-soon',
})

export const projectDefaults = Object.freeze({
  previewVariant: projectPreviewVariants.DESKTOP,
  previewFit: projectPreviewFits.CONTAIN,
  liveUrl: null,
  repositoryUrl: null,
  liveStatus: projectLiveStatuses.UNAVAILABLE,
})

function defineProject(project) {
  return Object.freeze({
    ...project,
    previewVariant:
      project.previewVariant ?? projectDefaults.previewVariant,
    previewFit: project.previewFit ?? projectDefaults.previewFit,
    liveUrl: project.liveUrl ?? projectDefaults.liveUrl,
    repositoryUrl: project.repositoryUrl ?? projectDefaults.repositoryUrl,
    liveStatus: project.liveStatus ?? projectDefaults.liveStatus,
    technologyIds: Object.freeze([...project.technologyIds]),
    galleryImages: Object.freeze([...project.galleryImages]),
  })
}

const projects = Object.freeze([
  defineProject({
    slug: 'arms',
    categoryId: 'operations',
    technologyIds: ['react', 'react-router', 'javascript', 'rest-api'],
    image: projectPlaceholder,
    galleryImages: [projectPlaceholder, mediaPlaceholder],
    featured: true,
    status: 'concept',
    previewVariant: projectPreviewVariants.DESKTOP,
    previewFit: projectPreviewFits.CONTAIN,
    liveUrl: null,
    repositoryUrl: null,
    liveStatus: projectLiveStatuses.UNAVAILABLE,
  }),
  defineProject({
    slug: 'h-market',
    categoryId: 'commerce',
    technologyIds: [
      'react',
      'javascript',
      'node',
      'express',
      'postgresql',
    ],
    image: projectPlaceholder,
    galleryImages: [projectPlaceholder, mediaPlaceholder],
    featured: true,
    status: 'concept',
    previewVariant: projectPreviewVariants.DESKTOP,
    previewFit: projectPreviewFits.CONTAIN,
    liveUrl: null,
    repositoryUrl: null,
    liveStatus: projectLiveStatuses.UNAVAILABLE,
  }),
  defineProject({
    slug: 'bustix',
    categoryId: 'mobility',
    technologyIds: [
      'react',
      'react-router',
      'javascript',
      'node',
      'rest-api',
    ],
    image: projectPlaceholder,
    galleryImages: [projectPlaceholder, mediaPlaceholder],
    featured: true,
    status: 'concept',
    previewVariant: projectPreviewVariants.MOBILE,
    previewFit: projectPreviewFits.CONTAIN,
    liveUrl: null,
    repositoryUrl: null,
    liveStatus: projectLiveStatuses.COMING_SOON,
  }),
])

export default projects
