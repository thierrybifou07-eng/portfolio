# Registre des tâches

## Dernier module terminé

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

**P12.14 - Validation des galeries multi-images**

Statut : verrouillé jusqu'à une nouvelle instruction.

## Backlog verrouillé

- [ ] P12.14 - Valider et stabiliser les galeries.
- [ ] P13 - Préparation du déploiement SPA.
