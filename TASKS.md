# Registre des tâches

## Dernier module terminé

**P12.16 - Favicon G personnalisé**

Statut : terminé le 14 juin 2026

Commit attendu : `feat(brand): add custom G favicon`

### Checklist

- [x] Remplacer le visuel Vite dans `public/favicon.svg`.
- [x] Créer un monogramme G vectoriel sans police ni dépendance.
- [x] Utiliser le dégradé violet `#5b5ce2` vers turquoise `#0f9f8f`.
- [x] Conserver un contraste net sur fond clair et sombre.
- [x] Ajouter une version de cache à la référence du favicon.
- [x] Contrôler le rendu aux formats 16, 32 et 64 px.
- [x] Exécuter `git diff --check`, lint, build et le contrôle Git.
- [x] Mettre à jour le pilotage et créer le commit atomique.

### Comportement livré

- L'onglet du navigateur utilise un G blanc dans un carré arrondi.
- Le fond reprend le dégradé violet-turquoise de l'identité du portfolio.
- Le tracé reste lisible aux petites tailles et ne dépend d'aucune police.
- Le logo `GB.` du header reste inchangé.

### Vérifications

- Rendus Chromium headless à 16, 32 et 64 px : validés.
- `git diff --check` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Le build contient `favicon.svg` et la référence `/favicon.svg?v=2`.
- `npm run lint` : exécuté, mais toujours bloqué par les deux imports ARMS
  inutilisés préexistants dans `src/data/shared/projects.js`.
- Aucun package ou composant applicatif ajouté.

### Fichiers concernés

- `public/favicon.svg`
- `index.html`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

## Dernier module précédent

**P12.15 - Fermeture extérieure des menus navbar**

Statut : terminé le 9 juin 2026

Commit attendu : `fix(navbar): close menus on outside interaction`

### Checklist

- [x] Ajouter un hook partagé de détection des interactions extérieures.
- [x] Utiliser `pointerdown` en capture avec fallback souris et tactile.
- [x] Fermer les dropdowns thème/langue sans restaurer le focus.
- [x] Fermer le panneau hamburger hors bouton et navigation.
- [x] Préserver les séquences `Escape`, sélection et navigation existantes.
- [x] Tester souris, tactile, stylet simulé, clavier et attributs ARIA.
- [x] Exécuter `git diff --check`, lint, build et le contrôle Git.
- [x] Exclure la suppression existante de `h-market/.gitkeep` du commit.
- [x] Mettre à jour le pilotage et créer le commit atomique.

### Comportement livré

- Les dropdowns thème et langue se ferment au `pointerdown` extérieur en phase
  de capture.
- Le panneau hamburger se ferme hors de son bouton et de la navigation.
- Les navigateurs sans Pointer Events utilisent `mousedown` et `touchstart`.
- `composedPath()` couvre les chemins d'événements composés; `contains()` sert
  de fallback.
- Aucun événement extérieur n'est bloqué ou annulé.
- Un clic sur l'autre dropdown ferme le premier avant d'ouvrir le second.
- Une sélection de préférence conserve le panneau mobile ouvert.
- Le premier `Escape` ferme le dropdown; le second ferme le panneau mobile et
  restitue le focus au bouton hamburger.

### Vérifications

- `git diff --check` : réussi.
- ESLint ciblé sur les quatre fichiers applicatifs P12.15 : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Chromium bureau : souris et stylet simulé validés.
- Chromium 390 px : toucher extérieur, sélection et double `Escape` validés.
- Fallback sans `PointerEvent` : `touchstart` et `mousedown` validés.
- Le lint global a été exécuté mais reste bloqué par deux imports ARMS inutilisés
  déjà présents à `HEAD` dans `src/data/shared/projects.js`.
- Aucun package ou style ajouté.
- La suppression existante de `h-market/.gitkeep` reste hors du commit.

### Fichiers concernés

- `src/hooks/useOutsideInteraction.js`
- `src/components/layout/PreferenceDropdown.jsx`
- `src/components/layout/Header.jsx`
- `src/components/layout/Navbar.jsx`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

## Dernier module précédent

**P12.14 - Validation des galeries multi-images**

Statut : terminé le 8 juin 2026

Commit attendu : `chore(projects): validate multi-image galleries`

### Checklist

- [x] Valider les contrats et l'assemblage des trois galeries.
- [x] Vérifier les six textes alternatifs en français et en anglais.
- [x] Vérifier `auto`, les modes explicites et les valeurs `contain`/`cover`.
- [x] Tester clic, précédent/suivant, flèches et état actif annoncé.
- [x] Tester les thèmes clair et sombre.
- [x] Tester les langues française et anglaise et `html[lang]`.
- [x] Tester bureau, tablette et mobile sans débordement.
- [x] Vérifier les placeholders, eager/lazy et l'absence de duplication.
- [x] Exécuter `git diff --check`, lint, build et le contrôle Git.
- [x] Documenter les limites restantes et créer le commit atomique.

### Matrice validée

- ARMS : français clair à 1280 px; anglais sombre à 820 px.
- H-Market : français clair à 1280 px; anglais sombre à 820 px.
- BusTix : français sombre à 390 px; anglais clair à 820 px.

Pour chaque scénario : une galerie dans le hero, une image principale, deux
miniatures, un seul état actif, aucun débordement horizontal et des contrôles
d'au moins 44 px.

### Interactions validées

- Clic suivant : passage de `1 / 2` à `2 / 2`.
- `ArrowRight` : bouclage de `2 / 2` à `1 / 2`.
- `Enter` : sélection de la seconde miniature.
- `Space` : sélection de la première miniature.
- `aria-current`, `aria-pressed`, libellés bilingues et zone `aria-live`.

### Chargement et affichage

- Image principale : `loading="eager"`.
- Miniatures : `loading="lazy"`.
- Les placeholders paysage résolvent actuellement `auto` vers `desktop`.
- Détection portrait, seuil `0.9` et priorités explicites : 7 contrôles réussis.
- `contain` est appliqué aux données actuelles; les sélecteurs `cover` restent
  présents et le contrat accepte uniquement ces deux valeurs.

### Limites restantes

- Les six vraies captures projet ne sont pas encore fournies.
- Les placeholders partagés restent donc visibles.
- P13 et tout déploiement restent bloqués.

### Fichiers concernés

- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`
- fichiers applicatifs uniquement si une anomalie est confirmée

## Dernier module précédent

**P12.13 - Organisation des assets par slug**

Statut : terminé le 8 juin 2026

Commit attendu : `chore(media): organize project gallery assets`

### Checklist

- [x] Créer les dossiers suivis `arms/`, `h-market/` et `bustix/`.
- [x] Ajouter un `.gitkeep` dans chaque dossier en attente de captures.
- [x] Supprimer le dossier vide fautif `bustik/`.
- [x] Conserver les placeholders partagés sans duplication.
- [x] Documenter les captures manquantes pour chaque projet.
- [x] Vérifier que les imports d'images existants restent inchangés.
- [x] Exécuter `git diff --check`, lint, build et le contrôle Git.
- [x] Mettre à jour le pilotage et créer le commit atomique.

### Captures manquantes

- ARMS : `overview` et `requests`.
- H-Market : `catalog` et `checkout`.
- BusTix : `search` et `seat-selection`.

Les noms ci-dessus sont les identifiants de galerie existants, pas des fichiers
inventés. Les chemins définitifs seront renseignés quand les vraies captures
seront fournies.

### Vérifications

- `git diff --check` : réussi.
- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Dossiers suivis : `arms/`, `h-market/` et `bustix/`.
- Le dossier vide fautif `bustik/` a été supprimé.
- Les imports `projectPlaceholder` et `mediaPlaceholder` restent inchangés.
- Aucun asset fictif, package ou duplication de placeholder ajouté.
- L'avertissement Vite concerne uniquement le chunk PDF différé.

### Fichiers concernés

- `src/assets/images/projects/arms/.gitkeep`
- `src/assets/images/projects/h-market/.gitkeep`
- `src/assets/images/projects/bustix/.gitkeep`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

## Dernier module précédent

**P12.12 - Intégration de la galerie dans le hero**

Statut : terminé le 8 juin 2026

Commit attendu : `feat(project-detail): integrate multi-image project gallery`

### Checklist

- [x] Remplacer le `ProjectPreview` du hero par `ProjectGallery`.
- [x] Transmettre les images et libellés bilingues existants.
- [x] Retirer l'appel inférieur de `ProjectGallery`.
- [x] Préserver l'introduction, les liens externes et les sections de l'étude.
- [x] Adapter la grille du hero aux formats bureau, tablette et mobile.
- [x] Confirmer que l'accueil et les cartes utilisent toujours `ProjectPreview`.
- [x] Exécuter `git diff --check`, lint, build et les validations ciblées.
- [x] Mettre à jour le pilotage et créer le commit atomique.

### Comportement livré

- `ProjectGallery` remplace l'aperçu unique dans `ProjectDetailHero`.
- La galerie n'est plus rendue une seconde fois sous les sections de détail.
- L'introduction et la galerie restent côte à côte sur bureau.
- L'introduction précède la galerie dans la pile tablette et mobile.
- Les cartes et les projets vedettes continuent d'utiliser `ProjectPreview`.

### Vérifications

- `git diff --check` : réussi.
- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Rendu Chromium bureau 1280 px validé.
- Rendu Chromium responsive 500 px validé sans débordement.
- Le seuil 390 px reste couvert par les règles CSS `max-width: 640px`.
- Une seule galerie est présente sur la page détail.
- Aucun package ajouté.
- L'avertissement Vite concerne uniquement le chunk PDF différé.

### Fichiers concernés

- `src/components/projects/ProjectDetailHero.jsx`
- `src/pages/ProjectDetailPage.jsx`
- `src/styles/project-detail.css`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

## Dernier module précédent

**P12.11 - Galerie interactive accessible**

Statut : terminé le 8 juin 2026

Commit attendu : `feat(projects): add accessible project image gallery`

### Checklist

- [x] Réécrire `ProjectGallery` sans créer de composant concurrent.
- [x] Afficher une seule image principale.
- [x] Sélectionner la première image par défaut.
- [x] Détecter le mode `auto` avec le ratio naturel `< 0.9`.
- [x] Prioriser les modes explicites `mobile` et `desktop`.
- [x] Appliquer `contain` ou `cover` sans déformation.
- [x] Utiliser le fallback de `SafeImage`.
- [x] Afficher les légendes uniquement lorsqu'elles existent.
- [x] Ajouter des miniatures-boutons accessibles.
- [x] Utiliser `thumbnailSrc ?? src` pour les miniatures.
- [x] Signaler l'état actif visuellement et avec ARIA.
- [x] Ajouter précédent, suivant et compteur pour plusieurs images.
- [x] Gérer `ArrowLeft` et `ArrowRight` lorsque la galerie est active.
- [x] Conserver `Enter` et `Space` via les boutons natifs.
- [x] Masquer les contrôles inutiles avec une seule image.
- [x] Prévoir un fallback robuste avec une galerie vide.
- [x] Charger immédiatement l'image principale et différer les miniatures.
- [x] Ajouter les libellés bilingues et leur validation.
- [x] Ajouter des styles clair/sombre, responsive et reduced motion.
- [x] Conserver la galerie à son emplacement actuel jusqu'à P12.12.
- [x] Exécuter lint, build et les validations ciblées.

### Comportement livré

- Une seule image principale est rendue.
- La première image est active par défaut.
- Le mode `auto` classe un ratio naturel inférieur à `0.9` comme mobile.
- Les modes explicites et `fit` restent prioritaires.
- Les miniatures sont des boutons avec `aria-current` et `aria-pressed`.
- Précédent, suivant, compteur et `aria-live` sont présents avec plusieurs
  images seulement.
- Les flèches gauche/droite bouclent et déplacent le focus entre miniatures.
- La scène reste stable en `16 / 10`; le cadre mobile utilise `9 / 16`.
- L'image principale est eager; les miniatures restent lazy.

### Fichiers concernés

- `src/components/projects/ProjectGallery.jsx`
- `src/components/projects/projectGalleryDisplay.js`
- `src/styles/project-gallery.css`
- `src/data/locales/fr/content.js`
- `src/data/locales/en/content.js`
- `src/data/contracts.js`
- `src/pages/ProjectDetailPage.jsx`
- `src/styles/project-detail.css`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `git diff --check` : réussi.
- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Détection portrait, carré, paysage et seuil `0.9` validée.
- Overrides mobile/desktop et `contain`/`cover` validés.
- Rendus isolés galerie multiple, unique et vide validés.
- Chromium 1280 px : ARMS en français clair.
- Chromium 768 px : H-Market en anglais sombre.
- Chromium 390 px : BusTix en français sombre.
- Une image principale, deux miniatures et un état actif validés.
- Clic, flèches, bouclage, focus, précédent/suivant et `aria-live` validés.
- Cibles de 44 px, lazy/eager et absence de débordement validées.
- Aucun package ajouté.
- L'avertissement Vite concerne uniquement le chunk PDF différé.

## Module antérieur

**P12.10 - Modèle de données de galerie**

Commit : `4683a58 feat(projects): add multi-image gallery data model`

## Phase suivante verrouillée

**P13 - Préparation du déploiement SPA**

Statut : verrouillé par le blocage explicite de déploiement.

## Backlog verrouillé

- [ ] P13 - Préparation du déploiement SPA.
