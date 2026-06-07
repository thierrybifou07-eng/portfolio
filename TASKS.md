# Registre des tâches

## Dernier module terminé

**P3.3 — Internationalisation français/anglais**

Statut : terminé le 7 juin 2026

Commit : `feat(i18n): add french and english localization`

### Checklist

- [x] Ajouter le script d'initialisation précoce du thème dans `index.html`.
- [x] Appliquer `data-theme` avant le chargement de React.
- [x] Synchroniser la propriété inline `color-scheme`.
- [x] Ajouter les règles CSS explicites pour les thèmes clair et sombre.
- [x] Installer `i18next` et `react-i18next`.
- [x] Créer l'initialisation i18n synchrone.
- [x] Créer les catalogues français et anglais.
- [x] Prioriser la langue sauvegardée, puis le navigateur.
- [x] Utiliser le français comme fallback.
- [x] Persister les changements de langue.
- [x] Mettre à jour `<html lang>` sans rechargement.
- [x] Traduire navigation, header, footer et menu mobile.
- [x] Traduire le lien d'évitement et le retour en haut.
- [x] Traduire toutes les pages placeholders et la 404.
- [x] Traduire tous les titres documentaires.
- [x] Vérifier les huit routes dans les deux langues.
- [x] Exécuter lint, build et contrôle du diff.

### Architecture i18n

- Clé locale : `portfolio-language`.
- Langues supportées : `fr`, `en`.
- Langue par défaut et fallback : `fr`.
- Ressources : `src/i18n/locales/{fr,en}/translation.js`.
- Initialisation : `src/i18n/index.js`.
- Les ressources sont embarquées et initialisées avec `initImmediate: false`.

### Fichiers concernés

- `index.html`
- `package.json`
- `package-lock.json`
- `src/i18n/`
- `src/main.jsx`
- `src/layouts/MainLayout.jsx`
- `src/components/layout/`
- `src/pages/`
- `src/styles/variables.css`
- `AGENTS.md`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- `i18next` 26.3.1 et `react-i18next` 17.0.8 installés.
- Audit npm : aucune vulnérabilité signalée.
- Navigateur anglais sans préférence : interface anglaise.
- Français sauvegardé : priorité sur le navigateur anglais.
- Changement en direct : contenu, titre et `<html lang>` mis à jour.
- Navigateur et valeur sauvegardée non supportés : fallback français.
- Toutes les routes : titres et `h1` validés en français et anglais.
- Thème sombre sauvegardé : attribut et `color-scheme` appliqués au démarrage.

## Prochaine tâche proposée

**P3.4 — Contrôles thème et langue dans la navbar**

Statut : en attente d'une nouvelle instruction explicite.

## Backlog verrouillé

- [ ] P3.5 — Configuration globale et médias sécurisés.
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

Ne pas commencer P3.4 avant une nouvelle instruction explicite.
