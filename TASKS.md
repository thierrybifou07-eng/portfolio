# Registre des tâches

## Dernier module terminé

**P6 - Page À propos**

Statut : terminé le 7 juin 2026

Commit : `feat(about): add profile and journey page`

### Checklist

- [x] Remplacer le placeholder de la route `/about`.
- [x] Utiliser exclusivement `usePortfolioData` pour le contenu métier.
- [x] Conserver le titre documentaire traduit par i18n.
- [x] Construire une présentation avec un unique `h1`.
- [x] Afficher le rôle, le résumé et la biographie.
- [x] Afficher le portrait via `SafeImage`.
- [x] Conserver le lazy loading du portrait hors hero.
- [x] Ajouter les objectifs du profil.
- [x] Ajouter les principes de travail.
- [x] Construire la chronologie du parcours.
- [x] Construire la chronologie de formation.
- [x] Formater les dates selon la langue active.
- [x] Afficher un libellé localisé pour les périodes en cours.
- [x] Ajouter les faits marquants des expériences.
- [x] Ajouter un CTA final vers le contact.
- [x] Réutiliser `Reveal` pour les animations d'entrée.
- [x] Respecter `prefers-reduced-motion`.
- [x] Adapter la page aux thèmes clair et sombre.
- [x] Préserver une cible CTA d'au moins 44 px.
- [x] Vérifier mobile, tablette et bureau sans débordement.
- [x] Vérifier les contenus français et anglais.
- [x] Exécuter lint, build et les contrôles ciblés.

### Fichiers concernés

- `src/pages/AboutPage.jsx`
- `src/components/about/AboutIntroduction.jsx`
- `src/components/about/AboutPrinciples.jsx`
- `src/components/about/TimelineSection.jsx`
- `src/styles/about.css`
- `src/data/index.js`
- `src/data/locales/fr/content.js`
- `src/data/locales/en/content.js`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Structure de la page

- Introduction : promesse, rôle, résumé, biographie et portrait.
- Principes : trois objectifs et trois principes de travail.
- Parcours : deux expériences fictives avec faits marquants.
- Formation : deux entrées fictives.
- Contact : CTA final vers `/contact`.

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Rendu français et anglais : validé.
- Hiérarchie : un `h1`, six `h2`, quatre `h3` et six articles.
- Six balises `time` utilisent les valeurs partagées.
- Dates françaises et anglaises localisées par `Intl.DateTimeFormat`.
- Périodes ouvertes : `Aujourd'hui` ou `Present`.
- Portrait : lazy loading et texte alternatif localisé.
- Carte profil sticky sur bureau et statique sur mobile.
- CTA `/contact` : 44 px de hauteur.
- Thème clair français à 1440 px : validé.
- Thème sombre anglais à 1024 px : validé.
- Thème sombre français à 390 px : validé.
- Aucun débordement horizontal aux trois formats.
- Réduction des mouvements détectée au format mobile.
- `git diff --check` : réussi.

## Prochaine tâche proposée

**P7 - Page Compétences**

Statut : en attente d'une nouvelle instruction explicite.

## Backlog verrouillé

- [ ] P8 - Liste des projets.
- [ ] P9 - Détail des projets.
- [ ] P10 - CV et PDF navigateur.
- [ ] P11 - Contact frontend.
- [ ] P12 - Stabilisation.
- [ ] P13 - Préparation du déploiement SPA.

Ne pas commencer P7 avant une nouvelle instruction explicite.
