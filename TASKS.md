# Registre des tâches

## Dernier module terminé

**P2 — Layout responsive partagé**

Statut : terminé le 7 juin 2026

Commit : `feat(layout): add responsive portfolio shell`

### Checklist

- [x] Créer `MainLayout` avec header, contenu principal et footer.
- [x] Imbriquer les routes sous le layout avec `Outlet`.
- [x] Créer une navigation desktop avec liens actifs.
- [x] Créer un menu mobile contrôlé par un bouton accessible.
- [x] Fermer le menu après navigation et avec la touche Échap.
- [x] Ajouter un lien d'évitement vers le contenu principal.
- [x] Ajouter un footer responsive avec navigation secondaire.
- [x] Ajouter un bouton de retour en haut.
- [x] Respecter `prefers-reduced-motion` pour le défilement.
- [x] Revenir en haut lors d'un changement de route.
- [x] Ajouter les styles structurels responsive temporaires.
- [x] Vérifier lint, build, DOM rendu et captures bureau/mobile.

### Fichiers concernés

- `src/routes/AppRoutes.jsx`
- `src/layouts/MainLayout.jsx`
- `src/components/layout/Header.jsx`
- `src/components/layout/Navbar.jsx`
- `src/components/layout/Footer.jsx`
- `src/components/layout/BackToTopButton.jsx`
- `src/styles/layout.css`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Chrome headless : layout vérifié à 1440 px et 500 px.
- Le lien actif `Projets`, le footer et le bouton de retour sont rendus.
- Le menu mobile est fermé initialement avec `aria-expanded="false"`.
- L'interaction clavier Échap et la fermeture après navigation sont couvertes
  par les gestionnaires du header.

## Prochaine tâche proposée

**P3 — Design system et animations**

Statut : en attente d'une nouvelle instruction explicite.

## Backlog verrouillé

- [ ] P4 — Données éditables et placeholders.
- [ ] P5 — Page d'accueil.
- [ ] P6 — Page À propos.
- [ ] P7 — Page Compétences.
- [ ] P8 — Liste des projets.
- [ ] P9 — Détail des projets.
- [ ] P10 — CV et PDF navigateur.
- [ ] P11 — Contact frontend.
- [ ] P12 — Stabilisation.

Ne pas commencer P3 avant une nouvelle instruction explicite.
