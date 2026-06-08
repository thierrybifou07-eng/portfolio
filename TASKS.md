# Registre des tâches

## Dernier module terminé

**P12.3 - Migration des contrôles thème et langue**

Statut : terminé le 8 juin 2026

Commit attendu : `feat(navbar): refine theme and language menus`

### Checklist

- [x] Remplacer le `<select>` de thème par `PreferenceDropdown`.
- [x] Conserver les valeurs `system`, `light` et `dark`.
- [x] Remplacer le `<select>` de langue par `PreferenceDropdown`.
- [x] Conserver les locales applicatives `fr` et `en`.
- [x] Conserver la persistance `localStorage`.
- [x] Conserver les labels accessibles traduits.
- [x] Supprimer les styles obsolètes des `<select>` natifs.
- [x] Vérifier desktop et mobile.
- [x] Vérifier clair et sombre.
- [x] Vérifier clavier : ouverture, flèches, sélection, `Escape`.
- [x] Vérifier fermeture au clic extérieur.
- [x] Vérifier changement de thème et de langue.
- [x] Empêcher `Escape` de fermer aussi la navigation mobile.
- [x] Exécuter lint, build et les contrôles Git.

### Comportement livré

- Le thème affiche `Système`, `Clair`, `Sombre` ou leurs équivalents anglais.
- La langue affiche `FR` et `EN` avec un label accessible traduit.
- La sélection appelle directement les mécanismes existants `setTheme` et
  `i18n.changeLanguage`.
- Les règles de stockage, de fallback et de suivi système ne changent pas.
- Les menus ouverts utilisent les couleurs du thème actif.
- En mobile, chaque contrôle occupe une moitié de la rangée et conserve une
  hauteur de 44 px.

### Fichiers concernés

- `src/components/layout/ThemeControl.jsx`
- `src/components/layout/LanguageControl.jsx`
- `src/components/layout/PreferenceDropdown.jsx`
- `src/styles/layout.css`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Aucun `<select>` ou `<option>` ne subsiste dans les contrôles de navbar.
- Desktop : déclencheurs de 44 px, liste focalisée et trois options thème.
- Thème : sélection `light` et `dark` persistée dans `localStorage`.
- Langue : sélection `en`, `lang="en"` et stockage `en` validés.
- `Escape` et sélection ferment le menu et restituent le focus.
- Le clic extérieur ferme le menu.
- Le menu sombre utilise la surface `rgb(23, 30, 45)` et un texte clair.
- Mobile : navigation conservée ouverte après `Escape` du sous-menu.
- Aucune dépendance ajoutée.
- L'avertissement Vite concerne uniquement le chunk PDF différé.

## Dernier module précédent

**P12.2 - Menu déroulant accessible réutilisable**

Commit : `bdcc408 feat(ui): add accessible preference dropdown`

## Prochaine tâche planifiée

**P12.4 - Extension du contrat des projets**

Statut : verrouillé jusqu'à une nouvelle instruction.

## Backlog verrouillé

- [ ] P12.4 - Étendre le contrat des projets.
- [ ] P12.5 - Adapter les aperçus mobile et desktop.
- [ ] P12.6 - Ajouter les icônes et descripteurs de contact.
- [ ] P12.7 - Présenter les démos et dépôts des projets.
- [ ] P12.8 - Migrer les données et valider l'ensemble.
- [ ] P13 - Préparation du déploiement SPA.
