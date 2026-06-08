# Registre des tâches

## Dernier module terminé

**P11 - Contact frontend**

Statut : terminé le 8 juin 2026

Commit : `feat(contact): add honest frontend contact flow`

### Checklist

- [x] Remplacer le placeholder de la route `/contact`.
- [x] Utiliser les données bilingues de `usePortfolioData`.
- [x] Afficher l'email, la localisation et la disponibilité.
- [x] Afficher les liens GitHub et LinkedIn centralisés.
- [x] Signaler que les liens externes ouvrent un nouvel onglet.
- [x] Construire un formulaire avec quatre champs requis.
- [x] Utiliser la validation HTML native.
- [x] Ajouter les attributs d'autocomplétion pertinents.
- [x] Préparer un vrai lien `mailto:` encodé.
- [x] Inclure le nom et l'email de réponse dans le corps du message.
- [x] Copier localement le message sans accès serveur.
- [x] Prévoir un fallback de copie sans API Clipboard.
- [x] Annoncer le succès ou l'échec de copie avec `role="status"`.
- [x] Ne jamais afficher de faux succès d'envoi.
- [x] Préserver un unique `h1` et des sections nommées.
- [x] Conserver des cibles interactives d'au moins 44 px.
- [x] Vérifier français, anglais, clair, sombre et mouvements réduits.
- [x] Vérifier mobile et bureau sans débordement horizontal.
- [x] Exécuter lint, build et les contrôles navigateur ciblés.

### Comportement du formulaire

Le bouton principal ouvre le client mail avec :

- l'adresse fictive centralisée `hello@example.com`;
- le sujet saisi et encodé;
- le nom, l'email de réponse et le message dans le corps.

Le bouton secondaire copie ce même contenu. La validation est exécutée avant
les deux actions. Aucun état ne prétend que le message a été envoyé.

### Fichiers concernés

- `src/pages/ContactPage.jsx`
- `src/components/contact/ContactDetails.jsx`
- `src/components/contact/ContactForm.jsx`
- `src/features/contact/contactMessage.js`
- `src/features/contact/copyText.js`
- `src/styles/contact.css`
- `src/data/locales/fr/content.js`
- `src/data/locales/en/content.js`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Formulaire vide déclaré invalide.
- Nom, email, sujet et message requis.
- Copie exacte du message validée avec une API Clipboard isolée de test.
- État français `Message copié` validé.
- Chemin d'échec anglais validé.
- Encodage UTF-8 du sujet et du corps `mailto:` validé.
- Deux liens sociaux avec destination et nouvel onglet validés.
- Thème clair français validé à 1440 x 1000.
- Thème sombre anglais validé à 390 x 844.
- Réduction des mouvements validée.
- Aucun débordement horizontal aux deux formats.
- Aucune exception JavaScript détectée.
- `git diff --check` : réussi.

## Modifications locales hors module

Les fichiers suivants contiennent des changements distincts liés aux projets et
restent hors du commit P11 :

- `src/data/shared/projects.js` : renommage de `categoryId` vers `Id`;
- `src/data/index.js` : compatibilité d'assemblage pour ce renommage;
- `src/data/contracts.js` : validation compatible avec `Id`;
- `src/data/locales/en/content.js` : modification distincte du libellé de filtre,
  exclue par indexation partielle.

## Prochaine tâche planifiée

**P12 - Stabilisation**

Statut : en attente d'une nouvelle instruction.

## Backlog verrouillé

- [ ] P12 - Stabilisation.
- [ ] P13 - Préparation du déploiement SPA.
