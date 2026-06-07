# Registre des tâches

## Dernier module terminé

**P3.2 — Système global de thèmes**

Statut : terminé le 7 juin 2026

Commit : `feat(theme): add global light and dark themes`

### Checklist

- [x] Créer `ThemeProvider`.
- [x] Créer le hook `useTheme`.
- [x] Exposer les préférences `system`, `light` et `dark`.
- [x] Exposer le thème résolu `light` ou `dark`.
- [x] Utiliser `system` en l'absence de choix sauvegardé.
- [x] Persister uniquement les overrides `light` et `dark`.
- [x] Supprimer l'override lors du retour à `system`.
- [x] Appliquer `data-theme` au document.
- [x] Appliquer `data-theme-preference` au document.
- [x] Synchroniser la propriété native `color-scheme`.
- [x] Écouter les changements de `prefers-color-scheme` avec `matchMedia`.
- [x] Créer les tokens du thème sombre.
- [x] Remplacer les couleurs translucides fixes par des tokens.
- [x] Vérifier les thèmes clair et sombre visuellement.
- [x] Vérifier les overrides et la persistance avec Chrome DevTools.
- [x] Exécuter lint, build et contrôle du diff.

### Interface du hook

`useTheme()` expose :

- `theme` : préférence `system`, `light` ou `dark`;
- `resolvedTheme` : thème effectivement appliqué `light` ou `dark`;
- `systemTheme` : préférence système courante;
- `setTheme(nextTheme)` : applique une préférence valide;
- `themePreferences` : constantes disponibles.

### Fichiers concernés

- `src/contexts/ThemeContext.js`
- `src/contexts/ThemeProvider.jsx`
- `src/hooks/useTheme.js`
- `src/main.jsx`
- `src/styles/variables.css`
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
- Aucun choix sauvegardé : préférence `system`.
- Changement système en direct : résolution mise à jour sans rechargement.
- Override `dark` : reste sombre sous un système clair.
- Override `light` : reste clair sous un système sombre.
- Retour à `system` : clé locale absente et système suivi.
- Captures Chrome headless : thèmes clair et sombre validés à 1440 × 900.

## Prochaine tâche proposée

**P3.3 — Internationalisation français/anglais**

Statut : en attente d'une nouvelle instruction explicite.

## Backlog verrouillé

- [ ] P3.4 — Contrôles thème et langue dans la navbar.
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

Ne pas commencer P3.3 avant une nouvelle instruction explicite.
