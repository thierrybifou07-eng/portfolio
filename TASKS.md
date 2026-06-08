# Registre des tâches

## Dernier module terminé

**P12.9 - Planification de la galerie multi-images**

Statut : terminé le 8 juin 2026

Commit attendu : `docs(process): plan project multi-image gallery`

### Checklist

- [x] Confirmer P12.8 au commit `a076719` sur la branche `feature`.
- [x] Vérifier que l'arbre Git initial est propre.
- [x] Inspecter le modèle partagé et l'assembleur bilingue.
- [x] Inspecter `ProjectGallery`, `ProjectPreview` et `SafeImage`.
- [x] Inspecter le hero, la page de détail et les styles responsive.
- [x] Inspecter l'arborescence des assets projet.
- [x] Choisir la galerie interactive dans le hero sans grille dupliquée.
- [x] Définir le contrat technique et les contenus localisés.
- [x] Définir les comportements accessible, responsive et performant.
- [x] Ajouter P12.9 à P12.14 sans renuméroter l'historique.
- [x] Maintenir P13 et le déploiement verrouillés.
- [x] Exécuter `git diff --check`, lint, build et le contrôle Git.
- [x] Confirmer que seuls les trois fichiers de pilotage sont modifiés.

### Audit

- `ProjectGallery` existe déjà et affiche `project.gallery` dans une grille
  statique après les sections de l'étude de cas.
- Le hero utilise encore `ProjectPreview` avec l'image unique du projet.
- Les données partagées exposent `galleryImages`; les locales exposent les
  tableaux parallèles `galleryAlts`.
- L'assembleur crée des objets `{ src, alt }` sans identifiant ni métadonnées.
- `SafeImage` fournit déjà un fallback et accepte les événements d'image.
- `arms/` et `h-market/` existent localement mais sont vides et non suivis.
- Le dossier local vide `bustik/` est fautif; aucun dossier `bustix/` suivi
  n'existe.
- Seuls `project-placeholder.svg` et `media-placeholder.svg` sont disponibles.

### Décisions verrouillées

- Conserver l'aperçu unique pour l'accueil et les cartes.
- Réécrire le composant `ProjectGallery` existant.
- Intégrer la galerie dans `ProjectDetailHero` en P12.12.
- Supprimer alors la galerie statique située plus bas.
- Stocker dans le partagé `id`, `src`, `displayMode`, `fit` et `thumbnailSrc`.
- Stocker dans les locales `galleryContent[id] = { alt, caption }`.
- Valeurs par défaut : `auto`, `contain`, `thumbnailSrc: null`,
  `caption: null`.
- Le mode `auto` utilise le ratio naturel `< 0.9` pour mobile; les overrides
  explicites sont prioritaires.
- Utiliser `thumbnailSrc ?? src`, `SafeImage` et une seule image principale
  dans le DOM.
- Charger immédiatement l'image principale initiale et différer les miniatures.
- Masquer miniatures, compteur et navigation avec une seule image.
- Prendre en charge clic, tactile, `Enter`, `Space`, `ArrowLeft` et
  `ArrowRight`, sans carousel automatique.
- P12.13 créera des dossiers suivis `arms/`, `h-market/` et `bustix/`, puis
  supprimera le dossier fautif `bustik/` s'il existe encore.

### Fichiers concernés

- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `git diff --check` : réussi.
- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Seuls `ROADMAP.md`, `TASKS.md` et `HANDOFF.md` sont modifiés.
- Aucun fichier applicatif, asset ou dépendance n'est modifié.
- L'avertissement Vite concerne uniquement le chunk PDF différé.

## Dernier module précédent

**P12.8 - Migration et validation transversale**

Commit : `a076719 chore(projects): validate previews social links and live demos`

## Prochaine tâche planifiée

**P12.10 - Modèle de données de galerie**

Statut : verrouillé jusqu'à une nouvelle instruction.

## Backlog verrouillé

- [ ] P12.10 - Étendre le modèle de données des projets.
- [ ] P12.11 - Créer la galerie interactive accessible.
- [ ] P12.12 - Intégrer la galerie dans le hero des détails.
- [ ] P12.13 - Organiser les assets par slug.
- [ ] P12.14 - Valider et stabiliser les galeries.
- [ ] P13 - Préparation du déploiement SPA.
