const supportedLocales = Object.freeze(['fr', 'en'])

const socialLinks = Object.freeze({
  github: 'https://github.com/replace-me',
  linkedin: 'https://www.linkedin.com/in/replace-me',
})

const siteConfig = Object.freeze({
  name: 'Portfolio',
  shortName: 'P.',
  defaultTitle: 'Portfolio',
  defaultLocale: 'fr',
  supportedLocales,
  contactEmail: 'hello@example.com',
  socialLinks,
  resumeFileName: 'portfolio-resume.pdf',
})

export default siteConfig
