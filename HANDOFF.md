# Transmission du projet

## État courant

- Date : 7 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P3.3 — Internationalisation français/anglais
- Dépendances installées : `react-router`, `motion`, `i18next`,
  `react-i18next`
- Blocage technique connu : aucun

## Initialisation du thème

- Un script inline dans le `<head>` s'exécute avant le module React.
- Il lit `portfolio-theme`, résout `system`, `light` ou `dark`, puis applique
  `data-theme`, `data-theme-preference` et la propriété inline `color-scheme`.
- Le provider React reprend ensuite les mêmes règles et surveille le système.
- Les sélecteurs CSS explicites sont
  `html[data-theme="light"]` et `html[data-theme="dark"]`.
- Le fallback CSS système reste disponible si JavaScript ne pose pas encore
  l'attribut.

## Architecture i18n

- Initialisation : `src/i18n/index.js`.
- Catalogues : `src/i18n/locales/fr/translation.js` et
  `src/i18n/locales/en/translation.js`.
- Langues supportées : français et anglais.
- Clé locale : `portfolio-language`.
- Priorité : langue sauvegardée, langues du navigateur, français.
- Fallback : français.
- Ressources embarquées, initialisation synchrone, sans requête réseau.
- `<html lang>` est synchronisé à l'initialisation et aux changements.
- Les changements sont persistés et appliqués sans rechargement.

## Interface traduite

- Navigation principale et secondaire.
- Marque, menu mobile et footer.
- Lien d'évitement et retour en haut.
- Toutes les pages placeholders, le détail temporaire et la 404.
- Titres documentaires de toutes les routes.

Les données métier bilingues seront créées en P4 sous `src/data/locales`.

## Fichiers du module P3.3

- Bootstrap thème : `index.html`, `src/styles/variables.css`.
- Dépendances : `package.json`, `package-lock.json`.
- i18n : `src/i18n`.
- Bootstrap React : `src/main.jsx`.
- Interface : layout, composants de navigation et pages placeholders.
- Suivi : `AGENTS.md`, `ROADMAP.md`, `TASKS.md`, `HANDOFF.md`.

## Vérifications de P3.3

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi avant la mise à jour finale du suivi.
- Audit npm : aucune vulnérabilité.
- Bundle principal : 372.25 kB, 120.59 kB gzip.
- Détection navigateur, préférence sauvegardée et fallback français validés.
- Bascule immédiate FR/EN validée sans rechargement.
- Les huit routes sont validées dans les deux langues.
- Le bootstrap sombre applique attributs et `color-scheme` au chargement.

## Limites restantes

- Aucun contrôle de thème ou langue n'est encore affiché; P3.4 les ajoutera.
- Les traductions concernent uniquement l'interface et les placeholders.
- Les données métier bilingues n'existent pas encore.
- Les images sécurisées et la configuration globale n'existent pas encore.

## Commit de P3.3

Message : `feat(i18n): add french and english localization`

Contenu : bootstrap anti-flash du thème, i18n synchrone FR/EN, persistance,
fallback français, traduction de l'interface et titres documentaires.

## Prochaine tâche proposée

P3.4 — Contrôles thème et langue dans la navbar. Ajouter des contrôles
accessibles et responsive utilisant `useTheme` et `i18n.changeLanguage`. Le
module reste verrouillé jusqu'à une nouvelle instruction explicite.

## Deployment blocker

- replace all fictitious profile, resume and contact data before publishing;
- verify both French and English contents;
- replace profile and project placeholder images;
- validate social links and downloadable resume content.
