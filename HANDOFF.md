# Transmission du projet

## État courant

- Date : 7 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P3.5 - Configuration globale et médias sécurisés
- Dépendances installées : `react-router`, `motion`, `i18next`,
  `react-i18next`
- Blocage technique connu : aucun

## Configuration globale

`src/config/site.js` centralise désormais :

- le nom générique du site, son nom court et son titre par défaut;
- la locale française par défaut et les locales `fr` et `en`;
- les emplacements pour l'email et les liens GitHub et LinkedIn;
- le futur nom du fichier PDF du CV.

L'email et les liens sociaux restent volontairement à `null`. Ils seront
alimentés avec les données bilingues fictives en P4, sans anticiper le contenu
métier.

La configuration alimente déjà :

- les locales et le fallback de l'initialisation i18n;
- le nom interpolé dans l'interface française et anglaise;
- le titre documentaire de secours;
- le nom court affiché dans le header.

## Gestion des images

Les assets sont organisés sous :

- `src/assets/images/profile`;
- `src/assets/images/projects`;
- `src/assets/images/placeholders`.

Chaque dossier contient un SVG local léger et remplaçable. Le placeholder
générique sert de fallback par défaut à `SafeImage`.

## Contrat SafeImage

`src/components/common/SafeImage.jsx` :

- exige que `alt` soit une chaîne, y compris une chaîne vide pour une image
  purement décorative;
- accepte tous les attributs natifs utiles de `<img>`;
- utilise `loading="lazy"` et `decoding="async"` par défaut;
- accepte notamment `loading="eager"` pour une future image hero;
- utilise le fallback local lorsque `src` est absent ou échoue;
- accepte un fallback spécialisé fourni par l'appelant;
- transmet le gestionnaire `onError` éventuel.

## Frontière avec P4

P3.5 ne contient aucune donnée réelle ou fictive de profil, projet,
compétence, formation, parcours, CV ou contact. Les champs de configuration
liés au contact restent vides et les images ajoutées sont uniquement des
placeholders génériques.

P4 reste responsable des véritables structures bilingues sous
`src/data/shared` et `src/data/locales/{fr,en}`.

## Vérifications de P3.5

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Interpolation du nom du site validée dans les deux langues.
- Rendu statique du fallback et des attributs de `SafeImage` validé.
- Obligation du texte alternatif validée.
- Trois SVG valides pour moins de 3 Ko au total.
- `git diff --check` : réussi.

## Commit de P3.5

Message : `feat(media): add site config and safe image handling`

Contenu : configuration globale, conventions de médias, placeholders locaux,
composant `SafeImage` et raccordement des valeurs globales existantes.

## Prochaine tâche proposée

P4 - Données bilingues du portfolio. Créer les contrats de données partagées
et les contenus fictifs français et anglais. Le module reste verrouillé
jusqu'à une nouvelle instruction explicite.

## Deployment blocker

- replace all fictitious profile, resume and contact data before publishing;
- verify both French and English contents;
- replace profile and project placeholder images;
- validate social links and downloadable resume content.
