# Transmission du projet

## État courant

- Date : 7 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P4 - Données bilingues du portfolio
- Dépendances installées : `react-router`, `motion`, `i18next`,
  `react-i18next`
- Blocage technique connu : aucun

## Sources de données

Les contenus métier sont maintenant séparés en deux couches :

- `src/data/shared` contient les slugs, technologies, niveaux, dates et médias;
- `src/data/locales/{fr,en}` contient tous les textes éditables.

`src/data/index.js` assemble ces sources. Il exporte :

- `getPortfolioData(locale)`;
- `normalizeContentLocale(locale)`;
- les catalogues partagés utiles aux futurs modules.

`src/hooks/usePortfolioData.js` sélectionne automatiquement les données de la
langue active via `react-i18next`.

## Contenu disponible

Chaque locale fournit :

- les textes du futur accueil;
- le profil fictif et sa présentation;
- trois projets fictifs : ARMS, H-Market et BusTix;
- trois groupes de compétences avec niveaux indicatifs;
- deux expériences et deux formations fictives;
- les labels et le résumé du CV;
- les coordonnées et labels du futur contact.

Les pages actuelles restent inchangées. P5 à P11 sont responsables de leur
présentation.

## Contrats importants

Les projets assemblés contiennent les résumés, la problématique, la solution,
les fonctionnalités, les technologies résolues, la catégorie traduite,
l'image, le texte alternatif, l'état vedette, le statut et les liens.

Les liens `demo` et `repository` valent `null` tant que de vraies destinations
n'ont pas été validées.

Les compétences utilisent uniquement :

- `comfortable`;
- `familiar`;
- `exploring`.

Une technologie de projet ne devient pas automatiquement une compétence.

## Validation des données

`src/data/contracts.js` est exécuté lors de l'import de la couche de données.
Il vérifie :

- la parité structurelle complète entre français et anglais;
- la présence des champs essentiels du profil, du CV et du contact;
- l'unicité des slugs;
- les catégories, statuts et textes requis des projets;
- l'existence des technologies référencées;
- la présence des groupes, niveaux, expériences et formations.

Une incohérence arrête immédiatement l'import avec un message ciblé.

## Valeurs fictives à remplacer

- profil : Alex Martin;
- email : `hello@example.com`;
- GitHub : `https://github.com/replace-me`;
- LinkedIn : `https://www.linkedin.com/in/replace-me`;
- expériences, formations et langues;
- images de profil et projets;
- tous les liens de démonstration, dépôts et CV.

Le marqueur global `isPlaceholder` reste à `true`.

## Vérifications de P4

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Assemblage testé via le chargeur SSR de Vite.
- `fr-FR` devient `fr`; `en-US` devient `en`.
- Une locale inconnue retombe sur `fr`.
- Trois projets, trois groupes de compétences, deux expériences et deux
  formations sont assemblés dans chaque langue.
- `git diff --check` : réussi.

## Commit de P4

Message : `feat(data): add bilingual portfolio content`

Contenu : catalogues partagés, textes français et anglais, validateur de
contrat, API d'assemblage et hook lié à la langue active.

## Prochaine tâche proposée

P5 - Page d'accueil animée. Construire le hero, l'image de profil, les
compétences mises en avant, les projets vedettes et les appels à l'action à
partir de `usePortfolioData`. Le module reste verrouillé jusqu'à une nouvelle
instruction explicite.

## Deployment blocker

- replace all fictitious profile, resume and contact data before publishing;
- verify both French and English contents;
- replace profile and project placeholder images;
- validate social links and downloadable resume content.
