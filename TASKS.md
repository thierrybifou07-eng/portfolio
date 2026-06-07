# Registre des tâches

## Dernier module terminé

**P3.4 — Contrôles thème et langue dans la navbar**

Statut : terminé le 7 juin 2026

Commit : `feat(navbar): add theme and language controls`

### Checklist

- [x] Créer un contrôle de thème accessible.
- [x] Exposer les choix `system`, `light` et `dark`.
- [x] Créer un contrôle de langue limité à `FR` et `EN`.
- [x] Réutiliser la persistance du thème et de la langue.
- [x] Traduire les labels et options des contrôles.
- [x] Ajouter un groupe accessible pour les préférences.
- [x] Intégrer les contrôles dans la navbar desktop.
- [x] Intégrer les contrôles dans le menu mobile.
- [x] Conserver un design compact sans débordement.
- [x] Préserver des cibles interactives de 44 px.
- [x] Vérifier l'ordre de tabulation thème puis langue.
- [x] Normaliser `fr-FR` vers `fr`.
- [x] Normaliser `en-US` vers `en`.
- [x] Synchroniser `<html lang>` avec la langue active.
- [x] Conserver uniquement `fr` et `en` comme options applicatives.
- [x] Conserver le français comme fallback.
- [x] Ne pas ajouter de contenu métier avant P4.
- [x] Exécuter lint, build et contrôle du diff.

### Comportements

- Le sélecteur de thème appelle `setTheme` avec un choix valide.
- `system` retire l'override local; `light` et `dark` sont persistés.
- Le sélecteur de langue appelle `i18n.changeLanguage`.
- La liste des langues provient uniquement de `SUPPORTED_LANGUAGES`.
- Les labels accessibles suivent immédiatement la langue active.
- Les contrôles utilisent les éléments HTML `select` natifs.

### Fichiers concernés

- `src/components/layout/ThemeControl.jsx`
- `src/components/layout/LanguageControl.jsx`
- `src/components/layout/PreferenceControls.jsx`
- `src/components/layout/Navbar.jsx`
- `src/i18n/index.js`
- `src/i18n/locales/fr/translation.js`
- `src/i18n/locales/en/translation.js`
- `src/styles/globals.css`
- `src/styles/layout.css`
- `AGENTS.md`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Options thème : `system`, `light`, `dark` uniquement.
- Options langue : `fr`, `en` uniquement.
- Persistance thème et langue validée après rechargement.
- Retour à `system` : override thème supprimé.
- `fr-FR` et `en-US` normalisés et persistés en `fr` et `en`.
- Ordre clavier desktop : thème puis langue.
- Cibles desktop et mobile : 44 px.
- Aucun débordement entre 500 et 1440 px.
- Menu mobile ouvert : liens et contrôles visibles.

## Prochaine tâche proposée

**P3.5 — Configuration globale et médias sécurisés**

Statut : en attente d'une nouvelle instruction explicite.

## Backlog verrouillé

- [ ] P4 — Données bilingues.
- [ ] P5 — Page d'accueil.
- [ ] P6 — Page À propos.
- [ ] P7 — Page Compétences.
- [ ] P8 — Liste des projets.
- [ ] P9 — Détail des projets.
- [ ] P10 — CV et PDF navigateur.
- [ ] P11 — Contact frontend.
- [ ] P12 — Stabilisation.
- [ ] P13 — Préparation du déploiement SPA.

Ne pas commencer P3.5 avant une nouvelle instruction explicite.
