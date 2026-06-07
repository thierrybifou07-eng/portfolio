# Transmission du projet

## État courant

- Date : 7 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module applicatif terminé : P3 — Design system et animations
- Dernier module documentaire terminé : P3.1 — Raffinement du plan
- Dépendances installées : `react-router` 7.17.0, `motion` 12.40.0
- Blocage technique connu : aucun

## État confirmé avant P3.1

- Arbre Git propre.
- Dernier commit applicatif : `221c5b8 feat(styles): add modern design system`.
- P0 à P3 terminés et commités.
- Aucun thème sombre, i18n, fichier de configuration globale, donnée métier ou
  composant d'image sécurisé n'existe encore.
- Les pages restent des placeholders minimalistes.

## Révision apportée

- P3.1 à P3.5 sont insérés avant l'ancien P4.
- P3.2 crée le système global de thèmes sans dépendance.
- P3.3 ajoute l'i18n français/anglais avec `i18next` et `react-i18next`.
- P3.4 ajoute les contrôles thème et langue dans la navbar.
- P3.5 prépare la configuration globale et les médias sécurisés.
- P4 devient le module de données bilingues.
- P12 couvre uniquement la stabilisation.
- P13 couvre la préparation du déploiement SPA.

## Architecture future validée

- `ThemeProvider` et `useTheme` pilotent `data-theme`.
- La préférence de thème utilise `localStorage`, puis la préférence système.
- L'i18n utilise un dossier de traductions pour l'interface.
- Les données métier utilisent `src/data/locales/fr` et
  `src/data/locales/en`.
- Les technologies partagées utilisent `src/data/shared`.
- `src/config/site.js` centralise les valeurs globales du site.
- Les images sont rangées par profil, projets et placeholders.
- Un composant `SafeImage` ou `ImageWithFallback` protège les images
  remplaçables.

## Politique de dépendances

- Déjà installées : `react-router`, `motion`.
- Autorisées à leur module : `i18next`, `react-i18next`,
  `@react-pdf/renderer`.
- Aucune bibliothèque de thème n'est autorisée.
- Toute autre dépendance nécessite une validation et une justification.

## Fichiers du module P3.1

- `AGENTS.md`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

Aucun fichier sous `src`, manifeste npm ou fichier applicatif n'est modifié.

## Vérifications de P3.1

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16 lors de la relance isolée.
- `git diff --check` : réussi.
- Portée vérifiée : quatre fichiers Markdown uniquement.

## Commit de P3.1

Message : `docs(process): refine portfolio architecture plan`

Contenu : révision de la roadmap et des conventions pour les thèmes, l'i18n,
les contrôles navbar, les médias, les données bilingues, la stabilisation et le
déploiement.

## Prochaine tâche proposée

P3.2 — Système global de thèmes. Créer `ThemeProvider`, `useTheme`, la
persistance locale, la détection système et les variables sombres. Ce module
reste verrouillé jusqu'à une nouvelle instruction explicite.

## Deployment blocker

- replace all fictitious profile, resume and contact data before publishing;
- verify both French and English contents;
- replace profile and project placeholder images;
- validate social links and downloadable resume content.
