# Registre des tâches

## Dernier module terminé

**P4 - Données bilingues du portfolio**

Statut : terminé le 7 juin 2026

Commit : `feat(data): add bilingual portfolio content`

### Checklist

- [x] Créer `src/data/shared`.
- [x] Créer `src/data/locales/fr` et `src/data/locales/en`.
- [x] Séparer les données indépendantes de la langue des textes traduits.
- [x] Définir un catalogue partagé de technologies.
- [x] Définir les niveaux de compétence sans revendiquer une maîtrise globale.
- [x] Définir les dates partagées du parcours et de la formation.
- [x] Définir le contrat stable des projets.
- [x] Ajouter ARMS, H-Market et BusTix comme concepts fictifs.
- [x] Ajouter profil, accueil, compétences, parcours, formation, CV et contact.
- [x] Fournir les mêmes structures en français et en anglais.
- [x] Ajouter un validateur de cohérence bilingue.
- [x] Ajouter `getPortfolioData` avec fallback français.
- [x] Normaliser `fr-FR`, `en-US` et les variantes avec underscore.
- [x] Ajouter `usePortfolioData` pour suivre la langue active.
- [x] Raccorder l'email et les liens sociaux fictifs à `siteConfig`.
- [x] Laisser les liens de démonstration et dépôts de projets à `null`.
- [x] Conserver toutes les pages fonctionnelles pour P5 à P11.
- [x] Exécuter lint, build et les contrôles ciblés.

### Contrat des projets

Chaque projet assemblé expose :

- `slug`, `title`, `shortSummary` et `summary`;
- `problem`, `solution` et `features`;
- `technologyIds` et les objets `technologies` résolus;
- `categoryId` et la catégorie traduite;
- `image`, `imageAlt`, `featured` et `status`;
- `links.demo` et `links.repository`.

### Contrat des compétences

- Groupes partagés : `frontend`, `backend`, `tools`.
- Niveaux partagés : `comfortable`, `familiar`, `exploring`.
- Chaque niveau reçoit un libellé traduit.
- Une technologie présente dans un projet n'est pas automatiquement déclarée
  comme compétence.

### Fichiers concernés

- `src/config/site.js`
- `src/data/contracts.js`
- `src/data/index.js`
- `src/data/shared/profile.js`
- `src/data/shared/projects.js`
- `src/data/shared/skills.js`
- `src/data/shared/technologies.js`
- `src/data/shared/timeline.js`
- `src/data/locales/fr/content.js`
- `src/data/locales/en/content.js`
- `src/hooks/usePortfolioData.js`
- `AGENTS.md`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Validation automatique des sources : réussie.
- Parité de structure français/anglais : validée.
- `fr-FR` normalisé en `fr`.
- `en-US` normalisé en `en`.
- Locale inconnue normalisée vers le fallback `fr`.
- Trois slugs de projets uniques validés.
- Toutes les technologies référencées existent dans le catalogue.
- Trois groupes et onze entrées de compétence validés.
- Deux expériences et deux formations validées par locale.
- Aucun contenu métier ajouté dans les composants JSX.
- `git diff --check` : réussi.

## Prochaine tâche proposée

**P5 - Page d'accueil animée**

Statut : en attente d'une nouvelle instruction explicite.

## Backlog verrouillé

- [ ] P6 - Page À propos.
- [ ] P7 - Page Compétences.
- [ ] P8 - Liste des projets.
- [ ] P9 - Détail des projets.
- [ ] P10 - CV et PDF navigateur.
- [ ] P11 - Contact frontend.
- [ ] P12 - Stabilisation.
- [ ] P13 - Préparation du déploiement SPA.

Ne pas commencer P5 avant une nouvelle instruction explicite.
