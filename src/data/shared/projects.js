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

export const projectGalleryDisplayModes = Object.freeze({
  AUTO: 'auto',
  MOBILE: 'mobile',
  DESKTOP: 'desktop',
})

export const projectGalleryFits = projectPreviewFits

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

export const projectGalleryDefaults = Object.freeze({
  displayMode: projectGalleryDisplayModes.AUTO,
  fit: projectGalleryFits.CONTAIN,
  thumbnailSrc: null,
})

function defineGalleryItem(item) {
  return Object.freeze({
    ...item,
    displayMode:
      item.displayMode ?? projectGalleryDefaults.displayMode,
    fit: item.fit ?? projectGalleryDefaults.fit,
    thumbnailSrc:
      item.thumbnailSrc ?? projectGalleryDefaults.thumbnailSrc,
  })
}

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
    gallery: Object.freeze(project.gallery.map(defineGalleryItem)),
  })
}

const projects = Object.freeze([
  defineProject({
    slug: 'arms',
    categoryId: 'operations',
    technologyIds: ['react', 'react-router', 'javascript', 'rest-api'],
    image: projectPlaceholder,
    gallery: [
      {
        id: 'overview',
        src: projectPlaceholder,
      },
      {
        id: 'requests',
        src: mediaPlaceholder,
      },
    ],
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
    gallery: [
      {
        id: 'catalog',
        src: projectPlaceholder,
      },
      {
        id: 'checkout',
        src: mediaPlaceholder,
      },
    ],
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
    gallery: [
      {
        id: 'search',
        src: projectPlaceholder,
      },
      {
        id: 'seat-selection',
        src: mediaPlaceholder,
      },
    ],
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
