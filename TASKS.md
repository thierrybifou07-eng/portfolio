# Registre des tâches

## Dernier module terminé

**P12 - Stabilisation**

Statut : terminé le 8 juin 2026

Commit attendu : `chore(app): stabilize portfolio`

### Checklist

- [x] Auditer toutes les routes en français et en anglais.
- [x] Vérifier les thèmes clair, sombre et système.
- [x] Vérifier la mise à jour dynamique de `theme-color`.
- [x] Contrôler la hiérarchie des titres et les textes alternatifs.
- [x] Garantir des cibles interactives d'au moins 44 px.
- [x] Vérifier le focus après navigation et le menu mobile au clavier.
- [x] Vérifier les contrastes des deux thèmes.
- [x] Vérifier les formats mobile et bureau sans débordement horizontal.
- [x] Respecter la réduction des mouvements.
- [x] Ajouter les descriptions SEO, Open Graph et Twitter.
- [x] Synchroniser `og:locale` avec la langue active.
- [x] Utiliser `noindex,follow` pour les routes inconnues.
- [x] Vérifier le fallback local de `SafeImage`.
- [x] Vérifier les filtres de projets et restaurer le contrat `categoryId`.
- [x] Vérifier la génération et le téléchargement du CV PDF.
- [x] Vérifier les routes directes avec le serveur de prévisualisation.
- [x] Remplacer le README Vite par la documentation du projet.
- [x] Exécuter lint, build et les contrôles Git.

### Fichiers concernés

- `README.md`
- `index.html`
- `src/contexts/ThemeProvider.jsx`
- `src/data/contracts.js`
- `src/data/index.js`
- `src/data/locales/en/content.js`
- `src/data/shared/projects.js`
- `src/hooks/useDocumentTitle.js`
- `src/i18n/index.js`
- `src/i18n/locales/en/translation.js`
- `src/i18n/locales/fr/translation.js`
- `src/layouts/MainLayout.jsx`
- `src/pages/*.jsx`
- `src/styles/contact.css`
- `src/styles/layout.css`
- `src/styles/resume.css`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Les huit routes publiques répondent directement avec le shell SPA.
- Les seize combinaisons route, langue, thème et format testées ont un `h1`
  unique, aucune image sans `alt` et aucun débordement horizontal.
- Toutes les cibles interactives visibles atteignent au moins 44 px.
- Les descriptions, Open Graph, Twitter, locale, robots et `theme-color`
  suivent la route et les préférences actives.
- Menu mobile, navigation clavier, focus principal et retour en haut validés.
- Filtrage des projets, slug inconnu et navigation de détail validés.
- CV PDF valide : type `application/pdf`, en-tête `%PDF-` et nom configuré.
- Fallback d'image local et mouvements réduits validés.
- `git diff --check` : réussi.

Le bundle PDF reste volontairement volumineux, mais il est isolé dans un chunk
chargé uniquement depuis la page CV.

## Note historique

Le commit `06da079` contient l'implémentation P11 Contact malgré son sujet
`feat(resume): add client-side pdf resume`. L'historique n'a pas été réécrit.

## Prochaine tâche planifiée

**P13 - Préparation du déploiement SPA**

Statut : verrouillé jusqu'à une nouvelle instruction et jusqu'à la levée
explicite du blocage de déploiement.

## Backlog verrouillé

- [ ] P13 - Documentation et configuration du déploiement SPA.
