# Registre des tâches

## Dernier module terminé

**P12.2 - Menu déroulant accessible réutilisable**

Statut : terminé le 8 juin 2026

Commit attendu : `feat(ui): add accessible preference dropdown`

### Objectif

Créer un composant de menu commun pour les préférences sans migrer encore les
contrôles thème et langue.

### Checklist

- [x] Créer `PreferenceDropdown`.
- [x] Fournir un bouton déclencheur avec état ouvert explicite.
- [x] Utiliser un menu ARIA `listbox` et des options `option`.
- [x] Identifier visuellement et sémantiquement l'option active.
- [x] Gérer les flèches, `Home`, `End`, `Enter` et `Space`.
- [x] Fermer avec `Escape` et restituer le focus.
- [x] Fermer après sélection.
- [x] Fermer lors d'un clic ou toucher extérieur.
- [x] Conserver une cible interactive d'au moins 44 px.
- [x] Ajouter des styles compatibles avec les deux thèmes.
- [x] Ne pas modifier `ThemeControl` ou `LanguageControl`.
- [x] Ne pas ajouter de dépendance.
- [x] Exécuter lint, build et les contrôles Git.

### Contrat du composant

```js
{
  label,
  value,
  options: [{ value, label }],
  onChange,
  icon,
}
```

### Comportement livré

- Le déclencheur expose `aria-haspopup="listbox"`, `aria-expanded` et
  `aria-controls`.
- Le menu utilise `role="listbox"` et `aria-activedescendant`.
- Les options utilisent `role="option"` et `aria-selected`.
- Les touches flèches, `Home` et `End` déplacent l'option active.
- `Enter` et `Space` sélectionnent l'option active.
- `Escape` ferme le menu et restitue le focus au déclencheur.
- La sélection ferme le menu et restitue le focus.
- Un pointeur extérieur ferme le menu sans voler le focus.
- Les styles sont isolés dans une feuille dédiée et utilisent les variables du
  design system.

### Fichiers concernés

- `src/components/layout/PreferenceDropdown.jsx`
- `src/styles/preference-dropdown.css`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Compilation JSX ciblée via `transformWithOxc` : réussie.
- `ThemeControl` et `LanguageControl` restent inchangés.
- Aucune dépendance ajoutée.
- L'avertissement Vite concerne uniquement le chunk PDF différé déjà documenté.

## Dernier module précédent

**P12.1 - Planification des améliorations UI, médias et liens externes**

Commit : `d13147a docs(process): plan navbar media and external links improvements`

## Prochaine tâche planifiée

**P12.3 - Migration des contrôles thème et langue**

Statut : verrouillé jusqu'à une nouvelle instruction.

## Backlog verrouillé

- [ ] P12.3 - Migrer les contrôles thème et langue.
- [ ] P12.4 - Étendre le contrat des projets.
- [ ] P12.5 - Adapter les aperçus mobile et desktop.
- [ ] P12.6 - Ajouter les icônes et descripteurs de contact.
- [ ] P12.7 - Présenter les démos et dépôts des projets.
- [ ] P12.8 - Migrer les données et valider l'ensemble.
- [ ] P13 - Préparation du déploiement SPA.
