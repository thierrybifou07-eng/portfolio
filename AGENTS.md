# Guide des agents

## Mission

Construire et maintenir un portfolio professionnel multipage, responsive et
accessible avec React et Vite. Le site reste entièrement frontend, sans
backend, authentification, base de données ni stockage serveur.

## Environnement de référence

- Windows avec Git Bash pour les commandes npm
- Node.js 24.15.0
- npm 11.12.1
- React 19.2.7
- React DOM 19.2.7
- Vite 8.0.16
- JavaScript et JSX uniquement
- Branche de travail actuelle : `feature`

Les versions de `package.json` utilisent des plages compatibles. Consulter
`package-lock.json` ou `npm ls --depth=0` pour connaître les versions
effectivement installées.

## Architecture attendue

```text
src/
├── assets/
│   └── images/
│       ├── placeholders/
│       ├── profile/
│       └── projects/
├── components/
│   ├── animations/
│   ├── common/
│   ├── layout/
│   ├── projects/
│   ├── resume/
│   └── skills/
├── config/
├── contexts/
├── data/
│   ├── locales/
│   │   ├── en/
│   │   └── fr/
│   └── shared/
├── features/
│   └── resume/
├── hooks/
├── i18n/
│   └── locales/
│       ├── en/
│       └── fr/
├── layouts/
├── pages/
├── routes/
├── styles/
├── App.jsx
└── main.jsx
```

- `main.jsx` initialise React et le routeur.
- `App.jsx` délègue la navigation à `AppRoutes`.
- `MainLayout` contient le header, la navigation, l'`Outlet` et le footer.
- Les pages assemblent des composants et lisent leur contenu dans `src/data`.
- Les composants ne contiennent pas d'informations personnelles en dur.
- Les ressources remplaçables sont référencées depuis les fichiers de données.
- `src/config/site.js` centralise l'identité et les valeurs globales du site.
- Le contexte de thème applique `data-theme` au document.
- `src/i18n` contient uniquement les traductions de l'interface.
- `src/data/locales` contient le contenu métier bilingue.
- `src/data/shared` contient les données indépendantes de la langue.

## Routes prévues

| Route | Page |
| --- | --- |
| `/` | Accueil |
| `/about` | À propos |
| `/projects` | Projets |
| `/projects/:slug` | Détail d'un projet |
| `/skills` | Compétences |
| `/resume` | CV et téléchargement PDF |
| `/contact` | Contact frontend |
| `*` | Page 404 |

Le projet utilise le mode déclaratif de `react-router`. Un hébergement statique
devra rediriger les routes inconnues vers `index.html`.

## Dépendances autorisées

Les dépendances sont installées seulement au début du module qui les utilise :

- `react-router` en P1 pour le routage déclaratif ;
- `motion` en P3 pour les animations et la réduction des mouvements ;
- `i18next` et `react-i18next` en P3.3 pour la localisation globale ;
- `@react-pdf/renderer` en P10 pour générer le CV côté navigateur.

Le thème doit utiliser React Context, les variables CSS, `localStorage` et
`prefers-color-scheme`, sans bibliothèque supplémentaire.

Ne pas ajouter de bibliothèque d'icônes, Tailwind, TypeScript, gestionnaire
d'état, service de formulaire ou framework de test sans nouvelle validation.
Toute nouvelle dépendance doit documenter le problème résolu, son utilité, les
alternatives, les risques et les fichiers concernés.

## Données et contenu

- Centraliser le contenu éditable dans `src/data/locales/fr` et
  `src/data/locales/en`.
- Centraliser les technologies et valeurs non traduites dans `src/data/shared`.
- Utiliser des données fictives clairement remplaçables.
- Ne jamais ajouter d'information privée réelle sans validation explicite.
- Conserver les pages comme placeholders minimalistes jusqu'au module P4.
- Faire suivre au CV PDF la langue active ou proposer un choix explicite.
- Les niveaux de compétences sont indicatifs et ne doivent pas transformer
  automatiquement toutes les technologies citées en compétences maîtrisées.
- Le formulaire de contact peut créer un lien `mailto:` ou copier un message,
  mais ne doit jamais simuler un envoi vers un serveur.

## Design et accessibilité

- Utiliser les variables et primitives définies dans `src/styles`.
- Préserver une cible interactive minimale de 44 px.
- Fournir des styles `:focus-visible` perceptibles.
- Utiliser des éléments HTML sémantiques et des libellés accessibles.
- Fournir des textes alternatifs utiles pour les images porteuses de sens.
- Utiliser le composant d'image sécurisé pour les ressources remplaçables.
- Appliquer le lazy loading aux images hors hero lorsque pertinent.
- Vérifier les contrastes dans les thèmes clair et sombre.
- Respecter `prefers-reduced-motion` en CSS.
- Configurer Motion avec `reducedMotion="user"`.
- Éviter les animations permanentes, le parallaxe important et les transitions
  longues ou bloquantes.
- Persister le choix de thème et utiliser la préférence système en l'absence de
  choix enregistré.
- Persister le choix de langue, utiliser la langue du navigateur en l'absence
  de choix enregistré et revenir au français en cas d'échec.

## Médias et configuration

- Centraliser le nom du site, le titre par défaut, la locale par défaut, les
  langues disponibles, les liens sociaux, l'email fictif et le nom du CV dans
  `src/config/site.js`.
- Ranger les images dans `src/assets/images/profile`,
  `src/assets/images/projects` ou `src/assets/images/placeholders`.
- Prévoir un placeholder local pour toute image remplaçable.
- Employer WebP ou AVIF lorsque le gain est pertinent.
- Contrôler les dimensions et le poids des images avant commit.

## Blocage avant déploiement

Ne pas publier tant que les données fictives de profil, CV et contact n'ont pas
été remplacées, que les deux langues n'ont pas été relues, que les images
placeholders n'ont pas été remplacées et que les liens sociaux et le CV
téléchargeable n'ont pas été validés.

## Commandes

Exécuter npm via Git Bash depuis PowerShell :

```powershell
& 'C:\Program Files\Git\bin\bash.exe' -lc "npm install"
& 'C:\Program Files\Git\bin\bash.exe' -lc "npm run lint"
& 'C:\Program Files\Git\bin\bash.exe' -lc "npm run build"
& 'C:\Program Files\Git\bin\bash.exe' -lc "npm run dev"
```

Commandes de contrôle Git :

```bash
git status --short --branch
git diff --check
git diff --stat
```

## Workflow obligatoire

1. Lire `ROADMAP.md`, `TASKS.md` et `HANDOFF.md`.
2. Vérifier la branche et l'état Git.
3. Travailler uniquement sur le module actif dans `TASKS.md`.
4. Garder les modifications ciblées sur ce module.
5. Exécuter les vérifications pertinentes.
6. Mettre à jour `TASKS.md` et `HANDOFF.md`.
7. Créer un commit atomique au format `type(scope): description`.
8. S'arrêter et proposer le module suivant sans le commencer.

Ne jamais pousser vers un dépôt distant sans instruction explicite. Ne jamais
modifier `.env` sans validation. Ne pas annuler des changements existants qui
ne font pas partie de la tâche en cours.

## Définition de terminé

Un module est terminé seulement lorsque :

- ses changements sont ciblés et ses fichiers sont listés ;
- le comportement demandé a été contrôlé ;
- `npm run lint` réussit si applicable ;
- `npm run build` réussit si applicable ;
- `git diff --check` ne signale aucune erreur ;
- `TASKS.md` et `HANDOFF.md` reflètent l'état final ;
- un commit atomique avec description a été créé ;
- le module suivant n'a pas été commencé.
