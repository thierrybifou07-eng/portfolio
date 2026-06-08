# Registre des tâches

## Dernier module terminé

**P12.5 - Aperçus projet mobile et desktop**

Statut : terminé le 8 juin 2026

Commit attendu : `feat(projects): support mobile and desktop previews`

### Checklist

- [x] Créer un composant média réutilisable.
- [x] Conserver `SafeImage`, son fallback et le texte alternatif.
- [x] Réserver une scène stable pour limiter les décalages de layout.
- [x] Afficher `desktop` dans un cadre horizontal `16 / 10`.
- [x] Afficher `mobile` dans un cadre vertical `9 / 16` centré.
- [x] Limiter la largeur de la variante mobile.
- [x] Appliquer `contain` et `cover` sans déformation.
- [x] Migrer les cartes de la liste.
- [x] Migrer les cartes vedettes de l'accueil.
- [x] Migrer la couverture de la page détail.
- [x] Conserver le chargement prioritaire de la couverture détail.
- [x] Laisser la galerie inchangée.
- [x] Vérifier responsive, thèmes et fallback hérité.
- [x] Exécuter lint, build et les contrôles Git.

### Composant livré

`ProjectPreview` reçoit un projet et les options de chargement. Il applique :

```text
project-preview-{previewVariant}
project-preview-fit-{previewFit}
```

La scène conserve toujours un ratio `16 / 10` afin d'aligner les cartes. La
variante mobile place dans cette scène un cadre `9 / 16`, centré, limité à 46 %
de la largeur et à 52 % sous 480 px.

`SafeImage` reste responsable de la source, du fallback, du texte alternatif,
du lazy loading et du décodage.

### Surfaces migrées

- Cartes vedettes de l'accueil.
- Cartes de la liste des projets.
- Couverture de la page détail.

La galerie continue d'utiliser directement `SafeImage`, car ses images ne
possèdent pas encore de variante individuelle.

### Fichiers concernés

- `src/components/projects/ProjectPreview.jsx`
- `src/styles/project-preview.css`
- `src/components/projects/ProjectCard.jsx`
- `src/components/home/FeaturedProjects.jsx`
- `src/components/projects/ProjectDetailHero.jsx`
- `src/styles/projects.css`
- `src/styles/home.css`
- `src/styles/project-detail.css`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Accueil : trois aperçus `desktop/contain`, ratio `1.6`.
- Liste : trois aperçus et ratio desktop `1.6`.
- Simulation mobile : cadre interne `0.56` et largeur de 32 % de la scène.
- Simulation `cover` : `object-fit: cover` appliqué.
- Détail : aperçu présent, ratio `1.6`, chargement `eager` et priorité `high`.
- Galerie : deux images toujours rendues par son flux existant.
- Mobile 390 px : aucune largeur horizontale excédentaire.
- Les trois projets restent `desktop` jusqu'à la migration de données P12.8.
- Aucune dépendance ajoutée.
- L'avertissement Vite concerne uniquement le chunk PDF différé.

## Dernier module précédent

**P12.4 - Extension du contrat des projets**

Commit :
`92c13b4 feat(projects): extend project preview and external link data`

## Prochaine tâche planifiée

**P12.6 - Icônes et descripteurs de contact**

Statut : verrouillé jusqu'à une nouvelle instruction.

## Backlog verrouillé

- [ ] P12.6 - Ajouter les icônes et descripteurs de contact.
- [ ] P12.7 - Présenter les démos et dépôts des projets.
- [ ] P12.8 - Migrer les données et valider l'ensemble.
- [ ] P13 - Préparation du déploiement SPA.
