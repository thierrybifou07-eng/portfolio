# Registre des tâches

## Dernier module terminé

**P3.1 — Raffiner les fichiers de pilotage**

Statut : terminé le 7 juin 2026

Commit : `docs(process): refine portfolio architecture plan`

### Checklist

- [x] Vérifier la branche `feature` et l'état Git propre.
- [x] Confirmer que P0 à P3 sont terminés et commités.
- [x] Réviser l'architecture attendue dans `AGENTS.md`.
- [x] Autoriser les thèmes clair et sombre sans bibliothèque.
- [x] Autoriser uniquement `i18next` et `react-i18next` pour l'i18n.
- [x] Définir la séparation entre traductions d'interface et données métier.
- [x] Insérer P3.1 à P3.5 avant les données.
- [x] Rendre P4 explicitement bilingue.
- [x] Ajouter les conventions de configuration et d'assets.
- [x] Ajouter les contrôles de stabilisation des deux thèmes et langues.
- [x] Séparer stabilisation P12 et déploiement P13.
- [x] Ajouter le blocage explicite avant déploiement.
- [x] Conserver les pages comme placeholders jusqu'à P4.
- [x] Exécuter lint, build et contrôle du diff.

### Fichiers concernés

- `AGENTS.md`
- `ROADMAP.md`
- `TASKS.md`
- `HANDOFF.md`

### Vérifications

- `npm run lint` : réussi.
- `npm run build` : réussi avec Vite 8.0.16 lors de la relance isolée.
- `git diff --check` : réussi.
- Contrôle de portée : aucun fichier applicatif ou manifeste modifié.

## Prochaine tâche proposée

**P3.2 — Système global de thèmes**

Statut : en attente d'une nouvelle instruction explicite.

## Backlog verrouillé

- [ ] P3.3 — Internationalisation français/anglais.
- [ ] P3.4 — Contrôles thème et langue dans la navbar.
- [ ] P3.5 — Configuration globale et médias sécurisés.
- [ ] P4 — Données bilingues.
- [ ] P5 — Page d'accueil.
- [ ] P6 — Page À propos.
- [ ] P7 — Page Compétences.
- [ ] P8 — Liste des projets.
- [ ] P9 — Détail des projets.
- [ ] P10 — CV et PDF navigateur.
- [ ] P11 — Contact frontend.
- [ ] P12 — Stabilisation.
- [ ] P13 — Préparation du déploiement SPA.

Ne pas commencer P3.2 avant une nouvelle instruction explicite.
