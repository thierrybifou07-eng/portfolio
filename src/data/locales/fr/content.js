const frContent = {
  home: {
    eyebrow: 'Portfolio professionnel',
    headline: 'Je transforme des besoins concrets en applications web structurées et évolutives.',
    introduction:
      "Développeur web full-stack junior avec une orientation backend, je conçois des interfaces claires et des fonctionnalités métier en m'appuyant sur React, Node.js, PHP et Laravel.",
    primaryAction: 'Découvrir mes projets',
    secondaryAction: 'En savoir plus',
    featuredSkillsTitle: 'Compétences principales',
    skillsAction: 'Voir toutes les compétences',
    featuredProjectsTitle: 'Projets sélectionnés',
    projectAction: 'Découvrir le projet',
    contactTitle: 'Vous avez un projet, une mission ou une opportunité ?',
    contactAction: 'Me contacter',
  },
  about: {
    eyebrow: 'À propos',
    title: 'Apprendre avec rigueur, construire avec méthode et progresser par la pratique.',
    introductionTitle: 'Un profil technique en évolution constante',
    experienceTitle: 'Parcours pratique',
    educationTitle: 'Formation',
    goalsTitle: 'Objectifs professionnels',
    valuesTitle: 'Principes de travail',
    currentLabel: "Aujourd'hui",
    contactTitle: 'Vous souhaitez échanger autour d’un besoin ou d’une opportunité ?',
    contactAction: 'Échangeons',
  },
  profile: {
    name: 'Thierry Bifou',
    role: 'Développeur web full-stack junior — orientation backend',
    location: 'Douala, Cameroun — disponible à distance',
    availability: 'Ouvert aux opportunités junior, missions et collaborations',
    imageAlt: 'Portrait professionnel de Thierry Bifou',
    summary:
      "Développeur web junior issu d'un parcours technique, je construis des applications structurées, maintenables et adaptées à des besoins concrets.",
    biography: [
      "Mon parcours en électronique, électrotechnique et sciences physiques a renforcé ma capacité à analyser un problème, comprendre un système et avancer avec méthode.",
      "Je développe aujourd'hui mes compétences web à travers des projets complets : modélisation, interface utilisateur, logique métier, API, authentification, rôles, base de données et déploiement.",
    ],
    goals: [
      'Approfondir le développement backend avec PHP, Laravel et Node.js.',
      'Contribuer à des applications utiles, fiables et simples à faire évoluer.',
      'Renforcer progressivement mes compétences en architecture, tests et déploiement.',
    ],
    values: [
      'Comprendre le besoin avant de choisir une solution technique.',
      'Préférer une architecture lisible et maintenable aux raccourcis fragiles.',
      'Documenter les décisions pour faciliter l’évolution du projet.',
    ],
  },
  profileAbout: {
    imageAlt: 'Portrait professionnel de Thierry Bifou',
  },
  projectCategories: {
    operations: 'Gestion et outils métier',
    commerce: 'Commerce électronique',
    mobility: 'Mobilité et transport',
  },
  projectStatus: {
    concept: 'Projet de portfolio',
  },
  projectLinks: {
    liveDemo: 'Démo en ligne',
    sourceCode: 'Code source',
    comingSoon: 'Bientôt disponible',
    unavailable: 'Indisponible',
  },
  projectsPage: {
    eyebrow: 'Projets',
    title: 'Des applications pensées autour de besoins concrets.',
    introduction:
      'Cette sélection présente des projets réalisés ou structurés durant mon apprentissage : gestion de résidences, commerce électronique et réservation de transport.',
    filtersLabel: 'Filtrer les projets par catégorie',
    allFilter: 'Tous',
    resultSingular: 'projet affiché',
    resultPlural: 'projets affichés',
    detailAction: 'Voir les détails',
    noResults: 'Aucun projet ne correspond à ce filtre.',
  },
  projectDetailPage: {
    backAction: 'Retour aux projets',
    problemTitle: 'Problématique',
    solutionTitle: 'Solution apportée',
    featuresTitle: 'Fonctionnalités principales',
    technologiesTitle: 'Technologies mobilisées',
    galleryTitle: 'Aperçus du projet',
    galleryControls: {
      previousAction: 'Afficher l’image précédente',
      nextAction: 'Afficher l’image suivante',
      thumbnailAction: 'Afficher l’image',
      counterLabel: 'Image',
    },
    navigationLabel: 'Navigation entre les projets',
    previousLabel: 'Projet précédent',
    nextLabel: 'Projet suivant',
    unknownEyebrow: 'Projet introuvable',
    unknownTitle: 'Ce projet n’existe pas.',
    unknownDescription:
      'Le lien demandé ne correspond à aucun projet disponible dans ce portfolio.',
    unknownAction: 'Voir tous les projets',
  },
  projects: {
    arms: {
      title: 'ARMS',
      shortSummary: 'Application de gestion de résidences académiques.',
      summary:
        'ARMS centralise la gestion de résidences universitaires : utilisateurs, rôles, bâtiments, étages, chambres, contrats, paiements et suivi administratif.',
      problem:
        'La gestion manuelle de résidences académiques disperse les informations, ralentit le suivi des occupants et complique le contrôle des paiements et des responsabilités.',
      solution:
        'Une application web structurée réunit les données métier dans un espace administrable, avec authentification, contrôle des accès et organisation hiérarchique des résidences.',
      features: [
        'Gestion des résidences, bâtiments, étages et chambres.',
        'Authentification, statuts utilisateurs et rôles avec contrôle des accès.',
        'Préparation du suivi des contrats, paiements et historiques administratifs.',
      ],
      imageAlt: 'Aperçu de l’application ARMS',
      galleryContent: {
        overview: {
          alt: 'Vue générale de l’interface ARMS',
          caption: null,
        },
        requests: {
          alt: 'Vue complémentaire de la gestion administrative dans ARMS',
          caption: null,
        },
      },
    },
    'h-market': {
      title: 'H-Market',
      shortSummary: 'Application e-commerce avec espace client et back office.',
      summary:
        'H-Market est une application de commerce électronique construite progressivement avec React et Node.js : catalogue, panier, checkout, authentification, rôles et espace administrateur.',
      problem:
        'Une expérience e-commerce cohérente doit séparer clairement le parcours client, les données produits et les outils de gestion réservés aux administrateurs.',
      solution:
        'L’application s’appuie sur un front office responsive, une API Express et un back office distinct afin de proposer une architecture lisible et évolutive.',
      features: [
        'Catalogue filtrable, détail produit, panier local et checkout.',
        'API Express pour les produits, catégories, commandes et sessions.',
        'Authentification avec rôles customer et admin, routes protégées et back office séparé.',
      ],
      imageAlt: 'Aperçu de l’application e-commerce H-Market',
      galleryContent: {
        catalog: {
          alt: 'Vue du catalogue produits H-Market',
          caption: null,
        },
        checkout: {
          alt: 'Vue du parcours de commande H-Market',
          caption: null,
        },
      },
    },
    bustix: {
      title: 'BusTix',
      shortSummary: 'Conception d’une application de réservation de billets interurbains.',
      summary:
        'BusTix est un projet de conception pour les agences de transport interurbain au Cameroun : trajets, bus, chauffeurs, clients, réservations, paiements et statistiques.',
      problem:
        'La gestion manuelle des réservations peut rendre difficile la consultation des horaires, le suivi des places disponibles et la centralisation des opérations.',
      solution:
        'La conception propose un système centralisé capable de structurer les trajets, les réservations et les données nécessaires au suivi opérationnel.',
      features: [
        'Modélisation des clients, bus, chauffeurs, trajets et réservations.',
        'Préparation du suivi des paiements et des statistiques.',
        'Parcours utilisateur pensé pour une consultation adaptée au mobile.',
      ],
      imageAlt: 'Aperçu conceptuel de l’application BusTix',
      galleryContent: {
        search: {
          alt: 'Vue conceptuelle de la recherche de trajets BusTix',
          caption: null,
        },
        'seat-selection': {
          alt: 'Vue conceptuelle de la sélection de siège BusTix',
          caption: null,
        },
      },
    },
  },
  skillLevels: {
    comfortable: 'Pratique solide',
    familiar: 'Pratique régulière',
    exploring: 'En apprentissage',
  },
  skillsPage: {
    eyebrow: 'Compétences',
    title: 'Des compétences développées à travers des projets concrets.',
    introduction:
      'Ces niveaux indiquent mon degré actuel de pratique. Ils restent évolutifs et ne prétendent pas représenter une maîtrise définitive de chaque outil.',
    legendTitle: 'Lecture des niveaux',
    groupsTitle: 'Domaines de compétences',
    practiceTitle: 'Une progression fondée sur la pratique',
    practiceDescription:
      'Chaque compétence est mobilisée dans un contexte réel ou pédagogique, documentée et renforcée au fil des projets.',
    projectsAction: 'Voir les projets',
  },
  skillGroups: {
    frontend: {
      title: 'Frontend',
      description:
        'Conception d’interfaces responsives, structurées en composants et progressivement accessibles.',
    },
    backend: {
      title: 'Backend et données',
      description:
        'Développement de logique métier, API, authentification, rôles et intégration de bases de données.',
    },
    tools: {
      title: 'Outils, conception et workflow',
      description:
        'Versionnement, environnements de développement, modélisation et déploiement progressif.',
    },
  },
  experience: {
    'independent-projects': {
      title: 'Développement de projets web personnels',
      organization: 'ARMS, H-Market, BusTix et portfolio',
      location: 'Douala, Cameroun — à distance',
      summary:
        'Conception et développement progressif d’applications web afin de consolider mes compétences frontend, backend et organisationnelles.',
      highlights: [
        'Découpage des fonctionnalités en modules et composants maintenables.',
        'Utilisation de Git, commits atomiques, documentation et validations lint/build.',
        'Travail sur les API, les rôles utilisateurs, la modélisation et le responsive.',
      ],
    },
    'frontend-internship': {
      title: 'Apprentissage pratique du développement web',
      organization: 'Formation et projets encadrés',
      location: 'Douala, Cameroun',
      summary:
        'Mise en pratique des fondamentaux du développement web à travers des exercices, intégrations et projets progressifs.',
      highlights: [
        'Création d’interfaces responsives à partir de besoins fonctionnels.',
        'Correction ciblée d’erreurs et amélioration progressive du code.',
        'Utilisation d’outils de développement, versionnement et documentation.',
      ],
    },
  },
  education: {
    'web-development-diploma': {
      qualification: 'Formation en développement web full-stack',
      institution: 'Localhost Academy — à compléter si nécessaire',
      summary:
        'Apprentissage du développement frontend et backend : JavaScript, React, Node.js, PHP, Laravel, bases de données et conduite de projet.',
    },
    'continuous-learning': {
      qualification: 'Apprentissage continu et projets personnels',
      institution: 'Documentation, pratique et veille technique',
      summary:
        'Approfondissement progressif de l’architecture web, des API, de l’accessibilité, du déploiement et des bonnes pratiques de développement.',
    },
  },
  resume: {
    eyebrow: 'Curriculum vitae',
    title: 'CV professionnel',
    headline: 'Développeur web full-stack junior — orientation backend',
    summary:
      'Développeur web junior avec une base technique solide, une pratique progressive de React, Node.js, PHP et Laravel, et une attention particulière à la maintenabilité des applications.',
    sections: {
      contact: 'Coordonnées',
      experience: 'Expérience pratique',
      education: 'Formation',
      skills: 'Compétences',
      languages: 'Langues',
    },
    languages: ['Français : courant', 'Anglais : intermédiaire'],
    downloadLabel: 'Télécharger le CV',
    downloadPreparing: 'Préparation du PDF...',
    downloadError: 'Le PDF n’a pas pu être généré',
    currentLabel: "Aujourd'hui",
    fictitiousNotice:
      'Vérifiez les dates, les coordonnées et les informations personnelles avant publication.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Échangeons autour de votre besoin ou de votre opportunité.',
    introduction:
      'Utilisez les coordonnées ci-dessous ou préparez un message depuis ce formulaire. Aucun envoi serveur n’est simulé.',
    detailsTitle: 'Coordonnées',
    emailLabel: 'Email',
    phoneLabel: 'Téléphone mobile',
    phone: '+237697147114',
    locationLabel: 'Localisation',
    availabilityLabel: 'Disponibilité',
    socialLabel: 'Liens de contact',
    directEmailAction: 'Écrire directement',
    externalLinkLabel: 'ouvre un nouvel onglet',
    form: {
      title: 'Préparer un message',
      requiredHint: 'Tous les champs sont requis.',
      nameLabel: 'Nom',
      emailLabel: 'Votre email',
      subjectLabel: 'Sujet',
      messageLabel: 'Message',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'vous@example.com',
      subjectPlaceholder: 'Objet de votre message',
      messagePlaceholder: 'Décrivez votre projet, votre besoin ou votre opportunité.',
      prepareEmail: 'Préparer l’email',
      copyMessage: 'Copier le message',
      copiedMessage: 'Message copié',
      copyError: 'La copie a échoué. Sélectionnez le message manuellement.',
      copyStatusLabel: 'État de la copie',
    },
  },
}

export default frContent
