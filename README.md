# Portfolio React bilingue

Portfolio multipage fictif construit avec React et Vite. L'application propose
deux langues, trois préférences de thème, des projets filtrables, des études de
cas, un CV PDF généré dans le navigateur et un formulaire de contact sans
backend.

## Stack

- React 19
- Vite 8
- React Router
- Motion
- i18next et react-i18next
- React PDF

## Installation

```bash
npm install
npm run dev
```

Vérifications avant commit :

```bash
npm run lint
npm run build
```

## Routes

| Route | Contenu |
| --- | --- |
| `/` | Accueil |
| `/about` | Présentation et parcours |
| `/projects` | Projets et filtres |
| `/projects/:slug` | Étude de cas |
| `/skills` | Compétences indicatives |
| `/resume` | CV et téléchargement PDF |
| `/contact` | Coordonnées, `mailto:` et copie |

Les routes inconnues affichent une 404 applicative. L'hébergement statique devra
rediriger les requêtes directes vers `index.html`; cette configuration est
réservée à la phase de déploiement.

## Contenu

- `src/data/shared` contient les identifiants et données non traduites.
- `src/data/locales/fr` et `src/data/locales/en` contiennent le contenu métier.
- `src/i18n/locales` contient les libellés d'interface.
- `src/config/site.js` centralise le nom, l'email, les réseaux et le nom du PDF.

Les informations personnelles, liens sociaux, images et projets sont fictifs.
Ils doivent être remplacés et relus dans les deux langues avant toute
publication.

## Architecture

- `src/pages` assemble les pages.
- `src/components` contient les composants visuels.
- `src/features` isole les fonctions Contact et CV PDF.
- `src/contexts` gère le thème `system`, `light` ou `dark`.
- `src/styles` contient le design system et les styles par page.

React PDF est chargé uniquement sur `/resume` afin de préserver le bundle
principal.
