import {
  projectGalleryDisplayModes,
  projectGalleryFits,
  projectLiveStatuses,
  projectPreviewFits,
  projectPreviewVariants,
} from './shared/projects.js'

const requiredProjectTextFields = Object.freeze([
  'title',
  'shortSummary',
  'summary',
  'problem',
  'solution',
  'imageAlt',
])

const validProjectPreviewVariants = new Set(
  Object.values(projectPreviewVariants),
)
const validProjectPreviewFits = new Set(Object.values(projectPreviewFits))
const validProjectGalleryDisplayModes = new Set(
  Object.values(projectGalleryDisplayModes),
)
const validProjectGalleryFits = new Set(Object.values(projectGalleryFits))
const validProjectLiveStatuses = new Set(Object.values(projectLiveStatuses))

function assert(condition, message) {
  if (!condition) {
    throw new Error(`Invalid portfolio data: ${message}`)
  }
}

function assertString(value, path) {
  assert(
    typeof value === 'string' && value.trim().length > 0,
    `${path} must be a non-empty string`,
  )
}

function assertNullableString(value, path) {
  assert(
    value === null ||
      (typeof value === 'string' && value.trim().length > 0),
    `${path} must be null or a non-empty string`,
  )
}

function isHttpUrl(value) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    return false
  }

  try {
    const url = new URL(value)

    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

function assertNullableHttpUrl(value, path) {
  assert(
    value === null || isHttpUrl(value),
    `${path} must be null or a valid HTTP(S) URL`,
  )
}

function validateProjectContract(project) {
  assert(
    validProjectPreviewVariants.has(project.previewVariant),
    `${project.slug}.previewVariant must be mobile or desktop`,
  )
  assert(
    validProjectPreviewFits.has(project.previewFit),
    `${project.slug}.previewFit must be contain or cover`,
  )
  assert(
    validProjectLiveStatuses.has(project.liveStatus),
    `${project.slug}.liveStatus is invalid`,
  )
  assertNullableHttpUrl(project.liveUrl, `${project.slug}.liveUrl`)
  assertNullableHttpUrl(project.repositoryUrl, `${project.slug}.repositoryUrl`)
  assert(
    project.liveStatus !== projectLiveStatuses.AVAILABLE ||
      isHttpUrl(project.liveUrl),
    `${project.slug}.liveUrl is required when liveStatus is available`,
  )
  assert(
    Array.isArray(project.gallery) && project.gallery.length > 0,
    `${project.slug}.gallery must not be empty`,
  )

  const galleryIds = new Set()

  project.gallery.forEach((item, index) => {
    const path = `${project.slug}.gallery[${index}]`

    assertString(item.id, `${path}.id`)
    assert(!galleryIds.has(item.id), `${path}.id must be unique`)
    galleryIds.add(item.id)
    assertString(item.src, `${path}.src`)
    assert(
      validProjectGalleryDisplayModes.has(item.displayMode),
      `${path}.displayMode is invalid`,
    )
    assert(
      validProjectGalleryFits.has(item.fit),
      `${path}.fit is invalid`,
    )
    assertNullableString(item.thumbnailSrc, `${path}.thumbnailSrc`)
  })
}

function assertMatchingShape(reference, candidate, path) {
  if (Array.isArray(reference)) {
    assert(Array.isArray(candidate), `${path} must be an array`)
    assert(
      reference.length === candidate.length,
      `${path} must contain ${reference.length} items`,
    )

    reference.forEach((item, index) => {
      assertMatchingShape(item, candidate[index], `${path}[${index}]`)
    })
    return
  }

  if (reference && typeof reference === 'object') {
    assert(
      candidate && typeof candidate === 'object' && !Array.isArray(candidate),
      `${path} must be an object`,
    )

    const referenceKeys = Object.keys(reference).sort()
    const candidateKeys = Object.keys(candidate).sort()

    assert(
      referenceKeys.join('|') === candidateKeys.join('|'),
      `${path} must contain the same keys in every locale`,
    )

    for (const key of referenceKeys) {
      assertMatchingShape(reference[key], candidate[key], `${path}.${key}`)
    }
    return
  }

  assert(
    typeof candidate === typeof reference,
    `${path} must keep the same value type in every locale`,
  )
}

function validateLocalizedContent({
  content,
  educationTimeline,
  experienceTimeline,
  locale,
  projects,
  skillGroups,
  skillLevelScale,
  technologiesById,
}) {
  assertString(content.profile?.name, `${locale}.profile.name`)
  assertString(content.profile?.role, `${locale}.profile.role`)
  assertString(content.resume?.summary, `${locale}.resume.summary`)
  assertString(
    content.resume?.downloadLabel,
    `${locale}.resume.downloadLabel`,
  )
  assertString(
    content.resume?.currentLabel,
    `${locale}.resume.currentLabel`,
  )
  assert(
    Array.isArray(content.resume?.languages) &&
      content.resume.languages.length > 0,
    `${locale}.resume.languages must not be empty`,
  )
  content.resume.languages.forEach((language, index) => {
    assertString(language, `${locale}.resume.languages[${index}]`)
  })
  assertString(content.contact?.title, `${locale}.contact.title`)
  assertString(content.projectsPage?.title, `${locale}.projectsPage.title`)
  assertString(
    content.projectsPage?.filtersLabel,
    `${locale}.projectsPage.filtersLabel`,
  )
  assertString(
    content.projectDetailPage?.unknownTitle,
    `${locale}.projectDetailPage.unknownTitle`,
  )
  assertString(
    content.projectDetailPage?.galleryControls?.previousAction,
    `${locale}.projectDetailPage.galleryControls.previousAction`,
  )
  assertString(
    content.projectDetailPage?.galleryControls?.nextAction,
    `${locale}.projectDetailPage.galleryControls.nextAction`,
  )
  assertString(
    content.projectDetailPage?.galleryControls?.thumbnailAction,
    `${locale}.projectDetailPage.galleryControls.thumbnailAction`,
  )
  assertString(
    content.projectDetailPage?.galleryControls?.counterLabel,
    `${locale}.projectDetailPage.galleryControls.counterLabel`,
  )
  assertString(
    content.projectLinks?.liveDemo,
    `${locale}.projectLinks.liveDemo`,
  )
  assertString(
    content.projectLinks?.sourceCode,
    `${locale}.projectLinks.sourceCode`,
  )
  assertString(
    content.projectLinks?.comingSoon,
    `${locale}.projectLinks.comingSoon`,
  )
  assertString(
    content.projectLinks?.unavailable,
    `${locale}.projectLinks.unavailable`,
  )

  for (const project of projects) {
    const localizedProject = content.projects?.[project.slug]

    assert(localizedProject, `${locale}.projects.${project.slug} is missing`)

    for (const field of requiredProjectTextFields) {
      assertString(
        localizedProject[field],
        `${locale}.projects.${project.slug}.${field}`,
      )
    }

    assert(
      Array.isArray(localizedProject.features) &&
        localizedProject.features.length > 0,
      `${locale}.projects.${project.slug}.features must not be empty`,
    )
    const galleryContent = localizedProject.galleryContent
    const expectedGalleryIds = project.gallery.map(({ id }) => id).sort()
    const localizedGalleryIds = Object.keys(galleryContent ?? {}).sort()

    assert(
      expectedGalleryIds.join('|') === localizedGalleryIds.join('|'),
      `${locale}.projects.${project.slug}.galleryContent must match gallery ids`,
    )
    project.gallery.forEach(({ id }) => {
      const localizedItem = galleryContent[id]

      assertString(
        localizedItem?.alt,
        `${locale}.projects.${project.slug}.galleryContent.${id}.alt`,
      )
      assertNullableString(
        localizedItem?.caption,
        `${locale}.projects.${project.slug}.galleryContent.${id}.caption`,
      )
    })
    assertString(
      content.projectCategories?.[project.categoryId],
      `${locale}.projectCategories.${project.categoryId}`,
    )
    assertString(
      content.projectStatus?.[project.status],
      `${locale}.projectStatus.${project.status}`,
    )

    for (const technologyId of project.technologyIds) {
      assert(
        technologiesById.has(technologyId),
        `${project.slug} references unknown technology ${technologyId}`,
      )
    }
  }

  for (const group of skillGroups) {
    assertString(
      content.skillGroups?.[group.id]?.title,
      `${locale}.skillGroups.${group.id}.title`,
    )

    for (const skill of group.skills) {
      assert(
        technologiesById.has(skill.technologyId),
        `${group.id} references unknown technology ${skill.technologyId}`,
      )
      assertString(
        content.skillLevels?.[skill.level],
        `${locale}.skillLevels.${skill.level}`,
      )
      assert(
        Number.isInteger(skillLevelScale[skill.level]) &&
          skillLevelScale[skill.level] >= 1 &&
          skillLevelScale[skill.level] <= 3,
        `${group.id}.${skill.technologyId} uses an invalid skill level`,
      )
    }
  }

  for (const item of experienceTimeline) {
    assert(
      content.experience?.[item.id],
      `${locale}.experience.${item.id} is missing`,
    )
  }

  for (const item of educationTimeline) {
    assert(
      content.education?.[item.id],
      `${locale}.education.${item.id} is missing`,
    )
  }
}

function validatePortfolioSources({
  contentByLocale,
  educationTimeline,
  experienceTimeline,
  projects,
  skillGroups,
  skillLevelScale,
  supportedLocales,
  technologies,
}) {
  const projectSlugs = projects.map(({ slug }) => slug)
  const technologiesById = new Map(
    Object.values(technologies).map((technology) => [
      technology.id,
      technology,
    ]),
  )

  assert(
    new Set(projectSlugs).size === projectSlugs.length,
    'project slugs must be unique',
  )
  projects.forEach(validateProjectContract)

  const referenceLocale = supportedLocales[0]
  const referenceContent = contentByLocale[referenceLocale]

  for (const locale of supportedLocales) {
    const content = contentByLocale[locale]

    assert(content, `content for locale ${locale} is missing`)
    assertMatchingShape(referenceContent, content, locale)
    validateLocalizedContent({
      content,
      educationTimeline,
      experienceTimeline,
      locale,
      projects,
      skillGroups,
      skillLevelScale,
      technologiesById,
    })
  }
}

export default validatePortfolioSources
