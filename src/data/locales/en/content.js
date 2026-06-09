const enContent = {
  home: {
    eyebrow: 'Professional portfolio',
    headline: 'I turn concrete needs into structured and scalable web applications.',
    introduction:
      'Junior full-stack web developer with a backend focus, I build clear interfaces and business-oriented features using React, Node.js, PHP, and Laravel.',
    primaryAction: 'Explore my projects',
    secondaryAction: 'Learn more',
    featuredSkillsTitle: 'Core skills',
    skillsAction: 'View all skills',
    featuredProjectsTitle: 'Selected projects',
    projectAction: 'Explore project',
    contactTitle: 'Do you have a project, assignment, or opportunity?',
    contactAction: 'Contact me',
  },
  about: {
    eyebrow: 'About',
    title: 'Learning rigorously, building methodically, and improving through practice.',
    introductionTitle: 'A technical profile in constant development',
    experienceTitle: 'Practical journey',
    educationTitle: 'Education',
    goalsTitle: 'Professional goals',
    valuesTitle: 'Work principles',
    currentLabel: 'Present',
    contactTitle: 'Would you like to discuss a need or an opportunity?',
    contactAction: 'Let us talk',
  },
  profile: {
    name: 'Thierry Bifou',
    role: 'Junior full-stack web developer — backend focus',
    location: 'Douala, Cameroon — available remotely',
    availability: 'Open to junior opportunities, assignments, and collaborations',
    imageAlt: 'Professional portrait of Thierry Bifou',
    summary:
      'Junior web developer with a technical background, building structured, maintainable applications designed around concrete needs.',
    biography: [
      'My background in electronics, electrical engineering, and physical sciences strengthened my ability to analyze problems, understand systems, and work methodically.',
      'I currently develop my web skills through complete projects involving modeling, user interfaces, business logic, APIs, authentication, roles, databases, and deployment.',
    ],
    goals: [
      'Deepen my backend development skills with PHP, Laravel, and Node.js.',
      'Contribute to useful, reliable applications that remain easy to evolve.',
      'Gradually strengthen my skills in architecture, testing, and deployment.',
    ],
    values: [
      'Understand the need before choosing a technical solution.',
      'Prefer readable and maintainable architecture over fragile shortcuts.',
      'Document decisions to make future project evolution easier.',
    ],
  },
  profileAbout: {
    imageAlt: 'Professional portrait of Thierry Bifou',
  },
  projectCategories: {
    operations: 'Management and business tools',
    commerce: 'E-commerce',
    mobility: 'Mobility and transport',
  },
  projectStatus: {
    concept: 'Portfolio project',
  },
  projectLinks: {
    liveDemo: 'Live demo',
    sourceCode: 'Source code',
    comingSoon: 'Coming soon',
    unavailable: 'Unavailable',
  },
  projectsPage: {
    eyebrow: 'Projects',
    title: 'Applications designed around concrete needs.',
    introduction:
      'This selection presents projects completed or structured during my learning journey: academic residences management, e-commerce, and transport booking.',
    filtersLabel: 'Filter projects by category',
    allFilter: 'All',
    resultSingular: 'project displayed',
    resultPlural: 'projects displayed',
    detailAction: 'View details',
    noResults: 'No project matches this filter.',
  },
  projectDetailPage: {
    backAction: 'Back to projects',
    problemTitle: 'Problem',
    solutionTitle: 'Proposed solution',
    featuresTitle: 'Core features',
    technologiesTitle: 'Technologies used',
    galleryTitle: 'Project previews',
    galleryControls: {
      previousAction: 'Show previous image',
      nextAction: 'Show next image',
      thumbnailAction: 'Show image',
      counterLabel: 'Image',
    },
    navigationLabel: 'Project navigation',
    previousLabel: 'Previous project',
    nextLabel: 'Next project',
    unknownEyebrow: 'Project not found',
    unknownTitle: 'This project does not exist.',
    unknownDescription:
      'The requested link does not match any project available in this portfolio.',
    unknownAction: 'View all projects',
  },
  projects: {
    arms: {
      title: 'ARMS',
      shortSummary: 'Academic residences management application.',
      summary:
        'ARMS centralizes the management of university residences: users, roles, buildings, floors, rooms, contracts, payments, and administrative tracking.',
      problem:
        'Manual residence management scatters information, slows occupant tracking, and makes payment monitoring and responsibilities harder to control.',
      solution:
        'A structured web application brings business data into an administrable workspace with authentication, access control, and hierarchical residence organization.',
      features: [
        'Management of residences, buildings, floors, and rooms.',
        'Authentication, user statuses, and roles with access control.',
        'Preparation for contracts, payments, and administrative history tracking.',
      ],
      imageAlt: 'Preview of the ARMS application',
      galleryContent: {
        overview: {
          alt: 'General view of the ARMS interface',
          caption: null,
        },
        requests: {
          alt: 'Additional view of administrative management in ARMS',
          caption: null,
        },
      },
    },
    'h-market': {
      title: 'H-Market',
      shortSummary: 'E-commerce application with customer area and back office.',
      summary:
        'H-Market is an e-commerce application progressively built with React and Node.js: catalog, cart, checkout, authentication, roles, and an administrator area.',
      problem:
        'A consistent e-commerce experience must clearly separate the customer journey, product data, and management tools reserved for administrators.',
      solution:
        'The application relies on a responsive storefront, an Express API, and a distinct back office to provide a readable and scalable architecture.',
      features: [
        'Filterable catalog, product details, local cart, and checkout.',
        'Express API for products, categories, orders, and sessions.',
        'Authentication with customer and admin roles, protected routes, and a separate back office.',
      ],
      imageAlt: 'Preview of the H-Market e-commerce application',
      galleryContent: {
        catalog: {
          alt: 'View of the H-Market product catalog',
          caption: null,
        },
        checkout: {
          alt: 'View of the H-Market checkout journey',
          caption: null,
        },
      },
    },
    bustix: {
      title: 'BusTix',
      shortSummary: 'Design of an intercity bus ticket booking application.',
      summary:
        'BusTix is a design project for intercity transport agencies in Cameroon: trips, buses, drivers, customers, bookings, payments, and statistics.',
      problem:
        'Manual booking management can make schedules, available seats, and centralized operations difficult to monitor.',
      solution:
        'The design proposes a centralized system capable of structuring trips, bookings, and the operational data needed for follow-up.',
      features: [
        'Modeling of customers, buses, drivers, trips, and bookings.',
        'Preparation for payment tracking and statistics.',
        'User journey designed for mobile-friendly consultation.',
      ],
      imageAlt: 'Concept preview of the BusTix application',
      galleryContent: {
        search: {
          alt: 'Concept view of BusTix trip search',
          caption: null,
        },
        'seat-selection': {
          alt: 'Concept view of BusTix seat selection',
          caption: null,
        },
      },
    },
  },
  skillLevels: {
    comfortable: 'Solid practice',
    familiar: 'Regular practice',
    exploring: 'Currently learning',
  },
  skillsPage: {
    eyebrow: 'Skills',
    title: 'Skills developed through concrete projects.',
    introduction:
      'These levels reflect my current degree of practice. They remain evolving and do not claim permanent mastery of every tool.',
    legendTitle: 'How to read the levels',
    groupsTitle: 'Skill areas',
    practiceTitle: 'Progress built through practice',
    practiceDescription:
      'Each skill is used in a real or educational context, documented, and strengthened as projects evolve.',
    projectsAction: 'View projects',
  },
  skillGroups: {
    frontend: {
      title: 'Frontend',
      description:
        'Designing responsive interfaces structured into components and progressively improved for accessibility.',
    },
    backend: {
      title: 'Backend and data',
      description:
        'Developing business logic, APIs, authentication, roles, and database integration.',
    },
    tools: {
      title: 'Tools, modeling, and workflow',
      description:
        'Version control, development environments, modeling, and progressive deployment.',
    },
  },
  experience: {
    'independent-projects': {
      title: 'Personal web development projects',
      organization: 'ARMS, H-Market, BusTix, and portfolio',
      location: 'Douala, Cameroon — remote',
      summary:
        'Progressive design and development of web applications to strengthen my frontend, backend, and organizational skills.',
      highlights: [
        'Breaking features down into maintainable modules and components.',
        'Using Git, atomic commits, documentation, and lint/build validation.',
        'Working with APIs, user roles, modeling, and responsive interfaces.',
      ],
    },
    'frontend-internship': {
      title: 'Practical web development learning',
      organization: 'Training and guided projects',
      location: 'Douala, Cameroon',
      summary:
        'Applying web development fundamentals through exercises, integrations, and progressive projects.',
      highlights: [
        'Creating responsive interfaces from functional needs.',
        'Fixing targeted errors and progressively improving code quality.',
        'Using development tools, version control, and documentation.',
      ],
    },
  },
  education: {
    'web-development-diploma': {
      qualification: 'Full-stack web development training',
      institution: 'Localhost Academy — update if necessary',
      summary:
        'Frontend and backend development learning: JavaScript, React, Node.js, PHP, Laravel, databases, and project delivery.',
    },
    'continuous-learning': {
      qualification: 'Continuous learning and personal projects',
      institution: 'Documentation, practice, and technical monitoring',
      summary:
        'Progressive study of web architecture, APIs, accessibility, deployment, and software development best practices.',
    },
  },
  resume: {
    eyebrow: 'Resume',
    title: 'Professional resume',
    headline: 'Junior full-stack web developer — backend focus',
    summary:
      'Junior web developer with a solid technical background, progressive experience with React, Node.js, PHP, and Laravel, and a focus on application maintainability.',
    sections: {
      contact: 'Contact details',
      experience: 'Practical experience',
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
      'Verify dates, contact details, and personal information before publishing.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let us discuss your need or opportunity.',
    introduction:
      'Use the contact details below or prepare a message with this form. No server submission is simulated.',
    detailsTitle: 'Contact details',
    emailLabel: 'Email',
    phoneLabel: 'Mobile phone',
    phone: '+237697147114',
    locationLabel: 'Location',
    availabilityLabel: 'Availability',
    socialLabel: 'Contact links',
    directEmailAction: 'Write directly',
    externalLinkLabel: 'opens in a new tab',
    form: {
      title: 'Prepare a message',
      requiredHint: 'All fields are required.',
      nameLabel: 'Name',
      emailLabel: 'Your email',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@example.com',
      subjectPlaceholder: 'Your message subject',
      messagePlaceholder: 'Describe your project, need, or opportunity.',
      prepareEmail: 'Prepare email',
      copyMessage: 'Copy message',
      copiedMessage: 'Message copied',
      copyError: 'Copy failed. Select the message manually.',
      copyStatusLabel: 'Copy status',
    },
  },
}

export default enContent
