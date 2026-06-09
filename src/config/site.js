const supportedLocales = Object.freeze(['fr', 'en'])

const contactEmail = 'bifougedeon@gmail.com'

const contactLinks = Object.freeze([
  Object.freeze({
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/thierrybifou07-eng',
    icon: 'github',
    external: true,
  }),
  Object.freeze({
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gedeon-bifou-881b67397?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: 'linkedin',
    external: true,
  }),
  Object.freeze({
    id: 'whatsapp',
    label: 'WhatsApp',
    url: 'https://wa.me/237697147114',
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
  name: 'Gedeon Bifou',
  shortName: 'GB.',
  defaultTitle: 'Gedeon Bifou',
  defaultLocale: 'fr',
  supportedLocales,
  contactEmail,
  contactLinks,
  resumeFileName: 'portfolio-resume.pdf',
})

export default siteConfig
