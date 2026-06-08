const enTranslation = {
  site: {
    name: '{{siteName}}',
  },
  navigation: {
    primaryLabel: 'Primary navigation',
    secondaryLabel: 'Secondary navigation',
    menu: 'Menu',
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    resume: 'Resume',
    contact: 'Contact',
  },
  preferences: {
    groupLabel: 'Display preferences',
    themeLabel: 'Theme',
    themeSystem: 'System',
    themeLight: 'Light',
    themeDark: 'Dark',
    languageLabel: 'Language',
    languageFrench: 'French',
    languageEnglish: 'English',
  },
  accessibility: {
    skipToContent: 'Skip to content',
    backToTop: 'Back to top',
  },
  footer: {
    tagline: 'Fictitious personal portfolio, ready to be customized.',
    copyright: '© {{year}} {{siteName}}. All rights reserved.',
  },
  pages: {
    home: {
      documentTitle: 'Home | {{siteName}}',
      eyebrow: '{{siteName}}',
      title: 'Home',
      description: 'Frontend web development portfolio.',
    },
    about: {
      documentTitle: 'About | {{siteName}}',
      eyebrow: 'Introduction',
      title: 'About',
      description: 'Introduction, journey, and work principles.',
    },
    projects: {
      documentTitle: 'Projects | {{siteName}}',
      eyebrow: 'Selected work',
      title: 'Projects',
      description: 'Filterable selection of fictitious web projects.',
    },
    projectDetail: {
      documentTitle: '{{project}} | Projects | {{siteName}}',
      fallbackTitle: 'Project',
      eyebrow: 'Case study',
      description: 'Detailed case study for the selected project.',
    },
    skills: {
      documentTitle: 'Skills | {{siteName}}',
      eyebrow: 'Expertise',
      title: 'Skills',
      description: 'Technical skills grouped by area of practice.',
    },
    resume: {
      documentTitle: 'Resume | {{siteName}}',
      eyebrow: 'Professional journey',
      title: 'Resume',
      description: 'Bilingual resume preview and PDF download.',
    },
    contact: {
      documentTitle: 'Contact | {{siteName}}',
      eyebrow: "Let's connect",
      title: 'Contact',
      description: 'Contact details and local message preparation.',
    },
    notFound: {
      documentTitle: 'Page not found | {{siteName}}',
      eyebrow: 'Error 404',
      title: 'Page not found',
      description: 'The requested address does not exist or has been moved.',
      action: 'Back to home',
    },
  },
}

export default enTranslation
