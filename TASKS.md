# Registre des tâches

## Dernier module terminé

**P12.1 - Planification des améliorations UI, médias et liens externes**

Statut : terminé le 8 juin 2026

Commit attendu :
`docs(process): plan navbar media and external links improvements`

### Checklist

- [x] Lire les fichiers de pilotage et vérifier la branche `feature`.
- [x] Vérifier que l'arbre de travail est propre.
- [x] Inspecter les contrôles thème et langue.
- [x] Identifier les limites de style des `<select>` et `<option>` natifs.
- [x] Inspecter le thème, l'i18n et leur persistance.
- [x] Inspecter le contrat et l'assemblage des projets.
- [x] Inspecter les aperçus de l'accueil, de la liste et du détail.
- [x] Inspecter `SafeImage` et les placeholders disponibles.
- [x] Inspecter les contacts, liens sociaux, icônes et URLs existantes.
- [x] Confirmer l'absence d'URL publique validée pour les projets.
- [x] Définir les contrats et migrations de P12.2 à P12.8.
- [x] Mettre à jour uniquement les fichiers de pilotage.
- [x] Exécuter lint, build et les contrôles Git.

### Décisions

- Remplacer les sélecteurs natifs par un `PreferenceDropdown` commun, car le
  rendu des options ouvertes dépend du navigateur et du système.
- Conserver les mécanismes existants de thème et de langue; le nouveau composant
  ne gère que l'interaction et la présentation.
- Ajouter aux projets `previewVariant`, `previewFit`, `liveUrl`,
  `repositoryUrl` et `liveStatus`.
- Utiliser les valeurs par défaut `desktop`, `contain` et `unavailable`.
- Maintenir temporairement l'ancien objet `links` dans l'assembleur pendant la
  migration, puis le supprimer en P12.7.
- Créer `ProjectPreview` autour de `SafeImage` pour l'accueil, la liste et la
  couverture de détail; la galerie reste inchangée.
- Créer des composants SVG locaux avec `currentColor`; ne pas réutiliser le
  sprite incomplet et à couleurs fixes comme contrat applicatif.
- Transformer les liens sociaux en descripteurs filtrables.
- Ne jamais afficher les placeholders `replace-me` et ne jamais inventer d'URL.

### État des données externes

- GitHub et LinkedIn utilisent actuellement des URLs `replace-me`.
- WhatsApp n'est pas configuré.
- L'email `hello@example.com` reste fictif.
- Les démos et dépôts des trois projets sont actuellement à `null`.
- Aucune URL de déploiement ou de dépôt validée n'a été trouvée dans le dépôt.

### Fichiers concernés par P12.1

- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `git diff --check` : réussi.
- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Seuls `ROADMAP.md`, `TASKS.md` et `HANDOFF.md` sont modifiés.
- Aucun fichier applicatif modifié.
- Aucune dépendance ajoutée.
- L'avertissement de taille concerne uniquement le chunk PDF différé déjà
  documenté.

## Prochaine tâche planifiée

**P12.2 - Menu déroulant accessible réutilisable**

Statut : verrouillé jusqu'à une nouvelle instruction.

## Backlog verrouillé

- [ ] P12.2 - Créer le menu accessible commun.
- [ ] P12.3 - Migrer les contrôles thème et langue.
- [ ] P12.4 - Étendre le contrat des projets.
- [ ] P12.5 - Adapter les aperçus mobile et desktop.
- [ ] P12.6 - Ajouter les icônes et descripteurs de contact.
- [ ] P12.7 - Présenter les démos et dépôts des projets.
- [ ] P12.8 - Migrer les données et valider l'ensemble.
- [ ] P13 - Préparation du déploiement SPA.
