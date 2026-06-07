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
├── components/
│   ├── animations/
│   ├── common/
│   ├── layout/
│   ├── projects/
│   ├── resume/
│   └── skills/
├── data/
├── features/
│   └── resume/
├── hooks/
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
- `@react-pdf/renderer` en P10 pour générer le CV côté navigateur.

Ne pas ajouter de bibliothèque d'icônes, Tailwind, TypeScript, gestionnaire
d'état, service de formulaire ou framework de test sans nouvelle validation.
Toute nouvelle dépendance doit documenter le problème résolu, son utilité, les
alternatives, les risques et les fichiers concernés.

## Données et contenu

- Centraliser le contenu éditable dans `src/data`.
- Utiliser des données fictives clairement remplaçables.
- Ne jamais ajouter d'information privée réelle sans validation explicite.
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
- Respecter `prefers-reduced-motion` en CSS.
- Configurer Motion avec `reducedMotion="user"`.
- Éviter les animations permanentes, le parallaxe important et les transitions
  longues ou bloquantes.
- Ne pas ajouter de mode sombre pendant la première version.

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
