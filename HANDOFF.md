# Transmission du projet

## État courant

- Date : 7 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P7 - Page Compétences
- Dépendances installées : `react-router`, `motion`, `i18next`,
  `react-i18next`
- Blocage technique connu : aucun

## Page Compétences

La route `/skills` utilise maintenant les données bilingues de
`usePortfolioData`. Aucun nom de technologie, niveau ou texte métier n'est
codé directement dans les composants.

La page contient :

- une introduction qui précise la nature indicative des niveaux;
- une légende bilingue des trois niveaux;
- trois catégories de compétences;
- onze technologies déclarées;
- un CTA final vers la liste des projets.

## Échelle des niveaux

`src/data/shared/skills.js` exporte `skillLevelScale` :

- `exploring: 1`;
- `familiar: 2`;
- `comfortable: 3`.

Chaque compétence assemblée reçoit `level`, `levelLabel` et `levelRank`. Le
validateur vérifie que chaque niveau référencé possède un rang entier compris
entre 1 et 3.

Les indicateurs visuels utilisent trois segments qualitatifs. Ils n'emploient
ni pourcentage ni rôle de barre de progression. Chaque indicateur utilise
`role="img"` et un libellé accessible traduit.

## Composants

- `SkillLevelIndicator` rend le niveau qualitatif.
- `SkillLevelLegend` explique l'échelle.
- `SkillGroupCard` affiche une catégorie et ses compétences.
- `SkillsPage` assemble l'introduction, les catégories et le CTA.

Les animations utilisent `Reveal` et suivent la préférence de réduction des
mouvements.

## Responsive et accessibilité

- Un seul `h1` est présent.
- Trois `h2` structurent la légende, les domaines et le CTA.
- Les trois catégories utilisent des `h3` et des articles.
- Les grilles passent de trois à deux puis une colonne.
- Les lignes de compétence passent sur deux lignes au format mobile.
- Le CTA mesure au moins 44 px.
- Aucun débordement horizontal n'a été détecté.

## Vérifications de P7

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Rendu statique français et anglais validé.
- Trois groupes, onze compétences et quatorze indicateurs validés.
- Cohérence entre rangs, segments et libellés validée.
- Aucun pourcentage présent.
- Contrôle Chrome headless à 1440 x 1000, 1024 x 900 et 390 x 844.
- Thèmes clair et sombre validés.
- `prefers-reduced-motion: reduce` détecté et respecté.
- `git diff --check` : réussi.

## Limites restantes

- Les compétences et niveaux restent fictifs.
- La page Projets et les détails de projets restent à construire.
- Les destinations externes et le PDF ne sont pas validés.

## Commit de P7

Message : `feat(skills): add categorized skills page`

Contenu : échelle qualitative, légende, catégories, cartes de compétences,
CTA, styles responsive et animations accessibles.

## Prochaine tâche proposée

P8 - Liste des projets. Construire les cartes complètes, les technologies, les
liens disponibles et le filtre par catégorie à partir des données bilingues.
Le module reste verrouillé jusqu'à une nouvelle instruction explicite.

## Deployment blocker

- replace all fictitious profile, resume and contact data before publishing;
- verify both French and English contents;
- replace profile and project placeholder images;
- validate social links and downloadable resume content.
