const supportedLocales = Object.freeze(['fr', 'en'])

const contactEmail = 'hello@example.com'

const contactLinks = Object.freeze([
  Object.freeze({
    id: 'github',
    label: 'GitHub',
    url: null,
    icon: 'github',
    external: true,
  }),
  Object.freeze({
    id: 'linkedin',
    label: 'LinkedIn',
    url: null,
    icon: 'linkedin',
    external: true,
  }),
  Object.freeze({
    id: 'whatsapp',
    label: 'WhatsApp',
    url: null,
    icon: 'whatsapp',
    external: true,
  }),
  Object.freeze({
    id: 'email',
    label: 'Email',
    url: `mailto:${contactEmail}`,
    icon: 'email',
    external: false,
  }),
])

const siteConfig = Object.freeze({
  name: 'Portfolio',
  shortName: 'P.',
  defaultTitle: 'Portfolio',
  defaultLocale: 'fr',
  supportedLocales,
  contactEmail,
  contactLinks,
  resumeFileName: 'portfolio-resume.pdf',
})

export default siteConfig
