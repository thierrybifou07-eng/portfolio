# Registre des tâches

## Dernier module terminé

**P12.7 - Liens publics et dépôts des projets**

Statut : terminé le 8 juin 2026

Commit attendu : `feat(projects): add live demo and repository links`

### Checklist

- [x] Ajouter les libellés bilingues des liens et états publics.
- [x] Valider ces libellés dans le contrat des contenus.
- [x] Créer un composant commun pour les liens externes et états.
- [x] Afficher une démo uniquement pour une URL disponible et valide.
- [x] Afficher le dépôt uniquement lorsqu'une URL existe.
- [x] Afficher un badge traduit pour `coming-soon` et `unavailable`.
- [x] Utiliser l'icône locale de lien externe.
- [x] Sécuriser les liens avec `_blank` et `noopener noreferrer`.
- [x] Migrer l'accueil, la liste et le détail des projets.
- [x] Supprimer l'adaptateur temporaire `links`.
- [x] Vérifier l'absence de lien vide ou cassé.
- [x] Vérifier les variables des thèmes et le comportement responsive.
- [x] Exécuter lint, build et les contrôles Git.

### Comportement livré

- `ProjectExternalLinks` centralise les démos, dépôts et badges.
- Une démo exige `liveStatus: 'available'` et une URL HTTP(S).
- Un dépôt exige une URL HTTP(S), indépendamment du statut de la démo.
- `coming-soon` et `unavailable` produisent un badge traduit.
- Les liens utilisent l'icône SVG locale, `_blank` et
  `noopener noreferrer`.
- L'accueil, la liste et le détail utilisent le même composant.
- L'adaptateur `project.links` a été supprimé.

### Fichiers concernés

- `src/components/projects/ProjectExternalLinks.jsx`
- `src/components/projects/ProjectCard.jsx`
- `src/components/projects/ProjectDetailHero.jsx`
- `src/components/home/FeaturedProjects.jsx`
- `src/pages/HomePage.jsx`
- `src/pages/ProjectsPage.jsx`
- `src/pages/ProjectDetailPage.jsx`
- `src/data/index.js`
- `src/data/contracts.js`
- `src/data/locales/fr/content.js`
- `src/data/locales/en/content.js`
- `src/styles/project-links.css`
- `src/styles/home.css`
- `src/styles/projects.css`
- `src/styles/project-detail.css`
- `AGENTS.md`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Données françaises et anglaises assemblées et normalisées.
- Aucun objet `links`, ancien libellé ou placeholder exécutable restant.
- Rendus isolés `available`, `coming-soon` et `unavailable` validés.
- URL `javascript:` rejetée sans produire de lien.
- Deux liens valides produisent `_blank`, `noopener noreferrer` et l'icône.
- Les données actuelles restent toutes `unavailable` avec des URLs `null`.
- Les styles utilisent uniquement les variables disponibles en clair et sombre.
- Le contrôle Edge headless n'a pas pu démarrer à cause du processus graphique
  de l'environnement; la vérification navigateur transversale reste prévue en
  P12.8.
- Aucune dépendance ajoutée.
- L'avertissement Vite concerne uniquement le chunk PDF différé.

## Dernier module précédent

**P12.6 - Icônes et descripteurs de contact**

Commit : `978709b feat(contact): add accessible social link icons`

## Prochaine tâche planifiée

**P12.8 - Migration et validation transversale**

Statut : verrouillé jusqu'à une nouvelle instruction.

## Backlog verrouillé

- [ ] P12.8 - Migrer les données et valider l'ensemble.
- [ ] P13 - Préparation du déploiement SPA.
