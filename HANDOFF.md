# Transmission du projet

## État courant

- Date : 7 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P5 - Page d'accueil animée
- Dépendances installées : `react-router`, `motion`, `i18next`,
  `react-i18next`
- Blocage technique connu : aucun

## Page d'accueil

La route `/` utilise maintenant les données bilingues de
`usePortfolioData`. Aucun contenu métier n'est codé directement dans les
composants.

La page contient :

- un hero avec promesse, rôle, introduction, disponibilité et deux CTA;
- le portrait fictif avec légende;
- trois aperçus de compétences;
- les trois projets vedettes;
- un CTA final vers le contact.

## Composants

- `HomeHero` gère le contenu principal et l'image prioritaire.
- `FeaturedSkills` affiche les groupes et niveaux indicatifs.
- `FeaturedProjects` affiche les concepts, technologies et liens de détail.
- `HomePage` assemble les sections et le CTA final.

Les animations utilisent la primitive `Reveal`, déjà configurée avec
`useReducedMotion`.

## Images

Le portrait utilise `SafeImage` avec :

- dimensions explicites 800 x 800;
- `loading="eager"`;
- `fetchPriority="high"`.

Les trois images de projets utilisent :

- dimensions explicites 1200 x 750;
- le lazy loading par défaut;
- les textes alternatifs de la langue active.

Les médias restent des placeholders et bloquent toujours le déploiement.

## Responsive et accessibilité

- Un seul `h1` est présent.
- Les trois sections secondaires utilisent des `h2`.
- Les compétences et projets utilisent six éléments `article`.
- Chaque carte projet contient un seul lien d'action de 44 px minimum.
- Les boutons s'empilent au format mobile.
- Les grilles passent de trois à deux puis une colonne.
- Le décor du portrait ne provoque aucun débordement horizontal.
- Le thème sombre et la réduction des mouvements ont été contrôlés.

## Vérifications de P5

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Rendu statique français et anglais validé.
- Contrôle Chrome headless à 1440 x 1000, 1024 x 900 et 390 x 844.
- Thèmes clair et sombre validés.
- `document.lang` suit bien `fr` et `en`.
- Portrait eager et images de projets lazy validés.
- Toutes les images possèdent un attribut `alt`.
- Aucun débordement horizontal aux formats contrôlés.
- `prefers-reduced-motion: reduce` détecté et respecté.
- `git diff --check` : réussi.

## Limites restantes

- Le profil et toutes les images restent fictifs.
- Les routes de détail projet affichent encore le placeholder de P9.
- Les pages À propos, Compétences, Projets, CV et Contact restent à construire.
- Les destinations externes et le PDF ne sont pas validés.

## Commit de P5

Message : `feat(home): add animated portfolio homepage`

Contenu : hero, aperçu des compétences, projets vedettes, CTA, styles
responsive et animations accessibles.

## Prochaine tâche proposée

P6 - Page À propos. Construire la présentation, le parcours, les formations,
les objectifs et la philosophie de travail à partir des données bilingues. Le
module reste verrouillé jusqu'à une nouvelle instruction explicite.

## Deployment blocker

- replace all fictitious profile, resume and contact data before publishing;
- verify both French and English contents;
- replace profile and project placeholder images;
- validate social links and downloadable resume content.
