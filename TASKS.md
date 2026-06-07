# Registre des tâches

## Dernier module terminé

**P7 - Page Compétences**

Statut : terminé le 7 juin 2026

Commit : `feat(skills): add categorized skills page`

### Checklist

- [x] Remplacer le placeholder de la route `/skills`.
- [x] Utiliser exclusivement `usePortfolioData` pour le contenu métier.
- [x] Conserver le titre documentaire traduit par i18n.
- [x] Construire une introduction avec un unique `h1`.
- [x] Expliquer que les niveaux sont indicatifs et évolutifs.
- [x] Définir une échelle partagée à trois niveaux.
- [x] Conserver les niveaux modifiables dans `src/data/shared/skills.js`.
- [x] Ajouter une légende bilingue.
- [x] Afficher les catégories Frontend, Backend et Outils.
- [x] Afficher les onze compétences déclarées.
- [x] Ne pas ajouter automatiquement les technologies de projets.
- [x] Utiliser des indicateurs qualitatifs sans pourcentage.
- [x] Fournir un libellé accessible à chaque indicateur.
- [x] Valider les rangs de niveau dans le contrat de données.
- [x] Ajouter un CTA final vers les projets.
- [x] Réutiliser `Reveal` pour les animations d'entrée.
- [x] Respecter `prefers-reduced-motion`.
- [x] Adapter la page aux thèmes clair et sombre.
- [x] Préserver une cible CTA d'au moins 44 px.
- [x] Vérifier mobile, tablette et bureau sans débordement.
- [x] Vérifier les contenus français et anglais.
- [x] Exécuter lint, build et les contrôles ciblés.

### Échelle qualitative

- `exploring` : rang 1, en apprentissage.
- `familiar` : rang 2, pratique régulière.
- `comfortable` : rang 3, à l'aise.

Les trois segments représentent uniquement cet ordre qualitatif. Ils ne sont
pas des pourcentages et ne prétendent pas mesurer une expertise absolue.

### Fichiers concernés

- `src/pages/SkillsPage.jsx`
- `src/components/skills/SkillLevelIndicator.jsx`
- `src/components/skills/SkillLevelLegend.jsx`
- `src/components/skills/SkillGroupCard.jsx`
- `src/styles/skills.css`
- `src/data/shared/skills.js`
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
- Trois catégories et onze compétences : validées.
- Trois niveaux ordonnés 1, 2 et 3 : validés.
- Quatorze indicateurs accessibles, légende comprise.
- Aucun pourcentage dans la page.
- Hiérarchie : un `h1`, trois `h2`, trois `h3` et trois articles.
- CTA `/projects` : 44 px de hauteur.
- Thème clair français à 1440 px : validé.
- Thème sombre anglais à 1024 px : validé.
- Thème sombre français à 390 px : validé.
- Aucun débordement horizontal aux trois formats.
- Réduction des mouvements détectée au format mobile.
- `git diff --check` : réussi.

## Prochaine tâche proposée

**P8 - Liste des projets**

Statut : en attente d'une nouvelle instruction explicite.

## Backlog verrouillé

- [ ] P9 - Détail des projets.
- [ ] P10 - CV et PDF navigateur.
- [ ] P11 - Contact frontend.
- [ ] P12 - Stabilisation.
- [ ] P13 - Préparation du déploiement SPA.

Ne pas commencer P8 avant une nouvelle instruction explicite.
