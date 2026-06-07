const supportedLocales = Object.freeze(['fr', 'en'])

const socialLinks = Object.freeze({
  github: null,
  linkedin: null,
})

const siteConfig = Object.freeze({
  name: 'Portfolio',
  shortName: 'P.',
  defaultTitle: 'Portfolio',
  defaultLocale: 'fr',
  supportedLocales,
  contactEmail: null,
  socialLinks,
  resumeFileName: 'portfolio-resume.pdf',
})

export default siteConfig
