# Transmission du projet

## État courant

- Date : 14 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P12.16 - Favicon G personnalisé
- Prochaine tâche planifiée : P13 - Préparation du déploiement SPA
- Prochaine tâche autorisée : aucune; P13 et le déploiement restent bloqués
- P13 : verrouillée jusqu'à la levée explicite du blocage de déploiement
- Dépendance ajoutée : aucune
- Blocage technique connu : aucun; l'avertissement de taille concerne uniquement
  le moteur PDF chargé après le clic

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

ARMS et H-Market utilisent `desktop/contain`. BusTix utilise
`mobile/contain`. Ces valeurs sont maintenant explicites dans les sources.

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

Les sources partagées et les projets assemblés n'exposent plus l'ancien objet
`links`. Les composants utilisent directement les propriétés canoniques.

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

## Liens projet livrés en P12.7

`ProjectExternalLinks` présente séparément la démo publique, le dépôt et l'état
de disponibilité sur l'accueil, la liste et le détail des projets.

- Une démo est visible uniquement avec `liveStatus: 'available'` et une URL
  HTTP(S) valide.
- Un dépôt est visible uniquement avec une URL HTTP(S) valide.
- `coming-soon` et `unavailable` affichent un badge traduit.
- Les liens utilisent l'icône locale de lien externe, `_blank` et
  `noopener noreferrer`.
- L'ancien adaptateur `project.links` a été supprimé.
- Les projets actuels conservent leurs URLs `null`.

## Migration et validation livrées en P12.8

- ARMS : `desktop`, `contain`, `unavailable`.
- H-Market : `desktop`, `contain`, `unavailable`.
- BusTix : `mobile`, `contain`, `coming-soon`.
- Les URLs de démonstration et de dépôt restent toutes `null`.
- GitHub, LinkedIn et WhatsApp restent masqués sans URL validée.
- Les aperçus, badges, thèmes, langues et interactions ont été validés dans
  Chromium sur mobile, tablette et bureau.

## Audit de galerie réalisé en P12.9

Une galerie existe déjà dans `src/components/projects/ProjectGallery.jsx`.
Elle affiche toutes les images dans une grille statique sous les sections de
l'étude de cas. Le hero conserve séparément un `ProjectPreview` prioritaire.

Le modèle actuel utilise deux tableaux parallèles :

- `galleryImages` dans `src/data/shared/projects.js`;
- `galleryAlts` dans chaque locale.

`src/data/index.js` les assemble en objets `{ src, alt }`. Ces objets ne
possèdent pas encore d'identifiant stable, de mode d'affichage, de stratégie
d'ajustement, de légende ou de miniature dédiée.

`SafeImage` fournit déjà le fallback local et transmet les événements d'image.
Il pourra donc servir à la détection fondée sur `naturalWidth` et
`naturalHeight` sans introduire de dépendance.

L'arborescence locale contient les dossiers vides `arms/`, `h-market/` et
`bustik/`. Git ne suit aucun de ces dossiers. `bustik/` est une faute par rapport
au slug canonique `bustix`. Seul `project-placeholder.svg` est suivi dans le
dossier des projets; `media-placeholder.svg` reste dans les placeholders.

## Stratégie de galerie validée

Les cartes et l'accueil conservent `image`, `imageAlt`, `previewVariant` et
`previewFit`. La galerie de détail utilisera un contrat indépendant :

```js
gallery: [
  {
    id,
    src,
    displayMode: 'auto' | 'mobile' | 'desktop',
    fit: 'contain' | 'cover',
    thumbnailSrc: null,
  },
]
```

Les textes resteront dans les locales :

```js
galleryContent: {
  imageId: {
    alt,
    caption: null,
  },
}
```

L'assembleur produira `project.gallery` en fusionnant les données techniques et
les textes localisés par `id`. Les identifiants seront uniques par projet, la
galerie sera non vide et chaque entrée possédera un `alt` non vide.

Valeurs par défaut : `displayMode: 'auto'`, `fit: 'contain'`,
`thumbnailSrc: null` et `caption: null`. En mode `auto`, un ratio naturel
largeur/hauteur inférieur à `0.9` sera présenté comme mobile; toute valeur
explicite aura priorité.

Le composant `ProjectGallery` existant sera réécrit avec une seule image
principale, des miniatures sous forme de boutons, un état actif annoncé et une
navigation par clic, tactile, `Enter`, `Space`, `ArrowLeft` et `ArrowRight`.
Les contrôles multiples seront absents avec une seule image. Aucun défilement
automatique ni package supplémentaire ne sera ajouté.

La galerie remplacera le `ProjectPreview` du hero en P12.12. L'appel statique
situé plus bas dans `ProjectDetailPage` sera retiré au même moment afin d'éviter
la duplication. L'accueil et les cartes resteront inchangés.

P12.13 créera les dossiers suivis `arms/`, `h-market/` et `bustix/`, corrigera
le dossier fautif `bustik/` s'il existe encore et conservera les placeholders
partagés sans les dupliquer. Aucune fausse capture ne sera créée.

## Modèle de galerie livré en P12.10

`src/data/shared/projects.js` expose maintenant :

- `projectGalleryDisplayModes` pour `auto`, `mobile` et `desktop`;
- `projectGalleryFits` pour `contain` et `cover`;
- `projectGalleryDefaults` avec `auto`, `contain` et `thumbnailSrc: null`.

Chaque projet possède une galerie technique gelée avec deux entrées identifiées.
Les textes précédemment stockés dans `galleryAlts` sont conservés dans
`galleryContent`, indexés par les mêmes identifiants dans les deux locales.
Toutes les légendes restent `null` afin de ne pas inventer de contenu.

L'assembleur fusionne chaque entrée technique avec son contenu localisé et
continue d'exposer `project.gallery`, ce qui maintient la compatibilité du
composant statique actuel. Les propriétés d'aperçu des cartes et de l'accueil
restent inchangées.

Le contrat vérifie désormais :

- une galerie non vide;
- des identifiants uniques par projet;
- un `src` non vide;
- les valeurs autorisées de `displayMode` et `fit`;
- une miniature `null` ou non vide;
- une correspondance exacte des identifiants localisés;
- un `alt` non vide et une légende `null` ou non vide.

## Galerie interactive livrée en P12.11

`ProjectGallery` est maintenant une galerie interactive réutilisable à son
emplacement historique sous l'étude de cas. Son déplacement dans le hero reste
réservé à P12.12.

- Une seule image principale est présente dans le DOM.
- La première entrée est sélectionnée par défaut.
- La détection automatique utilise `naturalWidth / naturalHeight < 0.9`.
- Les valeurs explicites `mobile` et `desktop` restent prioritaires.
- La scène utilise `16 / 10`; le cadre mobile utilise `9 / 16`.
- `contain` et `cover` pilotent `object-fit`.
- Les miniatures utilisent `thumbnailSrc ?? src` dans des boutons accessibles.
- L'état actif combine bordure, coche, `aria-current` et `aria-pressed`.
- Les flèches gauche/droite, clic, tactile, précédent et suivant bouclent.
- Le focus suit la sélection lorsque la navigation part d'une miniature.
- Le compteur visuel est complété par une zone `aria-live`.
- Les contrôles multiples sont absents avec une seule image.
- Une galerie vide affiche le fallback de `SafeImage`.
- L'image principale est eager; les miniatures sont lazy.
- Les styles utilisent les variables des deux thèmes et reduced motion.

## Découpage validé

- P12.2 : composant de menu accessible terminé.
- P12.3 : migration thème et langue terminée.
- P12.4 : contrat des aperçus et liens projet terminé.
- P12.5 : composant `ProjectPreview` terminé.
- P12.6 : icônes et descripteurs de contact terminé.
- P12.7 : affichage des démos, dépôts et états.
- P12.8 : migration des projets et validation transversale.
- P12.9 : planification de la galerie multi-images.
- P12.10 : contrat structuré et assemblage bilingue.
- P12.11 : galerie interactive accessible.
- P12.12 : intégration dans le hero des détails.
- P12.13 : organisation des assets par slug.
- P12.14 : validation et stabilisation des galeries.

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

## Vérifications de P12.7

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Assemblage français et anglais validé.
- Aucun adaptateur `links` ou ancien libellé restant.
- Rendus isolés des états `available`, `coming-soon` et `unavailable` validés.
- URL non HTTP(S) rejetée sans lien.
- `_blank`, `noopener noreferrer` et icône locale validés.
- Variables CSS clair/sombre et réduction des mouvements conservées.
- Edge headless n'a pas pu démarrer dans le bac à sable à cause de son
  processus graphique; la matrice Chromium a ensuite réussi hors bac à sable
  en P12.8.
- Aucune dépendance n'a été ajoutée.

## Vérifications de P12.8

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Données assemblées validées en français et en anglais.
- `/projects` validé à 1280 px en français clair.
- Accueil validé à 390 px en anglais sombre.
- Détail BusTix validé à 768 px en français sombre.
- Scènes `16 / 10`, cadre mobile `9 / 16` et `contain` validés.
- Badges `unavailable` et `coming-soon` validés dans les deux langues.
- Aucun lien projet rendu avec les URLs `null`.
- Clavier, `Escape`, sélection et restitution du focus validés.
- Pointeur mobile et cibles interactives de 44 px validés.
- Contact mobile sans débordement; seul Email reste visible.
- Aucune dépendance n'a été ajoutée.

## Vérifications de P12.9

- `git diff --check` : réussi.
- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Seuls les trois fichiers de pilotage sont modifiés.
- Aucun fichier applicatif, asset ou manifeste de dépendances n'est modifié.
- L'avertissement Vite concerne uniquement le chunk PDF différé.

## Vérifications de P12.10

- `git diff --check` : réussi.
- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Trois projets et six entrées assemblés en français et en anglais.
- Défauts `auto`, `contain`, `thumbnailSrc: null` et `caption: null` validés.
- Identifiants uniques et identiques entre les locales.
- Compatibilité des propriétés d'aperçu existantes validée.
- Aucun ancien tableau `galleryImages` ou `galleryAlts` restant.
- Aucun composant, style, asset ou package modifié.
- L'avertissement Vite concerne uniquement le chunk PDF différé.

## Vérifications de P12.11

- `git diff --check` : réussi.
- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Détection automatique, seuil `0.9` et overrides explicites validés.
- Rendus isolés multiple, unique et vide validés.
- ARMS validé à 1280 px en français clair.
- H-Market validé à 768 px en anglais sombre.
- BusTix validé à 390 px en français sombre.
- Clic, flèches, bouclage, focus, boutons et `aria-live` validés.
- Une seule image principale, lazy/eager et cibles de 44 px validés.
- Aucun débordement horizontal ni dépendance ajoutée.

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

## Intégration livrée en P12.12

`ProjectGallery` remplace désormais `ProjectPreview` dans
`ProjectDetailHero`. Son ancien appel inférieur a été supprimé de
`ProjectDetailPage`, ce qui élimine la duplication sans modifier les études de
cas, fonctionnalités, technologies, liens externes ou navigation entre projets.

La grille conserve deux colonnes sur bureau et une pile introduction puis
galerie sous 880 px. `ProjectPreview` reste utilisé uniquement sur l'accueil et
les cartes projet.

## Vérifications de P12.12

- `git diff --check` : réussi.
- `npm run lint` : réussi.
- `npm run build` : réussi avec l'avertissement PDF connu.
- Chromium 1280 px : hero à deux colonnes et galerie unique validés.
- Chromium 500 px : pile responsive, contrôles et absence de débordement
  validés.
- Le lancement Chromium à 390 px est recadré par sa largeur interne minimale;
  les règles CSS mobiles restent actives sous 640 px.

## Organisation livrée en P12.13

Les dossiers suivis `src/assets/images/projects/arms/`,
`src/assets/images/projects/h-market/` et
`src/assets/images/projects/bustix/` contiennent chacun un `.gitkeep`. Le
dossier vide fautif `bustik/` a été supprimé après vérification de son chemin et
de son contenu.

Les placeholders partagés restent centralisés dans
`project-placeholder.svg` et `media-placeholder.svg`; aucun duplicata ni
fausse capture n'a été ajouté.

## Captures encore manquantes

- ARMS : `overview` et `requests`.
- H-Market : `catalog` et `checkout`.
- BusTix : `search` et `seat-selection`.

Ces valeurs correspondent aux identifiants du contrat de galerie. Les noms et
formats de fichiers définitifs dépendront des captures réellement fournies.

## Vérifications de P12.13

- `git diff --check` : réussi.
- `npm run lint` : réussi.
- `npm run build` : réussi avec l'avertissement PDF connu.
- Arborescence canonique et `.gitkeep` contrôlés.
- Imports des deux placeholders partagés inchangés.
- Aucun package, contenu métier, URL ou asset inventé.

## Validation livrée en P12.14

La matrice automatisée Chromium a couvert les trois projets en français et en
anglais, les thèmes clair et sombre, ainsi que les largeurs 1280, 820 et
390 px. Chaque scénario conserve une galerie unique dans le hero, une image
principale, deux miniatures, un seul état actif, des cibles de 44 px et aucun
débordement horizontal.

Le clic, le bouclage avec `ArrowRight`, l'activation native avec `Enter` et
`Space`, les libellés bilingues, `aria-current`, `aria-pressed` et `aria-live`
ont été validés. `html[lang]` et `html[data-theme]` correspondent aux
préférences sauvegardées.

L'image principale reste eager et les miniatures lazy. Les placeholders
paysage actuels font correctement résoudre `auto` vers `desktop`. Sept
contrôles unitaires ciblés valident le seuil portrait `< 0.9`, le paysage et la
priorité des modes explicites.

## Limites après P12.14

- Les captures réelles `overview`, `requests`, `catalog`, `checkout`, `search`
  et `seat-selection` manquent toujours.
- Les placeholders partagés restent visibles en attendant ces fichiers.
- Les données personnelles, URLs sociales et CV restent fictifs ou absents.
- P13 et tout déploiement restent interdits sans levée explicite du blocage.

## Prochaine tâche planifiée

P13 concerne la documentation et la configuration du déploiement SPA. Elle
reste verrouillée jusqu'au remplacement des données et médias fictifs et à une
instruction explicite levant le blocage de déploiement.

## Fermeture extérieure livrée en P12.15

Le hook `useOutsideInteraction` centralise une écoute `pointerdown` en phase de
capture. Il utilise `event.composedPath()` lorsque disponible, puis
`element.contains(event.target)` comme fallback. Les navigateurs dépourvus de
Pointer Events reçoivent les écouteurs `mousedown` et `touchstart`.

`PreferenceDropdown` ferme désormais les menus thème et langue sans forcer le
focus lors d'une interaction extérieure. `Header` considère le bouton
hamburger et la navigation comme zones intérieures, puis ferme le panneau pour
toute interaction extérieure. Les événements restent passifs et ne bloquent
jamais la cible touchée.

La sélection d'une préférence conserve la navbar mobile ouverte. `Escape` dans
un dropdown arrête toujours sa propagation; un second `Escape` ferme ensuite
la navbar et restitue le focus au bouton hamburger.

## Vérifications de P12.15

- `git diff --check` : réussi.
- ESLint ciblé P12.15 : réussi.
- `npm run build` : réussi avec l'avertissement PDF connu.
- Souris, toucher et stylet simulé validés sous Chromium.
- Passage thème vers langue : un seul dropdown reste ouvert.
- Interaction dans le menu : aucune fermeture prématurée.
- Interaction extérieure : aucun `preventDefault`.
- Mobile 390 px : fermeture du panneau et des dropdowns validée.
- Fallback sans Pointer Events : `touchstart` et `mousedown` validés.
- Aucun serveur ou script temporaire restant.

`npm run lint` a également été exécuté. Il reste en échec sur deux imports
inutilisés préexistants à `HEAD` dans `src/data/shared/projects.js` :
`armsDashboardAdminPage` et `armsLoginPage`. Les fichiers P12.15 passent
ESLint et ces imports hors périmètre n'ont pas été modifiés.

La suppression locale de
`src/assets/images/projects/h-market/.gitkeep` préexiste à cette phase et doit
rester hors du commit P12.15.

## Favicon personnalisé livré en P12.16

`public/favicon.svg` ne contient plus le visuel Vite. Il affiche maintenant un
G blanc dessiné avec un tracé vectoriel dans un carré arrondi de 64 px. Le fond
utilise un dégradé de `#5b5ce2` vers `#0f9f8f`, cohérent avec les couleurs
principales du portfolio.

La référence de `index.html` conserve le fichier `/favicon.svg` avec le
paramètre de version `?v=2` afin d'éviter que le cache du navigateur conserve
l'ancien favicon. Le logo `GB.` du header et les autres assets restent
inchangés.

## Vérifications de P12.16

- SVG autonome avec `viewBox` 64 x 64 et sans police externe.
- Lisibilité validée avec des rendus Chromium à 16, 32 et 64 px.
- Contraste du G blanc validé sur les thèmes clair et sombre.
- `git diff --check` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Le build contient `favicon.svg` et la référence `/favicon.svg?v=2`.
- `npm run lint` : exécuté, mais reste bloqué par
  `armsDashboardAdminPage` et `armsLoginPage`, deux imports inutilisés
  préexistants dans `src/data/shared/projects.js`.
- Aucun package ou composant applicatif ajouté.
