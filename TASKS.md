# Registre des tâches

## Dernier module terminé

**P8 - Liste des projets**

Statut : terminé le 8 juin 2026

Commit : `feat(projects): add data-driven project listing`

### Checklist

- [x] Remplacer le placeholder de la route `/projects`.
- [x] Utiliser exclusivement `usePortfolioData` pour le contenu métier.
- [x] Conserver le titre documentaire traduit par i18n.
- [x] Construire une introduction avec un unique `h1`.
- [x] Générer les filtres depuis les catégories réellement utilisées.
- [x] Ajouter le filtre global Tous/All.
- [x] Utiliser des boutons accessibles avec `aria-pressed`.
- [x] Ajouter un compteur annoncé avec `aria-live`.
- [x] Gérer le singulier et le pluriel dans les deux langues.
- [x] Afficher ARMS, H-Market et BusTix.
- [x] Afficher catégorie, statut, résumé et technologies.
- [x] Afficher les images via `SafeImage`.
- [x] Conserver le lazy loading des images.
- [x] Ajouter les routes de détail par slug.
- [x] Ne pas implémenter les études de cas réservées à P9.
- [x] Masquer les liens externes dont l'URL vaut `null`.
- [x] Préparer les liens démo et dépôt pour de futures URL valides.
- [x] Ajouter un état vide générique.
- [x] Réutiliser `Reveal` pour les animations d'entrée.
- [x] Respecter `prefers-reduced-motion`.
- [x] Adapter la page aux thèmes clair et sombre.
- [x] Préserver des cibles interactives d'au moins 44 px.
- [x] Vérifier mobile, tablette et bureau sans débordement.
- [x] Vérifier les contenus français et anglais.
- [x] Exécuter lint, build et les contrôles ciblés.

### Filtres

- `all` affiche les trois projets.
- `operations` affiche ARMS.
- `commerce` affiche H-Market.
- `mobility` affiche BusTix.

Les identifiants restent indépendants de la langue; seuls les libellés changent.

### Fichiers concernés

- `src/pages/ProjectsPage.jsx`
- `src/components/projects/ProjectFilters.jsx`
- `src/components/projects/ProjectCard.jsx`
- `src/styles/projects.css`
- `src/data/contracts.js`
- `src/data/index.js`
- `src/data/locales/fr/content.js`
- `src/data/locales/en/content.js`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Rendu français et anglais : validé.
- Quatre filtres et trois cartes : validés.
- États `aria-pressed` : validés.
- Compteurs singulier/pluriel : validés.
- Trois routes de détail : validées.
- Images lazy et textes alternatifs localisés : validés.
- Aucun lien externe rendu avec les URL `null`.
- Filtres et liens : cibles de 44 px minimum.
- Thème clair français à 1440 px : validé.
- Thème sombre anglais à 1024 px : validé.
- Thème sombre français à 390 px : validé.
- Aucun débordement horizontal aux trois formats.
- Réduction des mouvements détectée au format mobile.
- `git diff --check` : réussi.

## Prochaine tâche autorisée

**P9 - Détail des projets**

Statut : autorisé par l'instruction du 8 juin 2026 après commit de P8.

## Backlog verrouillé

- [ ] P10 - CV et PDF navigateur.
- [ ] P11 - Contact frontend.
- [ ] P12 - Stabilisation.
- [ ] P13 - Préparation du déploiement SPA.
