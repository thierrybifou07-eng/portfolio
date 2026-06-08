# Registre des tâches

## Dernier module terminé

**P12.10 - Modèle de données de galerie**

Statut : terminé le 8 juin 2026

Commit attendu : `feat(projects): add multi-image gallery data model`

### Checklist

- [x] Ajouter les constantes `auto`, `mobile` et `desktop`.
- [x] Ajouter les valeurs par défaut `auto`, `contain` et miniature `null`.
- [x] Remplacer `galleryImages` par des entrées techniques identifiées.
- [x] Geler les entrées et tableaux de galerie partagés.
- [x] Remplacer `galleryAlts` par `galleryContent` dans les deux langues.
- [x] Conserver les textes alternatifs existants.
- [x] Initialiser toutes les légendes à `null`.
- [x] Assembler les métadonnées et traductions par identifiant.
- [x] Exiger une galerie non vide et des identifiants uniques.
- [x] Valider `displayMode`, `fit`, `src` et `thumbnailSrc`.
- [x] Exiger un `alt` localisé non vide pour chaque image.
- [x] Valider les légendes `null` ou non vides.
- [x] Préserver `image` et les propriétés d'aperçu existantes.
- [x] Vérifier que le composant statique actuel reste compatible.
- [x] Exécuter `git diff --check`, lint, build et les contrôles ciblés.

### Contrat livré

```js
{
  id,
  src,
  displayMode: 'auto' | 'mobile' | 'desktop',
  fit: 'contain' | 'cover',
  thumbnailSrc: null,
}
```

Les textes localisés utilisent `galleryContent[id] = { alt, caption }`.
L'assembleur expose les propriétés techniques et localisées dans
`project.gallery`.

### Fichiers concernés

- `src/data/shared/projects.js`
- `src/data/locales/fr/content.js`
- `src/data/locales/en/content.js`
- `src/data/index.js`
- `src/data/contracts.js`
- `AGENTS.md`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `git diff --check` : réussi.
- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Trois projets, six images et deux locales assemblés.
- Toutes les entrées utilisent les défauts `auto`, `contain` et `null`.
- Identifiants uniques et cohérents entre les langues.
- `image`, `imageAlt`, `previewVariant` et `previewFit` préservés.
- Aucun `galleryImages` ou `galleryAlts` restant.
- Aucun composant, style, asset ou dépendance modifié.
- L'avertissement Vite concerne uniquement le chunk PDF différé.

## Dernier module précédent

**P12.9 - Planification de la galerie multi-images**

Commit : `d33b955 docs(process): plan project multi-image gallery`

## Prochaine tâche planifiée

**P12.11 - Galerie interactive accessible**

Statut : verrouillé jusqu'à une nouvelle instruction.

## Backlog verrouillé

- [ ] P12.11 - Créer la galerie interactive accessible.
- [ ] P12.12 - Intégrer la galerie dans le hero des détails.
- [ ] P12.13 - Organiser les assets par slug.
- [ ] P12.14 - Valider et stabiliser les galeries.
- [ ] P13 - Préparation du déploiement SPA.
