# Registre des tâches

## Dernier module terminé

**P12.6 - Icônes et descripteurs de contact**

Statut : terminé le 8 juin 2026

Commit attendu : `feat(contact): add accessible social link icons`

### Checklist

- [x] Remplacer l'objet `socialLinks` par des descripteurs gelés.
- [x] Prévoir GitHub, LinkedIn, WhatsApp et Email.
- [x] Utiliser `null` pour les URLs inconnues.
- [x] Conserver l'email fictif existant sans ajouter de donnée personnelle.
- [x] Ajouter GitHubIcon.
- [x] Ajouter LinkedInIcon.
- [x] Ajouter WhatsAppIcon.
- [x] Ajouter EmailIcon.
- [x] Ajouter ExternalLinkIcon.
- [x] Créer un registre centralisé des icônes.
- [x] Utiliser `currentColor` et masquer les icônes décoratives.
- [x] Filtrer les descripteurs sans URL.
- [x] Sécuriser les liens externes avec `noopener noreferrer`.
- [x] Conserver texte, focus visible et cibles de 44 px.
- [x] Adapter les libellés français et anglais.
- [x] Vérifier clair, sombre, clavier et responsive.
- [x] Exécuter lint, build et les contrôles Git.

### Descripteurs livrés

```js
{
  id,
  label,
  url,
  icon,
  external,
}
```

GitHub, LinkedIn et WhatsApp sont configurés avec `url: null`. Email réutilise
`mailto:hello@example.com`, déjà présent comme donnée fictive.

Le composant filtre toute entrée sans URL. Aucun placeholder `replace-me`
n'existe encore dans les données exécutables.

### Icônes

Le registre local contient :

- `email`;
- `external`;
- `github`;
- `linkedin`;
- `whatsapp`.

Les SVG utilisent `currentColor`, `aria-hidden="true"` et
`focusable="false"`. Le texte du lien reste toujours visible.

### Fichiers concernés

- `src/config/site.js`
- `src/data/index.js`
- `src/components/icons/GitHubIcon.jsx`
- `src/components/icons/LinkedInIcon.jsx`
- `src/components/icons/WhatsAppIcon.jsx`
- `src/components/icons/EmailIcon.jsx`
- `src/components/icons/ExternalLinkIcon.jsx`
- `src/components/icons/iconRegistry.js`
- `src/components/contact/ContactDetails.jsx`
- `src/data/locales/fr/content.js`
- `src/data/locales/en/content.js`
- `src/styles/contact.css`
- `AGENTS.md`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- `git diff --check` : réussi.
- Assemblage des quatre descripteurs et cinq icônes validé.
- Aucun placeholder social trouvé dans les sources exécutables.
- Français clair : un lien Email, icône 18 px, cible 45 px.
- Anglais sombre : libellé `Contact links`, couleur héritée correcte.
- Mobile sombre : aucun débordement horizontal.
- Les icônes sont décoratives et non focalisables.
- Email ne crée ni nouvel onglet ni attribut `rel`.
- Chemin externe isolé : `_blank`, `noopener noreferrer` et complément
  accessible validés.
- Aucune dépendance ajoutée.
- L'avertissement Vite concerne uniquement le chunk PDF différé.

## Dernier module précédent

**P12.5 - Aperçus projet mobile et desktop**

Commit : `da2554f feat(projects): support mobile and desktop previews`

## Prochaine tâche planifiée

**P12.7 - Liens publics et dépôts des projets**

Statut : verrouillé jusqu'à une nouvelle instruction.

## Backlog verrouillé

- [ ] P12.7 - Présenter les démos et dépôts des projets.
- [ ] P12.8 - Migrer les données et valider l'ensemble.
- [ ] P13 - Préparation du déploiement SPA.
