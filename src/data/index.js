import siteConfig from '../config/site.js'
import validatePortfolioSources from './contracts.js'
import enContent from './locales/en/content.js'
import frContent from './locales/fr/content.js'
import profile from './shared/profile.js'
import projects from './shared/projects.js'
import skillGroups, { skillLevelScale } from './shared/skills.js'
import technologies from './shared/technologies.js'
import {
  educationTimeline,
  experienceTimeline,
} from './shared/timeline.js'

const contentByLocale = Object.freeze({
  fr: frContent,
  en: enContent,
})

const technologiesById = new Map(
  Object.values(technologies).map((technology) => [
    technology.id,
    technology,
  ]),
)

export function normalizeContentLocale(locale) {
  const normalizedLocale = locale?.toLowerCase().split(/[-_]/)[0]

  return siteConfig.supportedLocales.includes(normalizedLocale)
    ? normalizedLocale
    : siteConfig.defaultLocale
}

function mergeTimeline(timeline, localizedItems) {
  return timeline.map((item) => ({
    ...item,
    ...localizedItems[item.id],
  }))
}

function buildProjects(content) {
  return projects.map((project) => {
    const localizedProject = content.projects[project.slug]

    return {
      ...project,
      ...localizedProject,
      category: {
        id: project.categoryId,
        label: content.projectCategories[project.categoryId],
      },
      statusLabel: content.projectStatus[project.status],
      technologies: project.technologyIds.map((technologyId) =>
        technologiesById.get(technologyId),
      ),
      gallery: project.gallery.map((galleryItem) => ({
        ...galleryItem,
        ...localizedProject.galleryContent[galleryItem.id],
      })),
    }
  })
}

function buildProjectFilters(content) {
  return [...new Set(projects.map(({ categoryId }) => categoryId))].map(
    (categoryId) => ({
      id: categoryId,
      label: content.projectCategories[categoryId],
    }),
  )
}

function buildSkillGroups(content) {
  return skillGroups.map((group) => ({
    id: group.id,
    ...content.skillGroups[group.id],
    skills: group.skills.map((skill) => ({
      ...technologiesById.get(skill.technologyId),
      level: skill.level,
      levelLabel: content.skillLevels[skill.level],
      levelRank: skillLevelScale[skill.level],
    })),
  }))
}

function buildSkillLevelLegend(content) {
  return Object.entries(skillLevelScale)
    .map(([id, rank]) => ({
      id,
      rank,
      label: content.skillLevels[id],
    }))
    .sort((first, second) => first.rank - second.rank)
}

export function getPortfolioData(locale) {
  const resolvedLocale = normalizeContentLocale(locale)
  const content = contentByLocale[resolvedLocale]

  return {
    locale: resolvedLocale,
    isPlaceholder: true,
    home: content.home,
    about: content.about,
    skillsPage: content.skillsPage,
    projectsPage: content.projectsPage,
    projectDetailPage: content.projectDetailPage,
    projectLinks: content.projectLinks,
    profile: {
      ...profile,
      ...content.profile,
    },
    projects: buildProjects(content),
    projectFilters: buildProjectFilters(content),
    skills: buildSkillGroups(content),
    skillLevelLegend: buildSkillLevelLegend(content),
    experience: mergeTimeline(experienceTimeline, content.experience),
    education: mergeTimeline(educationTimeline, content.education),
    resume: content.resume,
    contact: {
      ...content.contact,
      email: siteConfig.contactEmail,
      links: siteConfig.contactLinks,
    },
  }
}

validatePortfolioSources({
  contentByLocale,
  educationTimeline,
  experienceTimeline,
  projects,
  skillGroups,
  skillLevelScale,
  supportedLocales: siteConfig.supportedLocales,
  technologies,
})

export {
  contentByLocale,
  projects,
  skillGroups,
  skillLevelScale,
  technologies,
}
