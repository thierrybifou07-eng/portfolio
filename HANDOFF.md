# Transmission du projet

## État courant

- Date : 8 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P12.6 - Icônes et descripteurs de contact
- Prochaine tâche planifiée : P12.7 - Liens publics et dépôts des projets
- Prochaine tâche autorisée : aucune sans nouvelle instruction
- P13 : verrouillée jusqu'à P12.8 et à la levée du blocage de déploiement
- Dépendance ajoutée : aucune
- Blocage technique connu : aucun

## Audit des préférences

`ThemeControl` et `LanguageControl` utilisent des `<select>` natifs. Le bouton
fermé peut être stylé, mais le menu d'options ouvert reste partiellement rendu
par le navigateur et le système. Cela explique le fond clair, la sélection
système et les différences entre plateformes.

P12.2 créera un composant `PreferenceDropdown` léger sans dépendance. Il
exposera `label`, `value`, `options`, `onChange` et `icon`, et gérera les
flèches, `Home`, `End`, `Enter`, `Space`, `Escape`, le clic extérieur, la
sélection tactile et la restitution du focus.

P12.3 l'intégrera aux contrôles existants sans modifier :

- les valeurs de thème `system`, `light` et `dark`;
- le suivi de `prefers-color-scheme`;
- la persistance dans `localStorage`;
- les langues applicatives `fr` et `en`;
- la normalisation et le fallback français.

## Menu commun livré en P12.2

`PreferenceDropdown` est disponible dans
`src/components/layout/PreferenceDropdown.jsx`. Il n'est pas encore utilisé par
la navbar, afin de conserver P12.3 comme migration atomique séparée.

Le composant reçoit `label`, `value`, `options`, `onChange` et `icon`. Il
utilise un bouton déclencheur, une `listbox`, `aria-activedescendant`, des
options sélectionnables, la navigation par flèches, `Home`, `End`, `Enter`,
`Space`, `Escape`, la fermeture sur pointeur extérieur et la restitution du
focus après sélection ou échappement.

Les styles sont dans `src/styles/preference-dropdown.css`, utilisent les
variables existantes, restent compatibles clair/sombre et conservent les cibles
interactives de 44 px.

## Migration livrée en P12.3

`ThemeControl` et `LanguageControl` utilisent maintenant
`PreferenceDropdown`. Les anciens `<select>` et leurs styles ont été retirés.

- Le thème conserve `system`, `light` et `dark`.
- La langue conserve `fr` et `en`.
- Les mécanismes existants de stockage et de fallback sont inchangés.
- Les libellés complets restent disponibles via `aria-label`.
- `Escape` dans un sous-menu arrête sa propagation afin de ne pas fermer la
  navigation mobile.
- Les contrôles occupent chacun la moitié de la rangée mobile.

## Audit des aperçus projet

Les images de l'accueil, de la liste et de la couverture de détail utilisent
actuellement un ratio horizontal fixe et `object-fit: cover`. Les trois projets
référencent le même placeholder horizontal. La galerie possède son propre
contrat et restera hors de la première migration.

Le contrat prévu est :

```js
{
  previewVariant: 'mobile' | 'desktop',
  previewFit: 'contain' | 'cover',
  liveUrl: string | null,
  repositoryUrl: string | null,
  liveStatus: 'available' | 'unavailable' | 'coming-soon',
}
```

Valeurs par défaut : `desktop`, `contain` et `unavailable`.

`ProjectPreview` enveloppera `SafeImage`, préservera le fallback local et sera
utilisé sur l'accueil, la liste et la couverture de détail. La variante mobile
sera verticale, étroite et centrée; la variante desktop utilisera un ratio
horizontal `16 / 10`.

## Aperçus livrés en P12.5

`ProjectPreview` est maintenant utilisé par l'accueil, la liste des projets et
la couverture de détail.

- La scène garde un ratio `16 / 10` pour stabiliser les grilles.
- La variante desktop utilise toute la scène.
- La variante mobile utilise un cadre interne `9 / 16`, centré et étroit.
- `previewFit` contrôle `contain` ou `cover`.
- `SafeImage` conserve le fallback, l'alt et le chargement différé.
- La couverture détail reste en chargement `eager` avec priorité `high`.
- La galerie reste volontairement inchangée.

Les projets existants utilisent encore tous les défauts `desktop/contain`.
L'attribution de BusTix à `mobile` est réservée à P12.8.

## Contrat livré en P12.4

`src/data/shared/projects.js` centralise maintenant les variantes, ajustements,
états et défauts autorisés. Chaque projet est normalisé à sa création avec :

- `previewVariant: 'desktop'`;
- `previewFit: 'contain'`;
- `liveUrl: null`;
- `repositoryUrl: null`;
- `liveStatus: 'unavailable'`.

`src/data/contracts.js` rejette les valeurs inconnues, les URLs non HTTP(S) et
un statut `available` dépourvu d'URL de démo valide.

Les sources partagées n'exposent plus l'ancien objet `links`.
`src/data/index.js` le recrée temporairement pour les composants existants.
Cet adaptateur doit être supprimé en P12.7.

## Audit des liens externes

- `siteConfig.socialLinks` contient seulement GitHub et LinkedIn.
- Les deux URLs utilisent le placeholder explicite `replace-me`.
- WhatsApp n'est pas configuré.
- L'email `hello@example.com` est fictif.
- Tous les liens de démo et de dépôt projet sont `null`.
- Aucune URL publique validée n'a été trouvée dans les sources ou la
  documentation.
- `public/icons.svg` contient quelques symboles, mais pas tous ceux requis et
  certaines couleurs y sont fixes.

Les futures phases utiliseront des composants SVG locaux avec `currentColor` et
un registre centralisé. Les liens sociaux deviendront des descripteurs
filtrables. Toute URL absente ou placeholder restera masquée et documentée.

## Contact livré en P12.6

`siteConfig.contactLinks` contient maintenant quatre descripteurs gelés :
GitHub, LinkedIn, WhatsApp et Email.

- GitHub, LinkedIn et WhatsApp ont une URL `null`.
- Email utilise le `mailto:` fictif déjà centralisé.
- `ContactDetails` filtre les URLs absentes.
- Les placeholders `replace-me` ont été retirés des données exécutables.
- Les liens externes utilisent `_blank` et `noopener noreferrer`.
- Les liens non externes ne reçoivent pas ces attributs.

Le registre d'icônes contient GitHub, LinkedIn, WhatsApp, Email et lien externe.
Tous les SVG utilisent `currentColor` et sont décoratifs lorsqu'un texte est
présent.

## Découpage validé

- P12.2 : composant de menu accessible terminé.
- P12.3 : migration thème et langue terminée.
- P12.4 : contrat des aperçus et liens projet terminé.
- P12.5 : composant `ProjectPreview` terminé.
- P12.6 : icônes et descripteurs de contact terminé.
- P12.7 : affichage des démos, dépôts et états.
- P12.8 : migration des projets et validation transversale.

Chaque phase produit un commit unique, met à jour `TASKS.md` et `HANDOFF.md`,
passe lint/build, puis s'arrête avant la suivante.

## Vérifications de P12.2

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Compilation JSX ciblée via `transformWithOxc` : réussie.
- `ThemeControl` et `LanguageControl` restent inchangés.
- Aucune dépendance n'a été ajoutée.
- L'avertissement Vite concerne le chunk PDF différé déjà documenté.

## Vérifications de P12.3

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Navigation clavier, sélection, `Escape` et clic extérieur validés.
- Persistance `light`, `dark` et `en` validée.
- Couleurs du menu sombre validées.
- Déclencheurs desktop et mobile d'au moins 44 px.
- Navigation mobile maintenue ouverte après fermeture du sous-menu.
- Aucun `<select>` natif restant dans les contrôles de préférences.

## Vérifications de P12.4

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Chargement Vite ciblé du module de données : réussi.
- Les trois sources sont normalisées à `desktop`, `contain` et `unavailable`.
- Toutes les URLs projet restent à `null`.
- L'adaptateur `links` est présent uniquement sur les projets assemblés.
- Aucune dépendance n'a été ajoutée.

## Vérifications de P12.5

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Ratios desktop `1.6` et mobile interne `0.56` validés.
- `contain` et `cover` validés.
- Accueil, liste et détail utilisent `ProjectPreview`.
- Aucun débordement horizontal à 390 px.
- Couverture détail toujours prioritaire.
- Galerie non modifiée.
- Aucune dépendance n'a été ajoutée.

## Vérifications de P12.6

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Quatre descripteurs et cinq icônes validés.
- Aucun placeholder social dans les données exécutables.
- Français clair, anglais sombre et mobile sombre validés.
- Seul Email est visible tant que les URLs sociales restent inconnues.
- Icône 18 px, cible 45 px et aucun débordement horizontal.
- Chemin externe `_blank` et `noopener noreferrer` validé en rendu isolé.
- Aucune dépendance n'a été ajoutée.

## Vérifications de P12.1

- `git diff --check` : réussi.
- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Seuls les trois fichiers de pilotage sont modifiés.
- Aucun fichier applicatif ou de dépendance n'est modifié.
- L'avertissement Vite concerne le chunk PDF différé déjà documenté.

## Limites et blocage avant déploiement

- Les données de profil, CV et contact restent fictives.
- Les images de profil et projets restent des placeholders.
- Les URLs sociales et projets doivent être fournies et validées.
- Aucun lien placeholder ne doit être publié.
- Aucun déploiement n'est autorisé avant la levée explicite du blocage.

## Prochaine tâche planifiée

P12.7 doit migrer les surfaces projet vers `liveUrl`, `repositoryUrl` et
`liveStatus`, supprimer l'adaptateur `links` et ajouter les états bilingues.
Cette phase reste verrouillée jusqu'à une nouvelle instruction.
