# Transmission du projet

## État courant

- Date : 8 juin 2026
- Projet : portfolio React multipage
- Branche : `feature`
- Dernier module terminé : P10 - CV et PDF navigateur
- Prochaine tâche planifiée : P11 - Contact frontend
- Prochaine tâche autorisée : aucune sans nouvelle instruction
- Dépendances installées : `react-router`, `motion`, `i18next`,
  `react-i18next`, `@react-pdf/renderer`
- Blocage technique connu : aucun

## Page CV

La route `/resume` affiche maintenant un CV HTML bilingue provenant
exclusivement de `usePortfolioData`. L'aperçu contient :

- le nom, le rôle et le résumé;
- l'email, la disponibilité et la localisation;
- l'expérience et la formation avec dates localisées;
- les compétences regroupées avec niveaux indicatifs;
- les langues;
- un avertissement visible sur le caractère fictif des données.

Le document HTML reste clair dans les deux thèmes afin de conserver une
apparence proche du rendu imprimable.

## Génération PDF

`@react-pdf/renderer` 4.5.1 génère le document côté navigateur. Le fichier :

- suit automatiquement la langue active;
- réutilise les mêmes données que l'aperçu HTML;
- utilise `portfolio-resume.pdf` depuis `src/config/site.js`;
- contient des métadonnées de titre, auteur, sujet et langue;
- reste clair pour l'impression.

`ResumePdfDownload` et `ResumeDocument` sont chargés avec `React.lazy`. Le
moteur PDF est isolé dans un chunk de 1,43 MB qui n'est pas demandé sur les
autres routes. Le bundle principal reste à 421,97 kB.

## Vérifications de P10

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16.
- Aperçu français clair validé à 1440 x 1000.
- Aperçu anglais sombre validé à 390 x 844.
- Aucun débordement horizontal.
- Réduction des mouvements validée.
- Chunk PDF absent de l'accueil et chargé uniquement sur `/resume`.
- Blob français : `application/pdf`, `%PDF-`, 5 268 octets.
- Blob anglais : 5 073 octets.
- Nom de téléchargement : `portfolio-resume.pdf`.
- Contenu des deux langues extrait et contrôlé avec `pdftotext`.
- Aucune exception JavaScript détectée pendant la génération.
- `git diff --check` : réussi.

## Dépendance et risque

React PDF évite de maintenir un fichier statique distinct pour chaque langue.
Son coût principal est son poids important. Le chargement différé limite ce
coût à la seule page CV; aucune autre dépendance n'a été ajoutée.

## Modification locale hors P10

`src/components/skills/SkillGroupCard.jsx` est modifié localement en dehors du
périmètre de P10. Cette modification n'est ni annulée ni incluse dans le commit
du module.

## Limites restantes

- Le profil, les expériences, la formation et le CV restent fictifs.
- Le nom de fichier et le contenu doivent être validés avant publication.
- La page Contact reste à construire.
- Les images et liens sociaux doivent encore être remplacés ou validés.

## Commit de P10

Message : `feat(resume): add client-side pdf resume`

Contenu : aperçu CV bilingue, génération PDF différée, document imprimable,
dates localisées, contrats de données et styles responsive.

## Prochaine tâche planifiée

P11 - Contact frontend. Construire les coordonnées, les liens sociaux et un
formulaire accessible qui prépare un email ou copie le message sans simuler
d'envoi serveur. Cette tâche reste verrouillée jusqu'à une nouvelle instruction.

## Deployment blocker

- replace all fictitious profile, resume and contact data before publishing;
- verify both French and English contents;
- replace profile and project placeholder images;
- validate social links and downloadable resume content.
