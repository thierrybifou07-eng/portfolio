# Registre des tâches

## Dernier module terminé

**P3 — Design system et animations**

Statut : terminé le 7 juin 2026

Commit : `feat(styles): add modern design system`

### Checklist

- [x] Installer `motion`.
- [x] Supprimer les styles applicatifs du template Vite.
- [x] Créer les variables de couleurs, espacements, rayons et ombres.
- [x] Créer les styles globaux et la palette claire unique.
- [x] Créer les styles de boutons et de cartes réutilisables.
- [x] Créer `ButtonLink`.
- [x] Créer les primitives Motion `PageTransition` et `Reveal`.
- [x] Configurer `MotionConfig reducedMotion="user"`.
- [x] Utiliser `LazyMotion` et `m` pour limiter le bundle.
- [x] Ajouter les transitions de pages avec `AnimatePresence`.
- [x] Animer l'apparition du bouton de retour en haut.
- [x] Respecter `prefers-reduced-motion` en CSS et dans Motion.
- [x] Vérifier le rendu bureau/mobile et la 404.
- [x] Exécuter lint, build et contrôle du diff.

### Fichiers concernés

- `package.json`
- `package-lock.json`
- `src/main.jsx`
- `src/App.jsx`
- `src/layouts/MainLayout.jsx`
- `src/components/animations/*.jsx`
- `src/components/common/ButtonLink.jsx`
- `src/components/common/PagePlaceholder.jsx`
- `src/components/layout/BackToTopButton.jsx`
- `src/pages/NotFoundPage.jsx`
- `src/styles/variables.css`
- `src/styles/globals.css`
- `src/styles/animations.css`
- `src/styles/layout.css`
- `src/index.css` supprimé
- `src/App.css` supprimé
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Motion installé en version 12.40.0, sans vulnérabilité npm signalée.
- Bundle principal : 318.54 kB, soit 103.85 kB gzip.
- Chrome headless : rendu clair validé à 1440 px et 500 px.
- DOM : bouton 404, transition de page, révélation et menu fermé présents.

## Prochaine tâche proposée

**P4 — Données éditables et placeholders**

Statut : en attente d'une nouvelle instruction explicite.

## Backlog verrouillé

- [ ] P5 — Page d'accueil.
- [ ] P6 — Page À propos.
- [ ] P7 — Page Compétences.
- [ ] P8 — Liste des projets.
- [ ] P9 — Détail des projets.
- [ ] P10 — CV et PDF navigateur.
- [ ] P11 — Contact frontend.
- [ ] P12 — Stabilisation.

Ne pas commencer P4 avant une nouvelle instruction explicite.
