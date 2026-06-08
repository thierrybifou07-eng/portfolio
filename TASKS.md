# Registre des tâches

## Dernier module terminé

**P12.8 - Migration et validation transversale**

Statut : terminé le 8 juin 2026

Commit attendu : `chore(projects): validate previews social links and live demos`

### Checklist

- [x] Définir ARMS en `desktop`, `contain`, `unavailable`.
- [x] Définir H-Market en `desktop`, `contain`, `unavailable`.
- [x] Définir BusTix en `mobile`, `contain`, `coming-soon`.
- [x] Conserver toutes les URLs projet à `null`.
- [x] Conserver GitHub, LinkedIn et WhatsApp masqués sans URL validée.
- [x] Vérifier les aperçus desktop et mobile.
- [x] Vérifier les badges français et anglais.
- [x] Vérifier les thèmes clair et sombre.
- [x] Vérifier clavier, focus et cibles tactiles.
- [x] Vérifier mobile, tablette et bureau.
- [x] Vérifier l'absence de lien vide, cassé ou placeholder.
- [x] Documenter les informations encore manquantes.
- [x] Exécuter lint, build et les contrôles Git.

### Migration livrée

- ARMS : `desktop`, `contain`, `unavailable`.
- H-Market : `desktop`, `contain`, `unavailable`.
- BusTix : `mobile`, `contain`, `coming-soon`.
- Démonstrations et dépôts : toutes les URLs restent `null`.
- Contacts inconnus : GitHub, LinkedIn et WhatsApp restent masqués.

### Fichiers concernés

- `src/data/shared/projects.js`
- `AGENTS.md`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Assemblage des données françaises et anglaises validé.
- Chromium 1280 px : `/projects`, français clair.
- Chromium 390 px : accueil, anglais sombre.
- Chromium 768 px : détail BusTix, français sombre.
- Ratios de scène `16 / 10` et cadre mobile `9 / 16` validés.
- Deux badges indisponibles et un badge bientôt disponible validés.
- Aucun lien externe projet n'est rendu avec les URLs `null`.
- Navigation clavier, sélection, `Escape` et restitution du focus validés.
- Sélection du thème au pointeur et cibles de 44 px validées sur mobile.
- Contact mobile : Email seul visible, sans débordement horizontal.
- Aucune dépendance ajoutée.
- L'avertissement Vite concerne uniquement le chunk PDF différé.

### Informations manquantes

- URLs publiques des démonstrations et dépôts.
- URLs GitHub, LinkedIn et WhatsApp validées.
- Images finales de profil et projets.
- Données personnelles, contact et CV définitifs.

## Dernier module précédent

**P12.7 - Liens publics et dépôts des projets**

Commit : `2b88e23 feat(projects): add live demo and repository links`

## Prochaine tâche planifiée

**P13 - Préparation du déploiement SPA**

Statut : verrouillé par les données fictives et la levée explicite du blocage.

## Backlog verrouillé

- [ ] P13 - Préparation du déploiement SPA.
