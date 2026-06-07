# Registre des tâches

## Dernier module terminé

**P3.5 - Configuration globale et médias sécurisés**

Statut : terminé le 7 juin 2026

Commit : `feat(media): add site config and safe image handling`

### Checklist

- [x] Créer `src/config/site.js`.
- [x] Centraliser le nom, le nom court et le titre par défaut.
- [x] Centraliser la locale par défaut et les locales applicatives.
- [x] Prévoir l'email, les réseaux et le nom du PDF.
- [x] Laisser l'email et les réseaux sans valeur avant P4.
- [x] Relier i18n aux locales de la configuration.
- [x] Relier les titres documentaires à la configuration.
- [x] Relier la marque générique du header à la configuration.
- [x] Organiser les images par profil, projets et placeholders.
- [x] Ajouter trois placeholders SVG locaux et légers.
- [x] Créer `SafeImage`.
- [x] Exiger un texte alternatif explicite.
- [x] Fournir un fallback local par défaut.
- [x] Activer le lazy loading par défaut.
- [x] Permettre le chargement eager pour les images prioritaires.
- [x] Ne pas ajouter de contenu métier avant P4.
- [x] Exécuter lint, build et les contrôles ciblés.

### Contrats

- `siteConfig.supportedLocales` reste limité à `fr` et `en`.
- `siteConfig.defaultLocale` reste `fr`.
- `contactEmail` et les liens sociaux valent `null` jusqu'à P4.
- `SafeImage` transmet les attributs natifs de l'image.
- `SafeImage` utilise `loading="lazy"` et `decoding="async"` par défaut.
- Un `src` absent ou en erreur bascule vers le placeholder générique.
- Les images de profil et de projet disposent de placeholders spécialisés.

### Fichiers concernés

- `src/config/site.js`
- `src/components/common/SafeImage.jsx`
- `src/assets/images/placeholders/media-placeholder.svg`
- `src/assets/images/profile/profile-placeholder.svg`
- `src/assets/images/projects/project-placeholder.svg`
- `src/components/layout/Header.jsx`
- `src/hooks/useDocumentTitle.js`
- `src/i18n/index.js`
- `src/i18n/locales/fr/translation.js`
- `src/i18n/locales/en/translation.js`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Interpolation du nom du site : validée en français et en anglais.
- Aucun jeton `{{siteName}}` non résolu.
- Fallback SSR de `SafeImage` : validé.
- Attributs `alt`, `loading` et `decoding` : validés.
- Erreur explicite lorsque `alt` est absent : validée.
- Trois fichiers SVG analysés comme XML valide.
- Poids total des trois placeholders : inférieur à 3 Ko.
- `git diff --check` : réussi.

## Prochaine tâche proposée

**P4 - Données bilingues du portfolio**

Statut : en attente d'une nouvelle instruction explicite.

## Backlog verrouillé

- [ ] P5 - Page d'accueil.
- [ ] P6 - Page À propos.
- [ ] P7 - Page Compétences.
- [ ] P8 - Liste des projets.
- [ ] P9 - Détail des projets.
- [ ] P10 - CV et PDF navigateur.
- [ ] P11 - Contact frontend.
- [ ] P12 - Stabilisation.
- [ ] P13 - Préparation du déploiement SPA.

Ne pas commencer P4 avant une nouvelle instruction explicite.
