import siteConfig from '../../config/site.js'
import portrait from '../../assets/images/profile/gedeon_cv-360.jpg'
import { formatResumeDateRange } from './formatResumeDate.js'

const contactLinkIds = Object.freeze(['github', 'linkedin'])

function formatPhone(value) {
  const match = /^\+237(\d{3})(\d{3})(\d{3})$/.exec(value ?? '')

  return match ? `+237 ${match[1]} ${match[2]} ${match[3]}` : value
}

function buildContacts({ contact, resume }) {
  const labels = resume.contactLabels
  const linksById = new Map(
    contact.links.map((link) => [link.id, link]),
  )
  const whatsapp = linksById.get('whatsapp')
  const socialLinks = contactLinkIds
    .map((id) => linksById.get(id))
    .filter((link) => link?.url)
  const portfolioValue = siteConfig.siteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')

  return [
    contact.phone && {
      id: 'phone',
      label: labels.phone,
      value: formatPhone(contact.phone),
      href: `tel:${contact.phone}`,
    },
    whatsapp?.url && {
      id: 'whatsapp',
      label: labels.whatsapp,
      value: whatsapp.displayValue,
      href: whatsapp.url,
    },
    {
      id: 'email',
      label: labels.email,
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      id: 'portfolio',
      label: labels.portfolio,
      value: portfolioValue,
      href: siteConfig.siteUrl,
    },
    ...socialLinks.map((link) => ({
      id: link.id,
      label: labels[link.id],
      value: link.displayValue,
      href: link.url,
    })),
  ].filter(Boolean)
}

function buildTimelineItem(item, { locale, resume }) {
  return {
    id: item.id,
    title: item.title ?? item.qualification,
    organization: [item.organization ?? item.institution, item.location]
      .filter(Boolean)
      .join(' · '),
    dates: formatResumeDateRange(item, locale, resume.currentLabel).replaceAll(' ', '\u00A0'),
    start: item.start,
    end: item.end,
    summary: item.summary,
  }
}

function buildResumeModel(data) {
  const { education, experience, locale, profile, projects, resume } = data
  const projectsBySlug = new Map(projects.map((project) => [project.slug, project]))

  return {
    locale,
    documentTitle: `${profile.name} - ${resume.title}`,
    name: profile.name,
    headline: resume.headline,
    location: resume.location,
    summary: resume.summary,
    photo: { src: portrait, alt: profile.imageAlt },
    contacts: buildContacts(data),
    sections: resume.sections,
    skillGroups: resume.skillGroups,
    projects: resume.projects.map((entry) => ({
      id: entry.slug,
      title: projectsBySlug.get(entry.slug).title,
      description: entry.description,
      stack: entry.stack.join(' · '),
    })),
    experience: experience.map((item) => buildTimelineItem(item, data)),
    education: education.map((item) => buildTimelineItem(item, data)),
    languages: resume.languages,
    labels: {
      download: resume.downloadLabel,
      downloadPreparing: resume.downloadPreparing,
      downloadError: resume.downloadError,
    },
    fileName: siteConfig.resumeFileNames[locale],
  }
}

export default buildResumeModel
