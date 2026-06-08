# Transmission du projet

## État courant

- Date : 8 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P12 - Stabilisation
- Prochaine tâche planifiée : P13 - Préparation du déploiement SPA
- Prochaine tâche autorisée : aucune sans nouvelle instruction
- Dépendances installées : `react-router`, `motion`, `i18next`,
  `react-i18next`, `@react-pdf/renderer`
- Blocage technique connu : aucun

## Stabilisation réalisée

- Métadonnées de base, Open Graph et Twitter ajoutées dans `index.html`.
- Titres, descriptions et directives robots synchronisés avec chaque page.
- `og:locale`, `lang`, `theme-color` et thème résolu synchronisés.
- Routes 404 et projet inconnu marquées `noindex,follow`.
- Contrat partagé des projets stabilisé avec `categoryId`.
- Libellé anglais du filtre corrigé.
- Focus déplacé vers le contenu principal après navigation.
- Cibles trop petites de la navigation, du footer et des liens corrigées.
- README du template remplacé par la documentation du portfolio.

## Contrôles navigateur

- Routes testées : `/`, `/about`, `/projects`, `/projects/arms`, `/skills`,
  `/resume`, `/contact` et une route inconnue.
- Profils testés : français clair à 1440 px et anglais sombre à 390 px.
- Un seul `h1`, aucun `alt` manquant et aucun débordement horizontal.
- Aucune cible interactive visible inférieure à 44 px.
- Menu mobile ouvrable, refermable avec Échap et restitution du focus.
- Langue et thème persistants; préférence système suivie en temps réel.
- Navigation SPA avec retour en haut et focus sur `main-content`.
- Filtrage par catégorie et cas de slug inconnu validés.
- Téléchargement PDF valide et fallback local de `SafeImage` validé.
- Aucune exception JavaScript détectée.

## Vérifications de P12

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Les routes directes répondent avec HTTP 200 dans la prévisualisation Vite.
- Contrastes des textes et boutons conformes dans les deux thèmes.
- Réduction des mouvements validée.
- `git diff --check` : réussi.

Le chunk `@react-pdf/renderer` dépasse 500 kB après minification. Cet
avertissement Vite est accepté car le module reste chargé à la demande sur
`/resume`.

## Historique

Le commit `06da079` contient P11 Contact, mais porte par erreur le sujet
`feat(resume): add client-side pdf resume`. Il n'a pas été réécrit afin de
préserver l'historique existant.

## Limites et blocage avant déploiement

- Les données de profil, CV et contact sont fictives.
- Les images de profil et de projets sont des placeholders.
- Les liens sociaux et le contenu du CV doivent être validés.
- Les contenus français et anglais doivent être relus.
- Aucune publication ne doit avoir lieu avant la levée explicite de ce blocage.

## Prochaine tâche planifiée

P13 doit documenter et préparer le déploiement statique ainsi que le fallback
SPA. Cette phase reste verrouillée jusqu'à une nouvelle instruction et ne doit
pas publier l'application tant que les données fictives ne sont pas remplacées.
