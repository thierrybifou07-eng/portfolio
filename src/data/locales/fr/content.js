const frContent = {
  home: {
    eyebrow: 'Portfolio fictif',
    headline: 'Je conçois des interfaces web claires et utiles.',
    introduction:
      "Développeur frontend junior, j'explore React et les outils web modernes à travers des projets structurés, accessibles et centrés sur les usages.",
    primaryAction: 'Découvrir mes projets',
    secondaryAction: 'En savoir plus',
    featuredSkillsTitle: 'Compétences principales',
    skillsAction: 'Voir toutes les compétences',
    featuredProjectsTitle: 'Projets sélectionnés',
    projectAction: 'Découvrir le projet',
    contactTitle: 'Construisons quelque chose de simple et solide.',
    contactAction: 'Me contacter',
  },
  profile: {
    name: 'Alex Martin',
    role: 'Développeur web frontend junior',
    location: 'Disponible à distance',
    availability: 'Ouvert aux opportunités junior et aux collaborations',
    imageAlt: "Portrait fictif d'Alex Martin",
    summary:
      "Profil fictif passionné par la création d'expériences web accessibles, maintenables et agréables à utiliser.",
    biography: [
      "J'apprends en transformant des besoins concrets en interfaces cohérentes, puis en améliorant chaque détail grâce aux retours et aux tests.",
      "Mon approche privilégie une architecture lisible, des composants réutilisables et une communication simple autour des décisions techniques.",
    ],
    goals: [
      'Approfondir React et les architectures frontend modernes.',
      'Contribuer à des produits utiles avec une équipe bienveillante.',
      'Développer progressivement mes compétences côté serveur.',
    ],
    values: [
      'Comprendre le problème avant de choisir la solution.',
      'Construire pour les personnes, y compris au clavier.',
      'Documenter les décisions qui aideront la suite du projet.',
    ],
  },
  projectCategories: {
    operations: 'Outils métier',
    commerce: 'Commerce',
    mobility: 'Mobilité',
  },
  projectStatus: {
    concept: 'Concept fictif',
  },
  projects: {
    arms: {
      title: 'ARMS',
      shortSummary: 'Tableau de bord fictif de suivi des actifs et demandes.',
      summary:
        "Concept d'application permettant à une petite équipe de suivre son matériel, les demandes internes et les actions prioritaires depuis un espace unique.",
      problem:
        'Les informations sont dispersées entre plusieurs fichiers, ce qui ralentit le suivi et rend les responsabilités peu visibles.',
      solution:
        'Une interface centralisée organise les actifs, les demandes et les alertes avec des vues adaptées aux tâches quotidiennes.',
      features: [
        'Vue synthétique des actifs et de leur état.',
        'Suivi des demandes avec priorités et responsables.',
        'Recherche, filtres et historique des changements.',
      ],
      imageAlt: "Aperçu fictif du tableau de bord ARMS",
    },
    'h-market': {
      title: 'H-Market',
      shortSummary: 'Place de marché fictive pour des commerces de proximité.',
      summary:
        'Concept de marketplace responsive réunissant catalogue, panier et suivi de commande dans un parcours simple pour les clients et les vendeurs.',
      problem:
        'Les petits commerces disposent rarement d’un parcours de vente en ligne cohérent et facile à administrer.',
      solution:
        'Une vitrine commune simplifie la découverte des produits et prépare une gestion structurée des commandes et du stock.',
      features: [
        'Catalogue filtrable avec variantes de produits.',
        'Panier persistant et récapitulatif clair.',
        'Espace de suivi des commandes et disponibilités.',
      ],
      imageAlt: "Aperçu fictif de la marketplace H-Market",
    },
    bustix: {
      title: 'BusTix',
      shortSummary: 'Réservation fictive de trajets en bus interurbains.',
      summary:
        'Concept de service permettant de rechercher un trajet, comparer les horaires et réserver une place depuis une interface adaptée au mobile.',
      problem:
        'La réservation de trajets peut manquer de visibilité sur les horaires, les places disponibles et les étapes restantes.',
      solution:
        'Un parcours guidé présente les résultats, les détails du voyage et la confirmation dans un ordre prévisible.',
      features: [
        'Recherche par départ, destination et date.',
        'Comparaison des horaires et places disponibles.',
        'Sélection du siège et confirmation récapitulative.',
      ],
      imageAlt: "Aperçu fictif du service de réservation BusTix",
    },
  },
  skillLevels: {
    comfortable: 'À l’aise',
    familiar: 'Pratique régulière',
    exploring: 'En apprentissage',
  },
  skillGroups: {
    frontend: {
      title: 'Frontend',
      description:
        'Construction d’interfaces responsive, accessibles et organisées en composants.',
    },
    backend: {
      title: 'Backend et données',
      description:
        'Bases utiles pour comprendre les API, la persistance et les échanges client-serveur.',
    },
    tools: {
      title: 'Outils et méthode',
      description:
        'Environnement de développement, versionnement et préparation visuelle.',
    },
  },
  experience: {
    'independent-projects': {
      title: 'Projets web indépendants',
      organization: 'Environnement d’apprentissage fictif',
      location: 'À distance',
      summary:
        'Conception de prototypes React pour pratiquer le routage, les formulaires, la gestion de données et l’accessibilité.',
      highlights: [
        'Découpage des interfaces en composants réutilisables.',
        'Documentation des décisions et validation par lint et build.',
        'Amélioration progressive du responsive et du clavier.',
      ],
    },
    'frontend-internship': {
      title: 'Stagiaire frontend',
      organization: 'Studio numérique fictif',
      location: 'Hybride',
      summary:
        'Participation fictive à la maintenance de pages web et à la création de composants simples sous supervision.',
      highlights: [
        'Intégration de maquettes responsive.',
        'Correction de défauts visuels et fonctionnels ciblés.',
        'Collaboration à partir de tickets et de revues de code.',
      ],
    },
  },
  education: {
    'web-development-diploma': {
      qualification: 'Diplôme fictif en développement web',
      institution: 'Institut numérique fictif',
      summary:
        'Fondamentaux du web, JavaScript, interfaces responsive, bases de données et conduite de projet.',
    },
    'continuous-learning': {
      qualification: 'Apprentissage continu',
      institution: 'Documentation et projets personnels',
      summary:
        'Approfondissement de React, de l’accessibilité et des pratiques modernes de développement frontend.',
    },
  },
  resume: {
    title: 'Curriculum vitae',
    headline: 'Développeur web frontend junior',
    summary:
      'Profil fictif orienté React, accessibilité et interfaces maintenables, avec une pratique progressive du backend.',
    sections: {
      experience: 'Expérience',
      education: 'Formation',
      skills: 'Compétences',
      languages: 'Langues',
    },
    languages: ['Français : courant', 'Anglais : intermédiaire'],
    downloadLabel: 'Télécharger le CV',
  },
  contact: {
    eyebrow: 'Contact fictif',
    title: 'Parlons de votre prochain projet.',
    introduction:
      'Ce formulaire préparera un email ou copiera votre message. Aucun envoi serveur ne sera simulé.',
    emailLabel: 'Email',
    socialLabel: 'Réseaux',
    form: {
      nameLabel: 'Nom',
      emailLabel: 'Votre email',
      subjectLabel: 'Sujet',
      messageLabel: 'Message',
      prepareEmail: 'Préparer l’email',
      copyMessage: 'Copier le message',
      copiedMessage: 'Message copié',
    },
  },
}

export default frContent
