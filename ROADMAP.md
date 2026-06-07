# Roadmap du portfolio

## Règles de progression

- Un seul module peut être actif.
- Chaque module produit un commit atomique.
- `TASKS.md` et `HANDOFF.md` sont mis à jour avant chaque commit.
- Le module suivant reste verrouillé jusqu'à une nouvelle instruction.
- Les données personnelles restent fictives jusqu'à validation explicite.

## Modules

| ID | Statut | Commit attendu | Objectif et critères d'acceptation |
| --- | --- | --- | --- |
| P0 | Terminé | `docs(process): add portfolio steering files` | Créer les fichiers de pilotage, consigner l'état initial et valider lint/build. |
| P1 | Terminé | `feat(routes): add portfolio page routing` | Installer `react-router`; créer le routage déclaratif, les pages temporaires, les titres dynamiques et la 404. Toutes les routes doivent compiler et être accessibles. |
| P2 | Terminé | `feat(layout): add responsive portfolio shell` | Créer `MainLayout`, header, navigation desktop/mobile, footer, liens actifs et retour en haut. Le clavier et les petits écrans doivent être pris en charge. |
| P3 | Terminé | `feat(styles): add modern design system` | Installer Motion; créer variables, styles globaux, primitives communes et animations sobres respectant la réduction des mouvements. |
| P4 | En attente | `feat(data): add editable portfolio content` | Créer les fichiers de données fictives, contrats de projets, coordonnées et placeholders d'images remplaçables. Aucun contenu personnel ne reste dans le JSX. |
| P5 | En attente | `feat(home): add animated portfolio homepage` | Construire le hero, l'image de profil, les compétences mises en avant, les projets vedettes et les CTA. |
| P6 | En attente | `feat(about): add profile and journey page` | Construire la présentation, le parcours, les formations, les objectifs et la philosophie de travail. |
| P7 | En attente | `feat(skills): add categorized skills page` | Afficher les compétences par catégorie avec des niveaux éditables et des animations discrètes. |
| P8 | En attente | `feat(projects): add data-driven project listing` | Construire les cartes, technologies, liens et filtres par catégorie pour ARMS, H-Market, BusTix et les futurs projets. |
| P9 | En attente | `feat(project-detail): add project case study routes` | Construire les détails par slug, le cas inconnu, les captures et la navigation précédent/suivant. |
| P10 | En attente | `feat(resume): add client-side pdf resume` | Installer `@react-pdf/renderer`; créer la page CV, le document A4 fictif et son téléchargement chargé à la demande. |
| P11 | En attente | `feat(contact): add honest frontend contact flow` | Créer les coordonnées, réseaux, formulaire accessible, `mailto:` et copie du message sans faux envoi serveur. |
| P12 | En attente | `chore(app): stabilize portfolio experience` | Vérifier accessibilité, responsive, performances, liens, métadonnées, fallback SPA, lint, build et documentation finale. |

## Dépendances entre modules

- P1 dépend de P0.
- P2 dépend de P1.
- P3 dépend de P2.
- P4 dépend de P3.
- P5 à P11 dépendent des fondations P1 à P4.
- P9 dépend spécifiquement de P8.
- P10 reste isolé derrière un chargement différé.
- P12 dépend de tous les modules fonctionnels.

## Design system validé

### Couleurs

| Rôle | Valeur |
| --- | --- |
| Fond | `#F7F8FC` |
| Surface | `#FFFFFF` |
| Texte | `#111827` |
| Texte secondaire | `#5F6B7A` |
| Primaire | `#5B5CE2` |
| Accent | `#0F9F8F` |
| Bordure | `#E2E8F0` |

### Primitives

- Typographie système sans ressource distante.
- Espacements : 4, 8, 12, 16, 24, 32, 48, 64 et 96 px.
- Rayons : 10, 16 et 24 px, plus une variante pilule.
- Deux niveaux d'ombre légère.
- Boutons primaire, secondaire et texte.
- Cartes avec bordure, ombre discrète et déplacement maximal de 4 px.
- Transitions comprises entre 160 et 450 ms.
- Conteneur responsive avec largeur maximale commune aux pages.

## Contrôles transversaux

- Navigation clavier et focus visible.
- Contrastes lisibles et zones interactives d'au moins 44 px.
- Affichage mobile, tablette et bureau.
- Textes alternatifs et structure sémantique.
- Réduction des mouvements en CSS et dans Motion.
- Routes directes compatibles avec un fallback SPA documenté.
- Aucune prétention d'envoi serveur sur la page de contact.
- Aucun contenu privé réel ni secret dans le dépôt.
