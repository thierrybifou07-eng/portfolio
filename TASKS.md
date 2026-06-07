# Registre des tâches

## Dernier module terminé

**P5 - Page d'accueil animée**

Statut : terminé le 7 juin 2026

Commit : `feat(home): add animated portfolio homepage`

### Checklist

- [x] Remplacer le placeholder de la route `/`.
- [x] Utiliser exclusivement `usePortfolioData` pour le contenu métier.
- [x] Conserver le titre documentaire traduit par i18n.
- [x] Construire un hero responsive avec un unique `h1`.
- [x] Afficher le rôle, l'introduction et la disponibilité fictive.
- [x] Ajouter les CTA vers les projets et la page À propos.
- [x] Afficher le portrait via `SafeImage`.
- [x] Charger le portrait en `eager` avec priorité haute.
- [x] Ajouter trois aperçus de groupes de compétences.
- [x] Afficher les niveaux indicatifs sans surpromesse.
- [x] Ajouter les trois projets vedettes issus des données.
- [x] Charger les images de projets en lazy loading.
- [x] Ajouter catégories, statuts, technologies et liens internes.
- [x] Ajouter un CTA final vers le contact.
- [x] Réutiliser `Reveal` pour les animations d'entrée.
- [x] Respecter `prefers-reduced-motion`.
- [x] Adapter la page aux thèmes clair et sombre.
- [x] Préserver les cibles interactives d'au moins 44 px.
- [x] Vérifier mobile, tablette et bureau sans débordement.
- [x] Vérifier les contenus français et anglais.
- [x] Exécuter lint, build et les contrôles ciblés.

### Fichiers concernés

- `src/pages/HomePage.jsx`
- `src/components/home/HomeHero.jsx`
- `src/components/home/FeaturedSkills.jsx`
- `src/components/home/FeaturedProjects.jsx`
- `src/styles/home.css`
- `src/data/locales/fr/content.js`
- `src/data/locales/en/content.js`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Structure de la page

- Hero : promesse, rôle, introduction, disponibilité, deux CTA et portrait.
- Compétences : trois groupes et trois technologies visibles par groupe.
- Projets : trois concepts vedettes, leurs métadonnées et une route de détail.
- Contact : CTA final vers `/contact`.

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Rendu français et anglais : validé.
- Hiérarchie : un `h1`, trois `h2` et six cartes sémantiques.
- Portrait : `loading="eager"` et `fetchPriority="high"`.
- Projets : trois images en `loading="lazy"`.
- Toutes les images possèdent un texte alternatif.
- Routes internes de l'accueil : validées.
- Thème clair français à 1440 px : validé.
- Thème sombre anglais à 1024 px : validé.
- Thème sombre anglais à 390 px : validé.
- Aucun débordement horizontal aux trois formats.
- Réduction des mouvements détectée au format mobile.
- `git diff --check` : réussi.

## Prochaine tâche proposée

**P6 - Page À propos**

Statut : en attente d'une nouvelle instruction explicite.

## Backlog verrouillé

- [ ] P7 - Page Compétences.
- [ ] P8 - Liste des projets.
- [ ] P9 - Détail des projets.
- [ ] P10 - CV et PDF navigateur.
- [ ] P11 - Contact frontend.
- [ ] P12 - Stabilisation.
- [ ] P13 - Préparation du déploiement SPA.

Ne pas commencer P6 avant une nouvelle instruction explicite.
