# Transmission du projet

## État courant

- Date : 7 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P6 - Page À propos
- Dépendances installées : `react-router`, `motion`, `i18next`,
  `react-i18next`
- Blocage technique connu : aucun

## Page À propos

La route `/about` utilise maintenant les données bilingues de
`usePortfolioData`. Aucun profil, parcours ou texte métier n'est codé
directement dans les composants.

La page contient :

- une introduction avec titre, rôle, résumé et biographie;
- le portrait fictif et ses informations de disponibilité;
- trois objectifs et trois principes de travail;
- une chronologie de deux expériences;
- une chronologie de deux formations;
- un CTA final vers le contact.

## Composants

- `AboutIntroduction` gère la présentation et le portrait.
- `AboutPrinciples` affiche les objectifs et principes numérotés.
- `TimelineSection` rend indifféremment expériences et formations.
- `AboutPage` assemble les sections et fournit les données localisées.

Les animations utilisent `Reveal` et suivent la préférence de réduction des
mouvements.

## Dates

Les valeurs partagées `YYYY-MM` sont affichées avec
`Intl.DateTimeFormat(locale)` :

- français : `janv. 2024`, `mars 2023`, etc.;
- anglais : `Jan 2024`, `Mar 2023`, etc.

Une date de fin absente affiche `Aujourd'hui` ou `Present`. Les dates réelles
restent dans des éléments `time` avec `dateTime`.

## Responsive et accessibilité

- Un seul `h1` est présent.
- Six titres de section structurent la page.
- Les objectifs, principes, expériences et formations utilisent six articles.
- Le portrait est chargé en lazy loading avec un texte alternatif localisé.
- La carte profil reste sticky sur bureau et revient dans le flux sur mobile.
- La chronologie passe de deux colonnes à une colonne.
- Le CTA mesure au moins 44 px.
- Aucun débordement horizontal n'a été détecté.

## Vérifications de P6

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Rendu statique français et anglais validé.
- Contrôle Chrome headless à 1440 x 1000, 1024 x 900 et 390 x 844.
- Thèmes clair et sombre validés.
- Dates et libellés des périodes en cours validés dans les deux langues.
- Portrait lazy, `alt`, sticky desktop et flux mobile validés.
- `prefers-reduced-motion: reduce` détecté et respecté.
- `git diff --check` : réussi.

## Limites restantes

- Le profil, les expériences, les formations et l'image restent fictifs.
- Les pages Compétences, Projets, CV et Contact restent à construire.
- Les destinations externes et le PDF ne sont pas validés.

## Commit de P6

Message : `feat(about): add profile and journey page`

Contenu : introduction, principes, chronologies localisées, CTA, styles
responsive et animations accessibles.

## Prochaine tâche proposée

P7 - Page Compétences. Afficher les groupes, technologies et niveaux
indicatifs à partir des données bilingues. Le module reste verrouillé jusqu'à
une nouvelle instruction explicite.

## Deployment blocker

- replace all fictitious profile, resume and contact data before publishing;
- verify both French and English contents;
- replace profile and project placeholder images;
- validate social links and downloadable resume content.
