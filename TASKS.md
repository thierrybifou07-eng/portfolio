# Registre des tâches

## Dernier module terminé

**P12.4 - Extension du contrat des projets**

Statut : terminé le 8 juin 2026

Commit attendu :
`feat(projects): extend project preview and external link data`

### Checklist

- [x] Centraliser les valeurs autorisées.
- [x] Ajouter `previewVariant` avec défaut `desktop`.
- [x] Ajouter `previewFit` avec défaut `contain`.
- [x] Ajouter `liveUrl` avec défaut `null`.
- [x] Ajouter `repositoryUrl` avec défaut `null`.
- [x] Ajouter `liveStatus` avec défaut `unavailable`.
- [x] Valider les variantes et états autorisés.
- [x] Valider les URLs HTTP(S) lorsqu'elles existent.
- [x] Exiger une URL de démo pour le statut `available`.
- [x] Retirer `links` des sources partagées.
- [x] Générer temporairement `links` dans l'assembleur.
- [x] Documenter le contrat dans `AGENTS.md`.
- [x] Ne pas modifier encore les composants d'affichage.
- [x] Exécuter lint, build et les contrôles Git.

### Contrat livré

```js
{
  previewVariant: 'mobile' | 'desktop',
  previewFit: 'contain' | 'cover',
  liveUrl: string | null,
  repositoryUrl: string | null,
  liveStatus: 'available' | 'unavailable' | 'coming-soon',
}
```

Le constructeur partagé applique `desktop`, `contain`, `null`, `null` et
`unavailable` lorsque les propriétés sont omises. Les tableaux de technologies
et de galerie restent gelés.

### Compatibilité temporaire

`src/data/index.js` génère encore :

```js
links: {
  demo: project.liveUrl,
  repository: project.repositoryUrl,
}
```

Cet adaptateur maintient les cartes et détails actuels jusqu'à P12.7. Il ne
figure plus dans les sources partagées.

### Fichiers concernés

- `src/data/shared/projects.js`
- `src/data/contracts.js`
- `src/data/index.js`
- `AGENTS.md`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Chargement Vite ciblé de `src/data/index.js` : réussi.
- Les trois projets sources exposent les cinq propriétés normalisées.
- Aucun projet source n'expose encore `links`.
- Les projets assemblés exposent encore l'adaptateur `links`.
- Les URLs de démo et dépôt restent toutes à `null`.
- Aucune dépendance ajoutée.
- L'avertissement Vite concerne uniquement le chunk PDF différé.

## Dernier module précédent

**P12.3 - Migration des contrôles thème et langue**

Commit : `26a3cc9 feat(navbar): refine theme and language menus`

## Prochaine tâche planifiée

**P12.5 - Aperçus projet mobile et desktop**

Statut : verrouillé jusqu'à une nouvelle instruction.

## Backlog verrouillé

- [ ] P12.5 - Adapter les aperçus mobile et desktop.
- [ ] P12.6 - Ajouter les icônes et descripteurs de contact.
- [ ] P12.7 - Présenter les démos et dépôts des projets.
- [ ] P12.8 - Migrer les données et valider l'ensemble.
- [ ] P13 - Préparation du déploiement SPA.
