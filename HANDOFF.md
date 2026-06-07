# Transmission du projet

## État courant

- Date : 7 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P1 — Routage et pages temporaires
- Dépendance ajoutée : `react-router` 7.17.0
- Blocage connu : aucun

## Architecture disponible

- `main.jsx` initialise `BrowserRouter`.
- `App.jsx` délègue le rendu à `AppRoutes`.
- `AppRoutes` déclare toutes les routes publiques et la route 404.
- Chaque route possède une page temporaire dédiée dans `src/pages`.
- `PagePlaceholder` fournit la structure commune temporaire.
- `useDocumentTitle` centralise les titres du navigateur.
- La route `/projects/:slug` construit temporairement son titre depuis le slug.

Routes disponibles :

- `/`
- `/about`
- `/projects`
- `/projects/:slug`
- `/skills`
- `/resume`
- `/contact`
- `*`

## Décisions maintenues

- Utiliser le mode déclaratif de `react-router`.
- Réserver le layout imbriqué avec `Outlet` au module P2.
- Réserver les styles définitifs et Motion au module P3.
- Stocker les contenus éditables dans `src/data` à partir de P4.
- Utiliser uniquement des données fictives avant validation.
- Ne pas ajouter de bibliothèque d'icônes, TypeScript ou Tailwind.
- Charger la génération PDF à la demande en P10.

## Fichiers du module P1

- Dépendances : `package.json`, `package-lock.json`.
- Entrées : `src/main.jsx`, `src/App.jsx`.
- Routage : `src/routes/AppRoutes.jsx`.
- Infrastructure : `src/hooks/useDocumentTitle.js`,
  `src/components/common/PagePlaceholder.jsx`.
- Pages : les huit composants de `src/pages`.
- Suivi : `ROADMAP.md`, `TASKS.md`, `HANDOFF.md`.

## Vérifications de P1

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi avant la mise à jour finale du suivi.
- Installation npm : aucune vulnérabilité signalée.
- Vite : HTTP 200 pour toutes les routes attendues et une route inconnue.
- Chrome headless : titres et titres de page rendus correctement.

## Limites restantes

- Les pages contiennent seulement du contenu temporaire.
- La navigation, le header, le footer et `MainLayout` n'existent pas encore.
- Les anciens styles et ressources de la démo Vite seront remplacés en P3.
- Les données structurées et images remplaçables seront créées en P4.
- Le fallback SPA devra être configuré selon l'hébergeur choisi.

## Commit de P1

Message : `feat(routes): add portfolio page routing`

Contenu : installation de React Router, création des routes et pages
temporaires, titres documentaires centralisés, route dynamique et page 404.

## Prochaine tâche proposée

P2 — Layout responsive partagé. Créer `MainLayout`, les routes imbriquées avec
`Outlet`, le header, la navigation desktop/mobile, le footer, les liens actifs
et le retour en haut. Le module reste verrouillé jusqu'à une nouvelle
instruction explicite.
