const requiredProjectTextFields = Object.freeze([
  'title',
  'shortSummary',
  'summary',
  'problem',
  'solution',
  'imageAlt',
])

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
    assert(
      Array.isArray(project.galleryImages) &&
        project.galleryImages.length > 0,
      `${project.slug}.galleryImages must not be empty`,
    )
    assert(
      Array.isArray(localizedProject.galleryAlts) &&
        localizedProject.galleryAlts.length === project.galleryImages.length,
      `${locale}.projects.${project.slug}.galleryAlts must match galleryImages`,
    )
    localizedProject.galleryAlts.forEach((alt, index) => {
      assertString(alt, `${locale}.projects.${project.slug}.galleryAlts[${index}]`)
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
