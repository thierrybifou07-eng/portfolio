# Transmission du projet

## État courant

- Date : 8 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P11 - Contact frontend
- Prochaine tâche planifiée : P12 - Stabilisation
- Prochaine tâche autorisée : aucune sans nouvelle instruction
- Dépendances installées : `react-router`, `motion`, `i18next`,
  `react-i18next`, `@react-pdf/renderer`
- Blocage technique connu : aucun

## Page Contact

La route `/contact` utilise maintenant les données bilingues de
`usePortfolioData`. Elle affiche :

- l'email fictif centralisé;
- la localisation et la disponibilité du profil;
- les liens GitHub et LinkedIn centralisés;
- un formulaire nom, email, sujet et message.

Les liens sociaux ouvrent un nouvel onglet et possèdent un complément de
libellé pour les lecteurs d'écran.

## Flux honnête

Le formulaire ne communique avec aucun serveur. Après validation native :

- `Préparer l'email` construit un lien `mailto:` avec sujet et corps encodés;
- `Copier le message` écrit le nom, l'email et le message localement;
- le statut de copie annonce uniquement un succès de copie ou son échec.

Il n'existe aucun message laissant croire que l'email a été envoyé. Le client
mail reste responsable de l'envoi réel.

## Accessibilité et responsive

- Un seul `h1` est présent.
- Les quatre champs possèdent des labels visibles.
- Les champs requis utilisent la validation HTML native.
- Nom et email utilisent `autocomplete`.
- Les champs mesurent au moins 48 px de haut.
- Les boutons et liens sociaux mesurent au moins 44 px.
- Le statut de copie utilise `role="status"`.
- La disposition passe de deux colonnes à une colonne sous 880 px.
- Aucun débordement horizontal n'est présent à 1440 ou 390 px.

## Vérifications de P11

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Validation du formulaire vide réussie.
- Copie exacte validée avec une API Clipboard isolée de test.
- Chemins de succès français et d'échec anglais validés.
- Encodage UTF-8 du `mailto:` validé.
- Liens GitHub et LinkedIn validés.
- Thème clair français validé à 1440 x 1000.
- Thème sombre anglais validé à 390 x 844.
- Réduction des mouvements validée.
- Aucune exception JavaScript détectée.
- `git diff --check` : réussi.

## Modifications locales hors P11

Un renommage distinct de `categoryId` vers `Id` est en cours dans les données
de projets. `src/data/shared/projects.js`, `src/data/index.js` et
`src/data/contracts.js` restent non commités. La modification distincte du
libellé anglais `projectsPage.filtersLabel` reste également non commitée grâce
à une indexation partielle du fichier de locale.

Ces changements ont été rendus syntaxiquement compatibles pour permettre les
validations, mais ils ne font pas partie du commit Contact.

## Limites restantes

- L'email et les liens sociaux sont fictifs.
- Les informations de profil doivent être remplacées avant publication.
- Le formulaire dépend du client mail ou des permissions de copie du navigateur.
- Les contrôles globaux de stabilisation P12 restent à effectuer.

## Commit de P11

Message : `feat(contact): add honest frontend contact flow`

Contenu : coordonnées bilingues, liens sociaux, formulaire accessible,
construction `mailto:`, copie locale, statuts honnêtes et styles responsive.

## Prochaine tâche planifiée

P12 - Stabilisation. Vérifier l'ensemble de l'application : accessibilité,
thèmes, langues, médias, SEO, responsive, performances, animations, contenus et
fallback SPA. Cette tâche reste verrouillée jusqu'à une nouvelle instruction.

## Deployment blocker

- replace all fictitious profile, resume and contact data before publishing;
- verify both French and English contents;
- replace profile and project placeholder images;
- validate social links and downloadable resume content.
