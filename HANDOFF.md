# Transmission du projet

## État courant

- Date : 7 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P3.2 — Système global de thèmes
- Dépendances installées : `react-router` 7.17.0, `motion` 12.40.0
- Nouvelle dépendance pour P3.2 : aucune
- Blocage technique connu : aucun

## Architecture du thème

- `ThemeProvider` enveloppe toute l'application avant `BrowserRouter`.
- `useTheme` impose une utilisation sous le provider.
- Les préférences autorisées sont `system`, `light` et `dark`.
- `theme` contient la préférence active.
- `resolvedTheme` contient le résultat `light` ou `dark`.
- `systemTheme` suit `prefers-color-scheme`.
- `setTheme` ignore les valeurs invalides.

Attributs du document :

- `data-theme` contient le thème résolu;
- `data-theme-preference` contient la préférence;
- la propriété `color-scheme` suit le thème résolu.

## Persistance et résolution

- Clé locale : `portfolio-theme`.
- Aucun choix sauvegardé signifie `system`.
- `light` et `dark` sont persistés dans `localStorage`.
- Choisir `system` supprime la clé locale.
- En mode `system`, un événement `matchMedia` met à jour le thème sans
  rechargement.
- Une valeur locale inconnue revient à `system`.
- Une indisponibilité de `localStorage` n'empêche pas la préférence en mémoire.

## Styles disponibles

- Les tokens clairs restent les valeurs par défaut.
- `:root[data-theme='dark']` fournit le thème sombre.
- Une règle CSS système couvre le rendu initial avant l'application de
  l'attribut par React.
- Les gradients, surfaces, bordures, ombres, header, footer, boutons et cartes
  utilisent des tokens compatibles avec les deux thèmes.
- Les transitions de couleur respectent toujours la réduction des mouvements.

## Fichiers du module P3.2

- Contexte : `src/contexts/ThemeContext.js`,
  `src/contexts/ThemeProvider.jsx`.
- Hook : `src/hooks/useTheme.js`.
- Bootstrap : `src/main.jsx`.
- Styles : `variables.css`, `globals.css`, `layout.css`.
- Suivi : `AGENTS.md`, `ROADMAP.md`, `TASKS.md`, `HANDOFF.md`.

## Vérifications de P3.2

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi avant la mise à jour finale du suivi.
- Chrome DevTools : système clair et sombre, overrides persistants et retour à
  `system` validés.
- `prefers-color-scheme` modifié pendant l'exécution : mise à jour immédiate.
- Captures Chrome headless : rendu clair et sombre validé à 1440 × 900.

## Limites restantes

- Aucun contrôle de thème n'est encore affiché dans la navbar; il appartient à
  P3.4.
- L'interface reste uniquement en français jusqu'à P3.3.
- Les données structurées et images sécurisées n'existent pas encore.
- Les pages restent des placeholders minimalistes jusqu'à P4.

## Commit de P3.2

Message : `feat(theme): add global light and dark themes`

Contenu : contexte à trois états, persistance des overrides, suivi du système,
attributs documentaires et tokens clairs/sombres globaux.

## Prochaine tâche proposée

P3.3 — Internationalisation français/anglais. Installer `i18next` et
`react-i18next`, créer les traductions d'interface, persister la langue et
traduire les titres et textes accessibles. Le module reste verrouillé jusqu'à
une nouvelle instruction explicite.

## Deployment blocker

- replace all fictitious profile, resume and contact data before publishing;
- verify both French and English contents;
- replace profile and project placeholder images;
- validate social links and downloadable resume content.
