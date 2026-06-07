# Transmission du projet

## État courant

- Date : 7 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P2 — Layout responsive partagé
- Dépendance disponible : `react-router` 7.17.0
- Blocage connu : aucun

## Architecture disponible

- `main.jsx` initialise `BrowserRouter`.
- `App.jsx` délègue à `AppRoutes`.
- Toutes les routes sont imbriquées sous `MainLayout`.
- `MainLayout` distribue le header, l'`Outlet`, le footer et le retour en haut.
- Le header contient la marque temporaire et la navigation principale.
- Le menu mobile expose `aria-controls` et `aria-expanded`.
- Les `NavLink` indiquent automatiquement la route active.
- Le footer contient une navigation secondaire et un contenu fictif.
- `useDocumentTitle` continue de gérer les titres des pages.

## Comportements de P2

- Navigation desktop visible au-dessus de 800 px.
- Menu mobile sous 800 px, fermé initialement.
- Fermeture du menu après sélection d'un lien ou pression sur Échap.
- Retour automatique en haut lors des changements de route.
- Bouton de retour visible après 480 px de défilement.
- Défilement instantané lorsque la réduction des mouvements est demandée.
- Lien d'évitement clavier vers le contenu principal.
- Cibles interactives d'au moins 44 px et focus visible.

## Décisions maintenues

- Les styles de P2 restent structurels et temporaires.
- Le design system définitif et Motion sont réservés à P3.
- Les contenus de navigation et de contact seront centralisés en P4.
- Les informations restent fictives avant validation.
- Aucune bibliothèque d'icônes, TypeScript ou Tailwind n'est ajoutée.

## Fichiers du module P2

- Routage : `src/routes/AppRoutes.jsx`.
- Layout : `src/layouts/MainLayout.jsx`.
- Composants : les quatre fichiers de `src/components/layout`.
- Styles : `src/styles/layout.css`.
- Suivi : `ROADMAP.md`, `TASKS.md`, `HANDOFF.md`.

## Vérifications de P2

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi avant la mise à jour finale du suivi.
- Chrome headless : bureau à 1440 × 900 et mobile à 500 × 844.
- DOM : lien actif, menu fermé, footer et retour en haut présents.

## Limites restantes

- Les pages contiennent toujours du contenu temporaire.
- Les couleurs actuelles proviennent encore du template Vite.
- Le système conserve temporairement le mode sombre automatique du template.
- Les animations Motion et les composants visuels communs n'existent pas.
- Le footer ne contient pas encore de coordonnées ni de réseaux réels.
- Les données structurées et images remplaçables seront créées en P4.

## Commit de P2

Message : `feat(layout): add responsive portfolio shell`

Contenu : layout partagé imbriqué, navigation responsive, footer, liens actifs,
accessibilité clavier et retour en haut.

## Prochaine tâche proposée

P3 — Design system et animations. Installer `motion`, remplacer les styles du
template, créer les variables et composants communs, puis ajouter des
animations sobres respectant la réduction des mouvements. Le module reste
verrouillé jusqu'à une nouvelle instruction explicite.
