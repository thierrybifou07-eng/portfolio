# Roadmap du portfolio

## Règles de progression

- Un seul module peut être actif.
- Chaque module produit un commit atomique.
- `TASKS.md` et `HANDOFF.md` sont mis à jour avant chaque commit.
- Le module suivant reste verrouillé jusqu'à une nouvelle instruction.
- Les pages restent des placeholders minimalistes jusqu'à P4.
- Les données personnelles restent fictives jusqu'à validation explicite.
- Aucun déploiement n'est autorisé avant la levée du blocage documenté.

## Modules

| ID | Statut | Commit attendu | Objectif et critères d'acceptation |
| --- | --- | --- | --- |
| P0 | Terminé | `docs(process): add portfolio steering files` | Créer les fichiers de pilotage, consigner l'état initial et valider lint/build. |
| P1 | Terminé | `feat(routes): add portfolio page routing` | Installer `react-router`; créer les routes, pages temporaires, titres et 404. |
| P2 | Terminé | `feat(layout): add responsive portfolio shell` | Créer le layout partagé, la navigation responsive, le footer et le retour en haut. |
| P3 | Terminé | `feat(styles): add modern design system` | Installer Motion; créer les styles globaux, primitives et animations accessibles. |
| P3.1 | Terminé | `docs(process): refine portfolio architecture plan` | Réviser les quatre fichiers de pilotage avec les thèmes, l'i18n, les médias, les données bilingues et le blocage de déploiement. |
| P3.2 | Terminé | `feat(theme): add global light and dark themes` | Créer `ThemeProvider` et `useTheme`; gérer `system`, `light` et `dark`; appliquer le thème résolu, persister les overrides et suivre `prefers-color-scheme` sans dépendance. |
| P3.3 | Terminé | `feat(i18n): add french and english localization` | Installer `i18next` et `react-i18next`; traduire l'interface, les titres et les textes accessibles avec persistance et fallback français; appliquer le thème initial avant React. |
| P3.4 | Terminé | `feat(navbar): add theme and language controls` | Ajouter des contrôles thème et langue accessibles, sobres, persistants et utilisables sur desktop et mobile, sans contenu métier. |
| P3.5 | Terminé | `feat(media): add site config and safe image handling` | Créer la configuration globale, les conventions d'assets et un composant d'image avec fallback et lazy loading optionnel. |
| P4 | Terminé | `feat(data): add bilingual portfolio content` | Créer les données partagées et les contenus fictifs sous `src/data/locales/{fr,en}` sans contenu métier dans le JSX. |
| P5 | Terminé | `feat(home): add animated portfolio homepage` | Construire le hero, l'image de profil, les compétences mises en avant, les projets vedettes et les CTA bilingues. |
| P6 | Terminé | `feat(about): add profile and journey page` | Construire la présentation, le parcours, les formations, les objectifs et la philosophie de travail. |
| P7 | Terminé | `feat(skills): add categorized skills page` | Afficher les compétences par catégorie avec des niveaux éditables et des animations discrètes. |
| P8 | Terminé | `feat(projects): add data-driven project listing` | Construire les cartes, technologies, liens et filtres pour ARMS, H-Market, BusTix et les futurs projets. |
| P9 | Terminé | `feat(project-detail): add project case study routes` | Construire les détails par slug, le cas inconnu, les captures et la navigation précédent/suivant. |
| P10 | Terminé | `feat(resume): add client-side pdf resume` | Installer `@react-pdf/renderer`; créer un CV PDF imprimable pouvant suivre la langue active ou proposer la langue. |
| P11 | Terminé | `feat(contact): add honest frontend contact flow` | Créer les coordonnées, réseaux, formulaire accessible, `mailto:` et copie sans faux envoi serveur. |
| P12 | Terminé | `chore(app): stabilize portfolio` | Vérifier accessibilité, thèmes, langues, images, SEO, Open Graph, responsive, performances, animations, contenus et fallback SPA. |
| P12.1 | Terminé | `docs(process): plan navbar media and external links improvements` | Auditer les sélecteurs, médias, contacts et URLs; documenter le découpage P12.2 à P12.8 sans modifier l'application. |
| P12.2 | Terminé | `feat(ui): add accessible preference dropdown` | Créer un menu de préférences réutilisable avec navigation clavier, fermeture fiable, restitution du focus et cibles tactiles de 44 px. |
| P12.3 | Terminé | `feat(navbar): refine theme and language menus` | Migrer les contrôles thème et langue vers le menu commun en préservant i18n, persistance et responsive. |
| P12.4 | Terminé | `feat(projects): extend project preview and external link data` | Ajouter et valider les variantes d'aperçu, le mode d'ajustement et les informations de démo et dépôt, avec un adaptateur temporaire. |
| P12.5 | Terminé | `feat(projects): support mobile and desktop previews` | Créer un aperçu projet réutilisable pour les formats mobile et desktop sur l'accueil, la liste et la couverture de détail. |
| P12.6 | Terminé | `feat(contact): add accessible social link icons` | Ajouter des SVG locaux et transformer les liens de contact en descripteurs filtrables sans afficher les placeholders inconnus. |
| P12.7 | Terminé | `feat(projects): add live demo and repository links` | Présenter séparément les démos, dépôts et états traduits sur les surfaces projet, sans lien vide ou cassé. |
| P12.8 | Terminé | `chore(projects): validate previews social links and live demos` | Migrer les projets existants et valider clavier, thèmes, langues, médias, URLs et responsive. |
| P12.9 | Terminé | `docs(process): plan project multi-image gallery` | Auditer la galerie existante et documenter le contrat, l'intégration, les assets et les validations de la galerie multi-images sans modifier l'application. |
| P12.10 | Terminé | `feat(projects): add multi-image gallery data model` | Remplacer les tableaux parallèles de galerie par un contrat technique structuré, assemblé avec les contenus bilingues et validé. |
| P12.11 | Terminé | `feat(projects): add accessible project image gallery` | Réécrire la galerie existante avec image principale, miniatures, détection d'orientation et navigation accessible sans dépendance. |
| P12.12 | Terminé | `feat(project-detail): integrate multi-image project gallery` | Intégrer la galerie dans le hero des pages projet, retirer la grille statique du bas et préserver les autres surfaces. |
| P12.13 | Terminé | `chore(media): organize project gallery assets` | Organiser les dossiers par slug, corriger le dossier BusTix fautif et documenter les captures manquantes sans inventer d'assets. |
| P12.14 | En attente | `chore(projects): validate multi-image galleries` | Valider les données, orientations, interactions, thèmes, langues, placeholders et formats responsive des galeries. |
| P13 | En attente | `docs(deploy): prepare spa deployment` | Documenter et préparer le déploiement statique et son fallback SPA après levée explicite du blocage. |

## Dépendances entre modules

- P3.1 dépend de P3.
- P3.2 dépend de P3.1.
- P3.3 dépend de P3.2.
- P3.4 dépend de P3.2 et P3.3.
- P3.5 dépend de P3.1.
- P4 dépend de P3.2 à P3.5.
- P5 à P11 dépendent des fondations P1 à P4.
- P9 dépend spécifiquement de P8.
- P10 reste isolé derrière un chargement différé.
- P12 dépend de tous les modules fonctionnels.
- P12.1 à P12.14 s'exécutent dans l'ordre et chaque sous-phase dépend de la
  précédente.
- P13 dépend de P12.14 et de la levée du blocage de déploiement.

## Conventions transversales

### Thèmes

- Préférences disponibles : `system`, `light` et `dark`.
- `data-theme` contient le thème résolu et `data-theme-preference` le choix.
- Les overrides clair et sombre sont stockés dans `localStorage`.
- Le mode `system` retire l'override et suit les changements du système.
- Variables CSS appliquées aux layouts, composants, formulaires et pages.
- Le CV PDF peut rester clair pour garantir un rendu imprimable.

### Internationalisation

- Français et anglais disponibles sans rechargement.
- Seules les locales applicatives `fr` et `en` sont exposées.
- Les variantes régionales sont normalisées vers leur langue applicative.
- Interface traduite dans `src/i18n/locales`.
- Contenu métier traduit dans `src/data/locales`.
- Langue enregistrée prioritaire, puis `navigator.language`, puis français.
- Titres documentaires et textes accessibles traduits.
- Initialisation synchrone avec ressources locales pour éviter le flash de
  langue.

### Médias

- Configuration globale dans `src/config/site.js`.
- Images rangées par profil, projets et placeholders.
- Fallback local et texte alternatif obligatoires.
- Lazy loading hors hero lorsque pertinent.
- WebP ou AVIF et contrôle du poids pendant la stabilisation.
- Les projets acceptent un aperçu `mobile` ou `desktop`.
- L'ajustement d'image accepte `contain` ou `cover`, avec `contain` par défaut.
- Un composant commun conserve `SafeImage` et évite toute déformation.
- Les cartes conservent `image`, `imageAlt`, `previewVariant` et `previewFit`.
- Les pages de détail utilisent une galerie technique partagée et des textes
  localisés indexés par identifiant.
- La galerie accepte `auto`, `mobile` ou `desktop`; le mode `auto` considère
  comme mobile un ratio naturel largeur/hauteur strictement inférieur à `0.9`.
- La galerie utilise `contain` par défaut et n'affiche qu'une image principale
  à la fois, sans défilement automatique.
- Les assets projet sont rangés sous `src/assets/images/projects/<slug>/`.

### Menus de préférences

- Les menus thème et langue utilisent un composant accessible commun.
- Le déclencheur, le menu et les options suivent les variables des deux thèmes.
- Le clavier prend en charge les flèches, `Home`, `End`, `Enter`, `Space` et
  `Escape`.
- La fermeture restitue le focus au déclencheur lorsque pertinent.
- Aucune dépendance supplémentaire n'est autorisée.

### Liens externes

- Les liens sociaux sont des descripteurs centralisés avec identifiant, libellé,
  URL, icône et comportement externe.
- Les icônes sont des composants SVG locaux utilisant `currentColor`.
- Les projets distinguent démo publique, dépôt et disponibilité.
- Une démo n'est affichée que si son statut est `available` et son URL valide.
- Les URLs inconnues restent `null`; aucun placeholder ne produit de lien.
- Les liens externes utilisent un nouvel onglet et
  `rel="noopener noreferrer"`.

## Contrôles de stabilisation

- Navigation clavier, focus visible et hiérarchie `h1`, `h2`, `h3`.
- Contrastes et états interactifs dans les deux thèmes.
- Affichage mobile, tablette et bureau.
- Textes alternatifs, poids et chargement des images.
- Réduction des mouvements en CSS et dans Motion.
- Contenus français et anglais complets et cohérents.
- SEO de base, description et balises Open Graph.
- Routes directes et fallback SPA.
- Aucun contenu privé réel ni secret dans le dépôt.

## Blocage avant déploiement

- Remplacer toutes les données fictives de profil, CV et contact.
- Vérifier les contenus français et anglais.
- Remplacer les images placeholders de profil et projets.
- Valider les liens sociaux et le CV téléchargeable.
