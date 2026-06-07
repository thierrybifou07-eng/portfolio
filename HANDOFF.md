# Transmission du projet

## État courant

- Date : 7 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P3 — Design system et animations
- Dépendances fonctionnelles : `react-router` 7.17.0, `motion` 12.40.0
- Blocage connu : aucun

## Design system disponible

- Palette claire centralisée dans `src/styles/variables.css`.
- Typographie système, sans police distante.
- Échelle d'espacement de 4 à 96 px.
- Rayons de 10, 16 et 24 px, plus la variante pilule.
- Ombres légères à deux niveaux.
- Boutons primaire et secondaire.
- Style de carte réutilisable `.surface-card`.
- Focus visible commun et cibles interactives de 44 px.
- Arrière-plan statique avec gradients légers.
- Aucun mode sombre dans la première version.

## Infrastructure Motion

- `MotionConfig` applique `reducedMotion="user"`.
- `LazyMotion` avec `domAnimation` limite le JavaScript chargé.
- Les composants utilisent `m` plutôt que l'import Motion complet.
- `PageTransition` anime les changements de route.
- `Reveal` anime les apparitions dans le viewport.
- `BackToTopButton` utilise `AnimatePresence`.
- Le CSS désactive transitions et déplacements non essentiels lorsque
  `prefers-reduced-motion: reduce` est actif.

## Architecture disponible

- Toutes les routes restent imbriquées sous `MainLayout`.
- Le layout conserve header, navigation responsive, footer et retour en haut.
- `PagePlaceholder` utilise maintenant la typographie et les animations P3.
- `ButtonLink` fournit un CTA interne réutilisable.
- La page 404 utilise le bouton primaire.
- Les futurs composants peuvent réutiliser `.button`, `.surface-card`,
  `Reveal` et les tokens CSS.

## Fichiers du module P3

- Dépendances : `package.json`, `package-lock.json`.
- Bootstrap : `src/main.jsx`, `src/App.jsx`.
- Animations : `src/components/animations`.
- Composants communs : `ButtonLink`, `PagePlaceholder`.
- Layout animé : `MainLayout`, `BackToTopButton`.
- Styles : `variables.css`, `globals.css`, `animations.css`, `layout.css`.
- Nettoyage : suppression de `src/index.css` et `src/App.css`.
- Suivi : `ROADMAP.md`, `TASKS.md`, `HANDOFF.md`.

## Vérifications de P3

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi avant la mise à jour finale du suivi.
- Installation npm : aucune vulnérabilité signalée.
- Bundle principal : 318.54 kB, 103.85 kB gzip.
- Chrome headless : bureau à 1440 × 900 et mobile à 500 × 844.
- DOM : primitives Motion et bouton 404 rendus correctement.

## Limites restantes

- Les pages utilisent toujours des contenus temporaires.
- Les informations sont encore dispersées dans les composants temporaires.
- Les données structurées et images remplaçables n'existent pas encore.
- Les styles de cartes sont prêts mais les cartes métier seront ajoutées plus
  tard.
- Le footer ne contient pas encore de coordonnées ni de réseaux définitifs.
- Les ressources Vite inutilisées seront remplacées lors de l'ajout des images.

## Commit de P3

Message : `feat(styles): add modern design system`

Contenu : design tokens, styles globaux clairs, composants communs, Motion
accessible, transitions de routes et nettoyage des styles Vite.

## Prochaine tâche proposée

P4 — Données éditables et placeholders. Créer les fichiers de `src/data`, les
contrats de projets, les contenus fictifs et les images remplaçables. Le module
reste verrouillé jusqu'à une nouvelle instruction explicite.
