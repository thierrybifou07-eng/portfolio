const enContent = {
  home: {
    eyebrow: 'Fictitious portfolio',
    headline: 'I design clear and useful web interfaces.',
    introduction:
      'As a junior frontend developer, I explore React and modern web tools through structured, accessible, and user-focused projects.',
    primaryAction: 'Explore my projects',
    secondaryAction: 'Learn more',
    featuredSkillsTitle: 'Core skills',
    skillsAction: 'View all skills',
    featuredProjectsTitle: 'Selected projects',
    projectAction: 'Explore project',
    contactTitle: 'Let us build something simple and solid.',
    contactAction: 'Contact me',
  },
  about: {
    eyebrow: 'About',
    title: 'Learning, building, and improving with intention.',
    introductionTitle: 'A thoughtful approach to web development',
    experienceTitle: 'Journey',
    educationTitle: 'Education',
    goalsTitle: 'Goals',
    valuesTitle: 'Work principles',
    currentLabel: 'Present',
    contactTitle: 'Have a project or opportunity in mind?',
    contactAction: 'Let us talk',
  },
  profile: {
    name: 'Alex Martin',
    role: 'Junior frontend web developer',
    location: 'Available remotely',
    availability: 'Open to junior opportunities and collaborations',
    imageAlt: 'Fictitious portrait of Alex Martin',
    summary:
      'A fictitious profile interested in building accessible, maintainable, and pleasant web experiences.',
    biography: [
      'I learn by turning concrete needs into coherent interfaces, then improving each detail through feedback and testing.',
      'My approach favors readable architecture, reusable components, and straightforward communication around technical decisions.',
    ],
    goals: [
      'Deepen my knowledge of React and modern frontend architecture.',
      'Contribute to useful products with a supportive team.',
      'Gradually develop my server-side skills.',
    ],
    values: [
      'Understand the problem before choosing the solution.',
      'Build for people, including keyboard users.',
      'Document the decisions that will help the project evolve.',
    ],
  },
  projectCategories: {
    operations: 'Business tools',
    commerce: 'Commerce',
    mobility: 'Mobility',
  },
  projectStatus: {
    concept: 'Fictitious concept',
  },
  projectsPage: {
    eyebrow: 'Projects',
    title: 'Concepts shaped around concrete needs.',
    introduction:
      'This fictitious selection explores business tools, commerce, and mobility through structured and accessible interfaces.',
    filtersLabel: 'Filter projects by category',
    allFilter: 'All',
    resultSingular: 'project displayed',
    resultPlural: 'projects displayed',
    detailAction: 'View case study',
    demoAction: 'View demo',
    repositoryAction: 'View repository',
    noResults: 'No project matches this filter.',
  },
  projectDetailPage: {
    backAction: 'Back to projects',
    problemTitle: 'Problem',
    solutionTitle: 'Proposed solution',
    featuresTitle: 'Core features',
    technologiesTitle: 'Technologies used',
    galleryTitle: 'Concept previews',
    navigationLabel: 'Project navigation',
    previousLabel: 'Previous project',
    nextLabel: 'Next project',
    demoAction: 'View demo',
    repositoryAction: 'View repository',
    unknownEyebrow: 'Project not found',
    unknownTitle: 'This case study does not exist.',
    unknownDescription:
      'The requested slug does not match any project available in this portfolio.',
    unknownAction: 'View all projects',
  },
  projects: {
    arms: {
      title: 'ARMS',
      shortSummary: 'Fictitious dashboard for tracking assets and requests.',
      summary:
        'An application concept that helps a small team track equipment, internal requests, and priority actions from one workspace.',
      problem:
        'Information is scattered across several files, slowing down follow-up and making ownership difficult to see.',
      solution:
        'A centralized interface organizes assets, requests, and alerts through views designed for everyday tasks.',
      features: [
        'Overview of assets and their current condition.',
        'Request tracking with priorities and owners.',
        'Search, filters, and a change history.',
      ],
      imageAlt: 'Fictitious preview of the ARMS dashboard',
      galleryAlts: [
        'Fictitious overview of the ARMS dashboard',
        'Fictitious detail of request tracking in ARMS',
      ],
    },
    'h-market': {
      title: 'H-Market',
      shortSummary: 'Fictitious marketplace for neighborhood businesses.',
      summary:
        'A responsive marketplace concept combining catalog, cart, and order tracking in a simple journey for customers and sellers.',
      problem:
        'Small businesses rarely have a consistent online sales journey that is also easy to manage.',
      solution:
        'A shared storefront simplifies product discovery and prepares structured order and inventory management.',
      features: [
        'Filterable catalog with product variants.',
        'Persistent cart and clear order summary.',
        'Order and availability tracking workspace.',
      ],
      imageAlt: 'Fictitious preview of the H-Market marketplace',
      galleryAlts: [
        'Fictitious view of the H-Market catalog',
        'Fictitious detail of the H-Market checkout journey',
      ],
    },
    bustix: {
      title: 'BusTix',
      shortSummary: 'Fictitious intercity bus booking service.',
      summary:
        'A service concept for finding a trip, comparing schedules, and booking a seat through a mobile-friendly interface.',
      problem:
        'Trip booking can lack clarity about schedules, available seats, and the steps still required.',
      solution:
        'A guided journey presents search results, trip details, and confirmation in a predictable order.',
      features: [
        'Search by departure, destination, and date.',
        'Schedule and seat availability comparison.',
        'Seat selection and confirmation summary.',
      ],
      imageAlt: 'Fictitious preview of the BusTix booking service',
      galleryAlts: [
        'Fictitious view of the BusTix trip search',
        'Fictitious detail of BusTix seat selection',
      ],
    },
  },
  skillLevels: {
    comfortable: 'Comfortable',
    familiar: 'Regular practice',
    exploring: 'Currently learning',
  },
  skillsPage: {
    eyebrow: 'Skills',
    title: 'Solid foundations, strengthened through practice.',
    introduction:
      'These levels are indicative and evolving. They describe my current comfort, not permanent mastery of every technology.',
    legendTitle: 'How to read the levels',
    groupsTitle: 'Areas of practice',
    practiceTitle: 'Progress grounded in projects',
    practiceDescription:
      'Each skill is practiced in a concrete context, documented, and reassessed as projects evolve.',
    projectsAction: 'View projects',
  },
  skillGroups: {
    frontend: {
      title: 'Frontend',
      description:
        'Building responsive and accessible interfaces organized into components.',
    },
    backend: {
      title: 'Backend and data',
      description:
        'Useful foundations for understanding APIs, persistence, and client-server communication.',
    },
    tools: {
      title: 'Tools and workflow',
      description:
        'Development environment, version control, and visual preparation.',
    },
  },
  experience: {
    'independent-projects': {
      title: 'Independent web projects',
      organization: 'Fictitious learning environment',
      location: 'Remote',
      summary:
        'Designing React prototypes to practice routing, forms, data management, and accessibility.',
      highlights: [
        'Breaking interfaces into reusable components.',
        'Documenting decisions and validating with lint and builds.',
        'Progressively improving responsive and keyboard behavior.',
      ],
    },
    'frontend-internship': {
      title: 'Frontend intern',
      organization: 'Fictitious digital studio',
      location: 'Hybrid',
      summary:
        'Fictitious participation in web page maintenance and simple component creation under supervision.',
      highlights: [
        'Implementing responsive mockups.',
        'Fixing targeted visual and functional defects.',
        'Collaborating through tickets and code reviews.',
      ],
    },
  },
  education: {
    'web-development-diploma': {
      qualification: 'Fictitious diploma in web development',
      institution: 'Fictitious digital institute',
      summary:
        'Web fundamentals, JavaScript, responsive interfaces, databases, and project delivery.',
    },
    'continuous-learning': {
      qualification: 'Continuous learning',
      institution: 'Documentation and personal projects',
      summary:
        'Further study of React, accessibility, and modern frontend development practices.',
    },
  },
  resume: {
    eyebrow: 'Fictitious resume',
    title: 'Resume',
    headline: 'Junior frontend web developer',
    summary:
      'Fictitious profile focused on React, accessibility, and maintainable interfaces, with growing backend experience.',
    sections: {
      contact: 'Contact details',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      languages: 'Languages',
    },
    languages: ['French: fluent', 'English: intermediate'],
    downloadLabel: 'Download resume',
    downloadPreparing: 'Preparing PDF...',
    downloadError: 'The PDF could not be generated',
    currentLabel: 'Present',
    fictitiousNotice:
      'This resume uses fictitious information that must be replaced before publishing.',
  },
  contact: {
    eyebrow: 'Fictitious contact',
    title: 'Let us discuss your next project.',
    introduction:
      'This form will prepare an email or copy your message. It will never simulate a server submission.',
    emailLabel: 'Email',
    socialLabel: 'Social links',
    form: {
      nameLabel: 'Name',
      emailLabel: 'Your email',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      prepareEmail: 'Prepare email',
      copyMessage: 'Copy message',
      copiedMessage: 'Message copied',
    },
  },
}

export default enContent
