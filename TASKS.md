# Registre des tâches

## Dernier module terminé

**P1 — Routage et pages temporaires**

Statut : terminé le 7 juin 2026

Commit : `feat(routes): add portfolio page routing`

### Checklist

- [x] Installer `react-router`.
- [x] Initialiser `BrowserRouter` dans `main.jsx`.
- [x] Déléguer `App.jsx` à `AppRoutes`.
- [x] Créer les routes `/`, `/about`, `/projects`, `/projects/:slug`,
  `/skills`, `/resume`, `/contact` et `*`.
- [x] Créer une page temporaire dédiée pour chaque route.
- [x] Créer le hook centralisé `useDocumentTitle`.
- [x] Créer une page 404 avec retour à l'accueil.
- [x] Vérifier la route dynamique avec le slug `arms`.
- [x] Exécuter lint, build et contrôle du diff.
- [x] Vérifier les routes avec Vite et Chrome headless.

### Fichiers concernés

- `package.json`
- `package-lock.json`
- `src/main.jsx`
- `src/App.jsx`
- `src/routes/AppRoutes.jsx`
- `src/hooks/useDocumentTitle.js`
- `src/components/common/PagePlaceholder.jsx`
- `src/pages/*.jsx`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Les huit chemins testés répondent en HTTP 200 avec Vite.
- Chrome headless rend le titre et le `h1` attendus pour chaque route.
- `npm audit` lors de l'installation : aucune vulnérabilité.

## Prochaine tâche proposée

**P2 — Layout responsive partagé**

Statut : en attente d'une nouvelle instruction explicite.

## Backlog verrouillé

- [ ] P3 — Design system et animations.
- [ ] P4 — Données éditables et placeholders.
- [ ] P5 — Page d'accueil.
- [ ] P6 — Page À propos.
- [ ] P7 — Page Compétences.
- [ ] P8 — Liste des projets.
- [ ] P9 — Détail des projets.
- [ ] P10 — CV et PDF navigateur.
- [ ] P11 — Contact frontend.
- [ ] P12 — Stabilisation.

Ne pas commencer P2 avant une nouvelle instruction explicite.
