# Transmission du projet

## État courant

- Date : 8 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P8 - Liste des projets
- Prochaine tâche autorisée : P9 - Détail des projets
- Dépendances installées : `react-router`, `motion`, `i18next`,
  `react-i18next`
- Blocage technique connu : aucun

## Page Projets

La route `/projects` utilise maintenant les données bilingues de
`usePortfolioData`. Elle affiche les trois concepts fictifs et permet de les
filtrer sans rechargement.

Les filtres sont générés depuis les catégories réellement présentes :

- `all`;
- `operations`;
- `commerce`;
- `mobility`.

Le filtre actif utilise `aria-pressed`. Le compteur de résultats utilise
`aria-live="polite"` et gère le singulier et le pluriel.

## Cartes de projets

Chaque carte affiche :

- l'image locale avec lazy loading et texte alternatif;
- la catégorie et le statut fictif;
- le titre et le résumé complet;
- toutes les technologies du projet;
- un lien vers `/projects/:slug`.

Les actions démo et dépôt sont préparées mais ne sont pas rendues tant que
leurs URL valent `null`. Aucun lien trompeur n'est affiché.

## Responsive et accessibilité

- Un seul `h1` est présent.
- Les trois projets utilisent des articles et des `h2`.
- Les filtres et liens mesurent au moins 44 px.
- Les filtres passent sur deux colonnes au format mobile.
- La grille passe de deux à une colonne.
- Les images sont chargées en lazy loading.
- Aucun débordement horizontal n'a été détecté.

## Vérifications de P8

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Rendu statique français et anglais validé.
- Filtres Tous, Outils métier, Commerce et Mobilité testés.
- Compteurs `3 projets` et `1 projet` validés en français et en anglais.
- Routes ARMS, H-Market et BusTix validées.
- Aucun lien externe rendu avec les destinations `null`.
- Contrôle Chrome headless à 1440 x 1000, 1024 x 900 et 390 x 844.
- Thèmes clair et sombre validés.
- `prefers-reduced-motion: reduce` détecté et respecté.
- `git diff --check` : réussi.

## Limites restantes

- Les projets et images restent fictifs.
- Les routes de détail affichent encore le placeholder de P9.
- Les URL de démo et dépôt restent à valider.
- Le CV et la page Contact restent à construire.

## Commit de P8

Message : `feat(projects): add data-driven project listing`

Contenu : introduction, filtres accessibles, compteur, cartes bilingues,
technologies, liens conditionnels et styles responsive.

## Prochaine tâche autorisée

P9 - Détail des projets. Construire les études de cas par slug, le cas inconnu,
les captures et la navigation précédent/suivant. Cette tâche a été autorisée
explicitement après le commit de P8.

## Deployment blocker

- replace all fictitious profile, resume and contact data before publishing;
- verify both French and English contents;
- replace profile and project placeholder images;
- validate social links and downloadable resume content.
