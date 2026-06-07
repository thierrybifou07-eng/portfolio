# Registre des tâches

## Dernier module terminé

**P9 - Détail des projets**

Statut : terminé le 8 juin 2026

Commit : `feat(project-detail): add project case study routes`

### Checklist

- [x] Remplacer le placeholder de la route `/projects/:slug`.
- [x] Résoudre les projets depuis les slugs stables de `src/data`.
- [x] Utiliser exclusivement `usePortfolioData` pour le contenu métier.
- [x] Conserver les titres documentaires traduits.
- [x] Afficher catégorie, statut, résumé et image principale.
- [x] Présenter la problématique et la solution proposée.
- [x] Afficher les fonctionnalités et technologies du projet.
- [x] Ajouter deux captures locales remplaçables avec textes alternatifs.
- [x] Charger l'image héro immédiatement et la galerie en lazy loading.
- [x] Masquer les liens démo et dépôt tant que leurs URL valent `null`.
- [x] Ajouter une navigation précédent/suivant nommée et accessible.
- [x] Gérer proprement le premier et le dernier projet.
- [x] Gérer un slug inconnu avec un retour vers `/projects`.
- [x] Préserver un unique `h1` sur chaque état.
- [x] Réutiliser `Reveal` et respecter la réduction des mouvements.
- [x] Adapter les études de cas aux thèmes clair, sombre et système.
- [x] Vérifier les contenus français et anglais.
- [x] Vérifier mobile, tablette et bureau sans débordement.
- [x] Exécuter lint, build et les contrôles navigateur ciblés.

### Routes validées

- `/projects/arms`
- `/projects/h-market`
- `/projects/bustix`
- `/projects/not-a-project`

La navigation suit l'ordre des projets dans `src/data/shared/projects.js`.
ARMS ne possède pas de précédent et BusTix ne possède pas de suivant.

### Fichiers concernés

- `src/pages/ProjectDetailPage.jsx`
- `src/components/projects/ProjectDetailHero.jsx`
- `src/components/projects/ProjectGallery.jsx`
- `src/components/projects/ProjectNavigation.jsx`
- `src/styles/project-detail.css`
- `src/data/contracts.js`
- `src/data/index.js`
- `src/data/shared/projects.js`
- `src/data/locales/fr/content.js`
- `src/data/locales/en/content.js`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Trois slugs valides et un slug inconnu : validés.
- Titres documentaires français et anglais : validés.
- Un `h1` et cinq `h2` sur chaque étude de cas : validés.
- Image héro eager et deux images de galerie lazy : validées.
- Navigation précédent/suivant : validée aux trois positions.
- Libellé accessible de navigation : validé dans les deux langues.
- Thème clair explicite : validé à 1440 px.
- Thème système résolu sombre : validé à 1024 px.
- Thème sombre explicite et mouvements réduits : validés à 390 px.
- Aucun débordement horizontal aux trois formats.
- `git diff --check` : réussi.

## Modification locale hors module

`src/components/skills/SkillGroupCard.jsx` contient une modification locale
distincte qui n'appartient pas à P9. Elle est conservée telle quelle et exclue
du commit de ce module.

## Prochaine tâche planifiée

**P10 - CV et PDF navigateur**

Statut : en attente d'une nouvelle instruction.

## Backlog verrouillé

- [ ] P10 - CV et PDF navigateur.
- [ ] P11 - Contact frontend.
- [ ] P12 - Stabilisation.
- [ ] P13 - Préparation du déploiement SPA.
