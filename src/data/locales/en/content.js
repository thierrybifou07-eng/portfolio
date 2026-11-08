const enContent = {
  home: {
    eyebrow: 'Portfolio',
    headline: 'I turn concrete needs into structured and scalable web applications.',
    introduction:
      'Junior full-stack web developer with a backend focus, I design clear interfaces and business-oriented features using React, Node.js, PHP, Laravel, and other modern technologies.',
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
    name: 'Gedeon Bifou',
    role: 'Junior full-stack web developer — backend focus',
    location: 'Douala, Cameroon — available on-site and remotely',
    availability: 'Open to junior opportunities, assignments, and collaborations',
    imageAlt: 'Portrait of Gedeon Bifou',
    summary:
      'Junior web developer with a technical background, building structured and maintainable applications designed around concrete needs.',
    biography: [
      'My background in electronics, electrical engineering, and physical sciences strengthened my ability to analyze problems, understand systems, and work methodically.',
      'I currently develop my web skills through complete projects involving modeling, user interfaces, business logic, APIs, authentication, roles, databases, and deployment.',
    ],
    goals: [
      'Deepen my backend development skills with JavaScript, Node.js, PHP, and Laravel.',
      'Contribute to useful, reliable applications that remain easy to evolve.',
      'Gain further experience by designing responsive web applications for desktop and mobile devices.',
      'Gradually strengthen my skills in architecture, testing, and deployment.',
    ],
    values: [
      'Understand the need before choosing a technical solution.',
      'Prefer readable and maintainable architecture over fragile shortcuts.',
      'Document decisions to make future project evolution easier.',
    ],
  },
  profileAbout: {
    imageAlt: 'Portrait of Gedeon Bifou in a working environment',
  },
  projectCategories: {
    operations: 'Management and business tools',
    commerce: 'E-commerce',
    mobility: 'Mobility and transport',
    estate: 'Estate'
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
      'This selection presents projects completed or structured during my learning journey: portfolio, residences management, e-commerce, transport booking etc...',
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
    renthub: {
      title: 'RentHub',
      shortSummary: 'Rental listing platform connecting tenants, owners, and agencies.',
      summary:
        'RentHub centralizes rental listings: properties, listings, search, favorites, messaging, and platform moderation for tenants, owners, agencies, and administrators.',
      problem:
        'Rental listings are scattered across social networks and word of mouth, often outdated or fraudulent, which makes searching, comparing, and trusting offers difficult for tenants and limits visibility for owners.',
      solution:
        'A structured web application brings listings into a single moderated platform with authentication, role-based access control, advanced search, and built-in messaging between tenants and owners.',
      features: [
        'Management of properties and listings with photo galleries.',
        'Authentication, user statuses, and roles with access control.',
        'Multi-criteria search, filters, and sorting of listings.',
        'Favorites and built-in messaging between tenants and owners',
        'Administration workspace for moderation, reports, and user management'
      ],
      imageAlt: 'Preview of the RentHub application',
      galleryContent: {
        landing: {
          alt: 'General view of the RentHub welcome',
          caption: null,
        },
        renthubRegister: {
          alt: 'View of register in RentHub',
          caption: null,
        },
        renthubDashboardAdmin_1: {
          alt: 'View of administrative dashboard',
          caption: null,
        },
        renthubDashboardOwner: {
          alt: 'Additional view of owner dashboard',
          caption: null,
        },
        renthubChatOwner: {
          alt: 'Additional view of chat owner messengerb',
          caption: null,
        },
        renthubLoginMobile: {
          alt: 'Additional view of login on mobile',
          caption: null,
        },
        renthubRegisterMobile: {
          alt: 'Additional view of register on mobile',
          caption: null,
        }, annoncesPage: {
          alt: 'Additional view of announcement',
          caption: null,
        },

      },
    },
    arms: {
      title: 'ARMS',
      shortSummary: 'Academic residences management application.',
      summary:
        'ARMS centralizes university residences management: users, roles, buildings, floors, rooms, contracts, payments, and administrative tracking.',
      problem:
        'Manual management of academic residences scatters information, slows occupant tracking and the monitoring of entry and exit flows, and makes payment control and responsibilities harder to manage.',
      solution:
        'A structured web application brings business data into an administrable workspace with authentication, access control, and hierarchical user organization based on roles and assigned residences.',
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
        armsRegister: {
          alt: 'Additional view of administrative management in ARMS',
          caption: null,
        },
        armsDashboardAdmin_2: {
          alt: 'Additional view of administrative dashboard in ARMS',
          caption: null,
        },
        armsDashboardStaff: {
          alt: 'Additional view of staff dashboard in ARMS',
          caption: null,
        },
        armsDashboardStudent_2: {
          alt: 'Additional view of administrative management in ARMS',
          caption: null,
        },
        armsDashboardStudent: {
          alt: 'Additional view of administrative management in ARMS',
          caption: null,
        },
        armsDashboardSuperAdmin: {
          alt: 'Additional view of administrative management in ARMS',
          caption: null,
        },

      },
    },
    'h-shop': {
      title: 'H-Market',
      shortSummary: 'E-commerce application with customer area and back office.',
      summary:
        'H-Market is an e-commerce application progressively built with React, React DOM, and Node.js: catalog, cart, checkout, authentication, roles, and an administrator area.',
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
        order: {
          alt: 'View of the H-Market order step',
          caption: null,
        },
        order_admin: {
          alt: 'View of the H-Market order administration step',
          caption: null,
        },
        dashboard: {
          alt: 'View of the H-Market dashboard for administrators',
          caption: null,
        },
        checkout1: {
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
        'User journey designed for responsive and mobile-friendly consultation.',
      ],
      imageAlt: 'Preview of the BusTix application home page',
      galleryContent: {
        'search': {
          alt: 'View of BusTix trip search',
          caption: null,
        },
        'seat-selection': {
          alt: 'View of BusTix seat selection',
          caption: null,
        },
        'ticket-validation': {
          alt: 'View of BusTix ticket validation and payment',
          caption: null,
        },
        'dashboard-administrator': {
          alt: 'View of the BusTix administrator dashboard',
          caption: null,
        },
      },
    },
  },
  skillLevels: {
    mastery: 'Mastery',
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
    'web-projects': {
      title: 'Independent junior web developer',
      organization: 'RentHub, ARMS, H-Market, and BusTix',
      location: 'Douala, Cameroon — remote',
      summary:
        'Design and development of web applications with authentication, user roles, REST APIs, and relational databases.',
      highlights: [
        'Breaking features down into maintainable modules and components.',
        'Using Git, structured commits, documentation, and lint/build validation.',
      ],
    },
    'independent-software-setup': {
      title: 'Independent IT assistant',
      organization: 'Self-employed',
      summary: 'Installed and configured software for private clients.',
    },
    'nba-high-technology': {
      title: 'Electrician technician and formwork carpenter',
      organization: 'NBA High Technology',
      summary:
        'Worked on construction sites: electrical and formwork tasks.',
    },
  },
  education: {
    'flutter-mobile-development': {
      qualification: 'Mobile development training — Flutter',
      institution: null,
      summary:
        'Learning to build cross-platform mobile applications with Flutter.',
    },
    'electronic-cap-diploma': {
      qualification: 'Vocational certificate in electronics',
      institution: 'Technical High School of Mbanga, Littoral Region',
      summary:
        'Four-year technical training in electronics, completed with a vocational aptitude certificate in electronics (F2).',
    },
    'electric-bachelor-diploma': {
      qualification: 'Technical baccalaureate in electrical engineering',
      institution: 'Technical High School of Mbanga, Littoral Region',
      summary:
        'Electrical engineering training covering electrical installations, machines, and maintenance, completed with an F3 technical baccalaureate.',
    },
    'physics-university-diploma': {
      qualification: 'University studies in physical sciences — second-year undergraduate level',
      institution: 'Faculty of Science, University of Douala',
      summary:
        'Two years of university-level physical sciences studies, strengthening foundations in mathematics, mechanics, electricity, and electronics.',
    },
    'php-web-development-diploma': {
      qualification: 'Full-stack web development training — PHP/Laravel specialization',
      institution: 'Localhost Academy',
      summary:
        'Frontend and backend development training with PHP, Laravel, databases, and project delivery.',
    },
    'javascript-web-development-diploma': {
      qualification: 'Full-stack web development training — JavaScript, React, and Node.js',
      institution: 'Localhost Academy',
      summary:
        'Frontend and backend development training with JavaScript, React, Node.js, and project delivery.',
    },
  },
  resume: {
    eyebrow: 'Resume',
    title: 'Resume',
    headline: 'Junior full-stack web developer — backend focus',
    summary:
      'Junior web developer with a backend focus (Node.js/Express, PHP/Laravel) and a technical background in electronics and electrical engineering. I have designed web applications with authentication, user roles, REST APIs, and relational databases. Available for freelance assignments, remote or on site in Douala.',
    location: 'Douala, Cameroon',
    sections: {
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      skills: 'Skills',
      languages: 'Languages',
    },
    contactLabels: {
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      email: 'Email',
      portfolio: 'Portfolio',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    skillGroups: [
      {
        id: 'backend',
        title: 'Backend and data',
        items: [
          'Node.js',
          'Express',
          'PHP',
          'Laravel',
          'REST APIs',
          'Authentication and roles',
          'MySQL',
        ],
      },
      {
        id: 'frontend',
        title: 'Frontend',
        items: ['HTML / CSS', 'JavaScript', 'React', 'Bootstrap', 'Responsive design'],
      },
      {
        id: 'tools',
        title: 'Tools',
        items: ['Git / GitHub', 'Postman', 'Railway', 'UML'],
      },
    ],
    projects: [
      {
        slug: 'renthub',
        description:
          'Rental listings platform: multi-criteria search, favorites, built-in messaging, role-based authentication, and an admin area.',
        stack: ['React', 'Node.js', 'Express', 'MySQL', 'REST API'],
      },
      {
        slug: 'arms',
        description:
          'Academic residence management: buildings, floors, and rooms, with authentication and role-based access control.',
        stack: ['PHP', 'Laravel', 'MySQL'],
      },
      {
        slug: 'h-shop',
        description:
          'E-commerce application: filterable catalog, cart and checkout, Express API, customer and admin roles, separate back office.',
        stack: ['React', 'Node.js', 'Express', 'REST API'],
      },
      {
        slug: 'bustix',
        description:
          'Design of an intercity ticket booking application: modeling of customers, buses, trips, and bookings. Not deployed.',
        stack: ['UML', 'Database modeling'],
      },
    ],
    languages: ['French: fluent', 'English: intermediate'],
    downloadLabel: 'Download resume',
    downloadPreparing: 'Preparing PDF...',
    downloadError: 'The PDF could not be generated',
    currentLabel: 'Present',
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
