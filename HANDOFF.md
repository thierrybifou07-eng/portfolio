# Transmission du projet

## État courant

- Date : 7 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- État Git avant P0 : propre
- Dernier commit initial : `eb489e3 Initialization`
- Dernier module terminé : P0 — Pilotage et architecture
- Blocage connu : aucun

## Environnement vérifié

- Node.js 24.15.0
- npm 11.12.1
- React 19.2.7
- React DOM 19.2.7
- Vite 8.0.16
- ESLint 10.4.1

Le dépôt provient du template React JavaScript de Vite. L'application actuelle
est encore la démo initiale et ne possède ni routeur, ni Motion, ni génération
PDF.

## Décisions prises

- Construire une SPA multipage avec le mode déclaratif de `react-router`.
- Utiliser un layout partagé avec routes imbriquées et `Outlet`.
- Stocker tout contenu éditable dans `src/data`.
- Utiliser uniquement des données fictives avant validation.
- Installer `motion` seulement avec le module design et animations.
- Installer `@react-pdf/renderer` seulement avec le module CV.
- Charger la génération PDF à la demande.
- Utiliser des SVG locaux plutôt qu'une bibliothèque d'icônes.
- Conserver JavaScript et CSS natif, sans TypeScript ni Tailwind.
- Fournir un formulaire de contact honnête basé sur `mailto:` et la copie.
- Reporter le mode sombre après la première version.

## Fichiers du module P0

- `AGENTS.md` : règles durables pour les agents.
- `ROADMAP.md` : modules, dépendances et critères d'acceptation.
- `TASKS.md` : checklist active et backlog verrouillé.
- `HANDOFF.md` : état de reprise et décisions.

## Vérifications de P0

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Contrôle de portée : seuls les quatre fichiers de pilotage sont ajoutés.
- Fichiers applicatifs : aucun changement.

## Limites restantes

- Aucune dépendance fonctionnelle n'a encore été ajoutée.
- Aucun fichier applicatif n'a encore été modifié.
- Les pages, routes, données et composants n'existent pas encore.
- Le fallback de déploiement SPA devra être adapté à l'hébergeur choisi.
- Les informations personnelles définitives restent à fournir et valider.

## Commit de P0

Message : `docs(process): add portfolio steering files`

Contenu : ajout des règles d'intervention, de la roadmap atomique, du registre
de tâches et de ce document de reprise. Les validations lint et build
réussissent; aucune fonctionnalité applicative n'est encore ajoutée.

## Prochaine tâche proposée

P1 — Routage et pages temporaires. Ce module installera `react-router`, créera
les routes, pages temporaires, titres dynamiques et la page 404. Il reste
verrouillé jusqu'à une nouvelle instruction explicite.
