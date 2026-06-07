# Transmission du projet

## État courant

- Date : 7 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P3.4 — Contrôles thème et langue
- Dépendances installées : `react-router`, `motion`, `i18next`,
  `react-i18next`
- Blocage technique connu : aucun

## Contrôles de préférences

La navbar contient maintenant deux sélecteurs natifs :

- thème : `system`, `light`, `dark`;
- langue : `FR`, `EN`.

Les sélecteurs sont regroupés avec un label accessible traduit. Ils sont
visibles sur desktop et apparaissent sous les liens lorsque le menu mobile est
ouvert. Les cibles mesurent au moins 44 px.

## Comportement du thème

- Le contrôle utilise `useTheme`.
- `system` supprime la clé locale et suit `prefers-color-scheme`.
- `light` et `dark` sont persistés.
- Les labels Système/Clair/Sombre ou System/Light/Dark suivent la langue.
- Le bootstrap anti-flash et les attributs documentaires restent inchangés.

## Comportement de la langue

- Le contrôle utilise `i18n.changeLanguage`.
- Les options proviennent de `SUPPORTED_LANGUAGES`.
- Seules les locales `fr` et `en` sont exposées.
- `fr-FR` devient `fr`; `en-US` devient `en`.
- La langue normalisée est persistée.
- `document.documentElement.lang` suit la langue active.
- Le fallback reste le français.

## Frontière interface/données

P3.4 traduit uniquement :

- navigation et footer;
- boutons et labels accessibles;
- page 404;
- placeholders génériques;
- titres temporaires des pages.

P4 reste responsable des véritables données bilingues :

- profil;
- projets;
- compétences;
- formation;
- parcours;
- CV;
- contact.

Aucun contenu métier n'a été ajouté dans P3.4.

## Fichiers du module P3.4

- Contrôles : `ThemeControl`, `LanguageControl`, `PreferenceControls`.
- Navbar : intégration des contrôles.
- i18n : export de la normalisation et traductions des préférences.
- Styles : helper visuellement masqué et présentation responsive.
- Suivi : `AGENTS.md`, `ROADMAP.md`, `TASKS.md`, `HANDOFF.md`.

## Vérifications de P3.4

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi avant la mise à jour finale du suivi.
- Persistance des deux préférences validée.
- Normalisation régionale et synchronisation de `<html lang>` validées.
- Navigation clavier : thème puis langue.
- Responsive sans débordement de 500 à 1440 px.
- Menu mobile et cibles de 44 px validés avec Chrome headless.

## Limites restantes

- Les valeurs globales du site ne sont pas encore centralisées.
- Aucun composant d'image sécurisé ni dossier d'images organisé n'existe.
- Les données métier bilingues n'existent pas encore.
- Les pages restent des placeholders jusqu'à P4.

## Commit de P3.4

Message : `feat(navbar): add theme and language controls`

Contenu : sélecteurs accessibles et responsive pour les trois préférences de
thème et les deux langues applicatives.

## Prochaine tâche proposée

P3.5 — Configuration globale et médias sécurisés. Créer `src/config/site.js`,
organiser les assets et ajouter un composant d'image avec fallback. Le module
reste verrouillé jusqu'à une nouvelle instruction explicite.

## Deployment blocker

- replace all fictitious profile, resume and contact data before publishing;
- verify both French and English contents;
- replace profile and project placeholder images;
- validate social links and downloadable resume content.
