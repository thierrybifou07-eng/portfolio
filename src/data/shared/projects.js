import projectPlaceholder from '../../assets/images/projects/project-placeholder.svg'
import mediaPlaceholder from '../../assets/images/placeholders/media-placeholder.svg'
import armsHomePage from '../../assets/images/projects/arms/home.png'
import armsRegisterPage from '../../assets/images/projects/arms/register.png'
import hshopCardPage from '../../assets/images/projects/h-shop/product-card.png'
import hshopCardPage2 from '../../assets/images/projects/h-shop/product-card-2.png'

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
    technologyIds: [
      'php',
      'laravel',
      'blade',
      'bootstrap',
      'mysql',
      'git',
      'uml',
      'rbac',
    ],
    image: armsHomePage,
    gallery: [
      {
        id: 'overview',
        src: armsHomePage,
      },
      {
        id: 'requests',
        src: armsRegisterPage,
      }
    ],
    featured: true,
    status: 'concept',
    previewVariant: projectPreviewVariants.DESKTOP,
    previewFit: projectPreviewFits.CONTAIN,
    liveUrl: 'https://arms-laravel-app-production.up.railway.app/',
    repositoryUrl: 'https://github.com/thierrybifou07-eng/arms-laravel-app',
    liveStatus: projectLiveStatuses.AVAILABLE,
  }),
  defineProject({
    slug: 'h-shop',
    categoryId: 'commerce',
    technologyIds: [
      'react',
      'react-router',
      'javascript',
      'vite',
      'node',
      'express',
      'rest-api',
      'authentication',
      'git',
    ],
    image: hshopCardPage,
    gallery: [
      {
        id: 'catalog',
        src: hshopCardPage2,
      },
      {
        id: 'checkout',
        src: hshopCardPage,
      },
      {
        id: 'payment',
        src: hshopCardPage,
      },
    ],
    featured: true,
    status: 'concept',
    previewVariant: projectPreviewVariants.DESKTOP,
    previewFit: projectPreviewFits.CONTAIN,
    liveUrl: 'https://h-market-production.up.railway.app/',
    repositoryUrl: 'https://github.com/thierrybifou07-eng/h-market-app/',
    liveStatus: projectLiveStatuses.AVAILABLE,
  }),
  defineProject({
    slug: 'bustix',
    categoryId: 'mobility',
    technologyIds: [
      'uml',
      'database-modeling',
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
      {
        id: 'ticket-validation',
        src: mediaPlaceholder,
      },
      {
        id: 'dashboard-administrator',
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
