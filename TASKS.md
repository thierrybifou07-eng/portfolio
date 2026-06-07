# Registre des tâches

## Dernier module terminé

**P10 - CV et PDF navigateur**

Statut : terminé le 8 juin 2026

Commit : `feat(resume): add client-side pdf resume`

### Checklist

- [x] Installer uniquement `@react-pdf/renderer`.
- [x] Remplacer le placeholder de la route `/resume`.
- [x] Utiliser les données bilingues assemblées par `usePortfolioData`.
- [x] Construire un aperçu HTML sémantique et responsive.
- [x] Afficher profil, coordonnées, expérience et formation.
- [x] Afficher les compétences avec leurs niveaux indicatifs.
- [x] Afficher les langues du CV.
- [x] Conserver un unique `h1` et des sections nommées.
- [x] Ajouter un avertissement explicite sur les données fictives.
- [x] Générer le PDF côté navigateur.
- [x] Faire suivre au PDF la langue active.
- [x] Utiliser le nom de fichier centralisé dans `src/config/site.js`.
- [x] Garder le PDF clair et imprimable dans les deux thèmes.
- [x] Charger React PDF uniquement sur la route CV avec `React.lazy`.
- [x] Fournir un état de préparation pendant la génération.
- [x] Vérifier le type MIME, l'en-tête et le contenu du PDF.
- [x] Vérifier français, anglais, clair, sombre et mouvements réduits.
- [x] Vérifier mobile et bureau sans débordement horizontal.
- [x] Exécuter lint, build et les contrôles navigateur ciblés.

### Dépendance

`@react-pdf/renderer` 4.5.1 résout la génération d'un fichier PDF depuis les
données React existantes. L'alternative du PDF statique a été écartée car elle
dupliquerait le contenu bilingue et pourrait diverger de l'aperçu HTML.

Le principal risque est le poids du moteur PDF. Il est limité par un import
différé : le chunk de 1,43 MB n'est pas demandé sur l'accueil et n'est chargé
que sur `/resume`.

### Fichiers concernés

- `package.json`
- `package-lock.json`
- `src/pages/ResumePage.jsx`
- `src/components/resume/ResumePreview.jsx`
- `src/components/resume/ResumeTimeline.jsx`
- `src/features/resume/ResumeDocument.jsx`
- `src/features/resume/ResumePdfDownload.jsx`
- `src/features/resume/formatResumeDate.js`
- `src/styles/resume.css`
- `src/data/contracts.js`
- `src/data/locales/fr/content.js`
- `src/data/locales/en/content.js`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Bundle principal : 421,97 kB.
- Chunk React PDF différé : 1 431,55 kB.
- Aucun chargement du chunk PDF sur `/`.
- Chargement unique du chunk PDF sur `/resume`.
- Blob français : `application/pdf`, en-tête `%PDF-`, 5 268 octets.
- Blob anglais : 5 073 octets.
- Nom du téléchargement : `portfolio-resume.pdf`.
- Contenu français et anglais extrait et contrôlé avec `pdftotext`.
- Un `h1`, cinq sections, deux expériences et trois groupes de compétences.
- Thème clair français validé à 1440 x 1000.
- Thème sombre anglais validé à 390 x 844.
- Réduction des mouvements validée.
- Aucun débordement horizontal aux deux formats.
- Aucune exception JavaScript pendant la génération.
- `git diff --check` : réussi.

## Modification locale hors module

`src/components/skills/SkillGroupCard.jsx` contient toujours une modification
locale distincte qui n'appartient pas à P10. Elle est conservée telle quelle et
sera exclue du commit de ce module.

## Prochaine tâche planifiée

**P11 - Contact frontend**

Statut : en attente d'une nouvelle instruction.

## Backlog verrouillé

- [ ] P11 - Contact frontend.
- [ ] P12 - Stabilisation.
- [ ] P13 - Préparation du déploiement SPA.
