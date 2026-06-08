# Transmission du projet

## État courant

- Date : 8 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P12.2 - Menu accessible commun
- Prochaine tâche planifiée : P12.3 - Migration thème et langue
- Prochaine tâche autorisée : aucune sans nouvelle instruction
- P13 : verrouillée jusqu'à P12.8 et à la levée du blocage de déploiement
- Dépendance ajoutée : aucune
- Blocage technique connu : aucun

## Audit des préférences

`ThemeControl` et `LanguageControl` utilisent des `<select>` natifs. Le bouton
fermé peut être stylé, mais le menu d'options ouvert reste partiellement rendu
par le navigateur et le système. Cela explique le fond clair, la sélection
système et les différences entre plateformes.

P12.2 créera un composant `PreferenceDropdown` léger sans dépendance. Il
exposera `label`, `value`, `options`, `onChange` et `icon`, et gérera les
flèches, `Home`, `End`, `Enter`, `Space`, `Escape`, le clic extérieur, la
sélection tactile et la restitution du focus.

P12.3 l'intégrera aux contrôles existants sans modifier :

- les valeurs de thème `system`, `light` et `dark`;
- le suivi de `prefers-color-scheme`;
- la persistance dans `localStorage`;
- les langues applicatives `fr` et `en`;
- la normalisation et le fallback français.

## Menu commun livré en P12.2

`PreferenceDropdown` est disponible dans
`src/components/layout/PreferenceDropdown.jsx`. Il n'est pas encore utilisé par
la navbar, afin de conserver P12.3 comme migration atomique séparée.

Le composant reçoit `label`, `value`, `options`, `onChange` et `icon`. Il
utilise un bouton déclencheur, une `listbox`, `aria-activedescendant`, des
options sélectionnables, la navigation par flèches, `Home`, `End`, `Enter`,
`Space`, `Escape`, la fermeture sur pointeur extérieur et la restitution du
focus après sélection ou échappement.

Les styles sont dans `src/styles/preference-dropdown.css`, utilisent les
variables existantes, restent compatibles clair/sombre et conservent les cibles
interactives de 44 px.

## Audit des aperçus projet

Les images de l'accueil, de la liste et de la couverture de détail utilisent
actuellement un ratio horizontal fixe et `object-fit: cover`. Les trois projets
référencent le même placeholder horizontal. La galerie possède son propre
contrat et restera hors de la première migration.

Le contrat prévu est :

```js
{
  previewVariant: 'mobile' | 'desktop',
  previewFit: 'contain' | 'cover',
  liveUrl: string | null,
  repositoryUrl: string | null,
  liveStatus: 'available' | 'unavailable' | 'coming-soon',
}
```

Valeurs par défaut : `desktop`, `contain` et `unavailable`.

`ProjectPreview` enveloppera `SafeImage`, préservera le fallback local et sera
utilisé sur l'accueil, la liste et la couverture de détail. La variante mobile
sera verticale, étroite et centrée; la variante desktop utilisera un ratio
horizontal `16 / 10`.

## Audit des liens externes

- `siteConfig.socialLinks` contient seulement GitHub et LinkedIn.
- Les deux URLs utilisent le placeholder explicite `replace-me`.
- WhatsApp n'est pas configuré.
- L'email `hello@example.com` est fictif.
- Tous les liens de démo et de dépôt projet sont `null`.
- Aucune URL publique validée n'a été trouvée dans les sources ou la
  documentation.
- `public/icons.svg` contient quelques symboles, mais pas tous ceux requis et
  certaines couleurs y sont fixes.

Les futures phases utiliseront des composants SVG locaux avec `currentColor` et
un registre centralisé. Les liens sociaux deviendront des descripteurs
filtrables. Toute URL absente ou placeholder restera masquée et documentée.

## Découpage validé

- P12.2 : composant de menu accessible terminé.
- P12.3 : migration thème et langue.
- P12.4 : contrat des aperçus et liens projet.
- P12.5 : composant `ProjectPreview`.
- P12.6 : icônes et descripteurs de contact.
- P12.7 : affichage des démos, dépôts et états.
- P12.8 : migration des projets et validation transversale.

Chaque phase produit un commit unique, met à jour `TASKS.md` et `HANDOFF.md`,
passe lint/build, puis s'arrête avant la suivante.

## Vérifications de P12.2

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Compilation JSX ciblée via `transformWithOxc` : réussie.
- `ThemeControl` et `LanguageControl` restent inchangés.
- Aucune dépendance n'a été ajoutée.
- L'avertissement Vite concerne le chunk PDF différé déjà documenté.

## Vérifications de P12.1

- `git diff --check` : réussi.
- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Seuls les trois fichiers de pilotage sont modifiés.
- Aucun fichier applicatif ou de dépendance n'est modifié.
- L'avertissement Vite concerne le chunk PDF différé déjà documenté.

## Limites et blocage avant déploiement

- Les données de profil, CV et contact restent fictives.
- Les images de profil et projets restent des placeholders.
- Les URLs sociales et projets doivent être fournies et validées.
- Aucun lien placeholder ne doit être publié.
- Aucun déploiement n'est autorisé avant la levée explicite du blocage.

## Prochaine tâche planifiée

P12.3 doit migrer `ThemeControl` et `LanguageControl` vers
`PreferenceDropdown` sans modifier les règles de thème, de langue ou de
persistance. Cette phase reste verrouillée jusqu'à une nouvelle instruction.
