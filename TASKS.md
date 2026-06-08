# Registre des tâches

## Dernier module terminé

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

## Dernier module précédent

**P12.10 - Modèle de données de galerie**

Commit : `4683a58 feat(projects): add multi-image gallery data model`

## Prochaine tâche planifiée

**P12.12 - Intégration de la galerie dans le hero**

Statut : verrouillé jusqu'à une nouvelle instruction.

## Backlog verrouillé

- [ ] P12.12 - Intégrer la galerie dans le hero des détails.
- [ ] P12.13 - Organiser les assets par slug.
- [ ] P12.14 - Valider et stabiliser les galeries.
- [ ] P13 - Préparation du déploiement SPA.
