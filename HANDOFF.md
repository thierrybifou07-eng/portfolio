# Transmission du projet

## État courant

- Date : 8 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P9 - Détail des projets
- Prochaine tâche planifiée : P10 - CV et PDF navigateur
- Prochaine tâche autorisée : aucune sans nouvelle instruction
- Dépendances installées : `react-router`, `motion`, `i18next`,
  `react-i18next`
- Blocage technique connu : aucun

## Études de cas

La route `/projects/:slug` résout maintenant ARMS, H-Market et BusTix depuis
les données bilingues de `usePortfolioData`. Chaque étude de cas présente :

- la catégorie, le statut, le résumé et l'image principale;
- la problématique et la solution proposée;
- les fonctionnalités et les technologies;
- deux captures locales remplaçables avec textes alternatifs;
- la navigation vers le projet précédent et suivant.

L'image principale est chargée immédiatement. Les captures secondaires
utilisent le lazy loading. Les actions démo et dépôt restent invisibles tant
que leurs URL valent `null`.

## Slug inconnu

Un slug absent des données affiche un état dédié avec :

- un titre documentaire traduit;
- un unique `h1`;
- une explication honnête;
- un bouton de retour vers `/projects`.

Cet état reste distinct de la 404 générale, car la route de projet existe mais
la ressource demandée n'est pas disponible.

## Responsive et accessibilité

- La navigation précédent/suivant utilise un élément `nav` nommé.
- ARMS n'affiche que le projet suivant.
- H-Market affiche le précédent et le suivant.
- BusTix n'affiche que le projet précédent.
- Les images possèdent des dimensions et textes alternatifs.
- Le hero et les grilles autorisent la réduction de largeur des médias.
- Aucun débordement horizontal n'est présent à 1440, 1024 ou 390 px.
- Les animations suivent `prefers-reduced-motion`.

## Vérifications de P9

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Routes ARMS, H-Market et BusTix validées.
- Slug `/projects/not-a-project` validé.
- Contenus et titres documentaires français et anglais validés.
- Thème clair explicite validé à 1440 x 1000.
- Thème système résolu sombre validé à 1024 x 900.
- Thème sombre explicite validé à 390 x 844.
- Réduction des mouvements validée à 390 x 844.
- Image héro eager et deux captures lazy par projet validées.
- Navigation précédent/suivant et libellés accessibles validés.
- `git diff --check` : réussi.

## Modification locale hors P9

`src/components/skills/SkillGroupCard.jsx` est modifié localement en dehors du
périmètre de P9. Cette modification n'est ni annulée ni incluse dans le commit
du module.

## Limites restantes

- Les projets et images restent fictifs.
- Les URL de démo et dépôt restent à valider.
- Le CV et la page Contact restent à construire.
- Les données personnelles doivent être remplacées avant publication.

## Commit de P9

Message : `feat(project-detail): add project case study routes`

Contenu : études de cas bilingues, galerie locale, gestion des slugs inconnus,
navigation précédent/suivant, styles responsive et contrats de données.

## Prochaine tâche planifiée

P10 - CV et PDF navigateur. Installer `@react-pdf/renderer` et construire le CV
bilingue derrière un chargement différé. Cette tâche reste verrouillée jusqu'à
une nouvelle instruction.

## Deployment blocker

- replace all fictitious profile, resume and contact data before publishing;
- verify both French and English contents;
- replace profile and project placeholder images;
- validate social links and downloadable resume content.
