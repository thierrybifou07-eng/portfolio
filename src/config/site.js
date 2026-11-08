const supportedLocales = Object.freeze(['fr', 'en'])

const contactEmail = 'bifougedeon@gmail.com'

const siteUrl = 'https://portfolio.bifougedeon.workers.dev/'

const contactLinks = Object.freeze([
  Object.freeze({
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/thierrybifou07-eng',
    displayValue: 'github.com/thierrybifou07-eng',
    icon: 'github',
    external: true,
  }),
  Object.freeze({
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gedeon-bifou',
    displayValue: 'linkedin.com/in/gedeon-bifou',
    icon: 'linkedin',
    external: true,
  }),
  Object.freeze({
    id: 'whatsapp',
    label: 'WhatsApp',
    url: 'https://wa.me/237679801670',
    displayValue: '+237 679 801 670',
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
  defaultLocale: 'en',
  supportedLocales,
  contactEmail,
  contactLinks,
  siteUrl,
  resumeFileNames: Object.freeze({
    fr: 'Gedeon-Bifou-CV-fr.pdf',
    en: 'Gedeon-Bifou-Resume-en.pdf',
  }),
})

export default siteConfig
