<!--
  Plan de design sprint – PadelSetPro (focus back-office clubs + app joueur)
-->

# Design Sprint – Plan & livrables

## Objectif

Valider l’expérience utilisateur du back-office organisateur et de l’app joueur avant développement du MVP, en simulant un tournoi type (P100 mixte) avec un club pilote.

## Participants

- **Décideur** : CEO / Product Owner PadelSetPro.
- **Facilitateur** : Product Manager.
- **Design** : UX/UI designer + UX researcher.
- **Tech** : Développeur FE, Développeur BE (disponibles pour contraintes techniques).
- **Experts externes** : 1 juge-arbitre FFT, 1 responsable club, 2 joueurs licenciés.

## Calendrier (5 jours)

| Jour | Focus | Livrables attendus |
| --- | --- | --- |
| **Lundi** | Compréhension & cadrage | Carte d’expérience, objectifs sprint, questions critiques, Lightning talks (tech, FFT, paiements) |
| **Mardi** | Idéation & sélection | Crazy 8’s, storyboard 8 écrans clés, choix solution cible |
| **Mercredi** | Prototypage structure | Wireframes haute fidélité (Figma) : Dashboard club, Wizard tournoi, Planning, Scoring mobile |
| **Jeudi** | Prototypage interactif | Prototype Figma clicable (organisateur & joueur), scénarios test, guides d’entretien |
| **Vendredi** | Tests & synthèse | 5 tests utilisateurs (club/juges/joueurs), synthèse insights, décision Go/No-Go |

## Périmètre écrans prototypés

1. **Dashboard organisateur** : KPI, alertes, raccourcis convocation.
2. **Assistant création tournoi** (4 étapes).
3. **Vue inscriptions** : table filtrable, promotions liste d’attente.
4. **Planning multi-courts** : drag & drop, blocage créneaux.
5. **Envoi convocations** : modale segmentation + preview email/SMS.
6. **Interface juge (mobile/tablette)** : saisie score, notification retard.
7. **App joueur** : convocation, tableau live, bouton notifier retard.
8. **Microsite public** : tableau résultats + classement.

## Livrables design

- **Figma** : fichier structuré (pages `Moodboard`, `Design System`, `Flows`, `Prototype`).
- **Design system initial** : palette, typographies, composants (boutons, badges statut, listes).
- **Prototype interactif** : flux organisateur (création → convocation) + flux joueur (inscription → suivi match).
- **Documentation** : annotations d’interactions, contraintes responsive, accessibilité (WCAG AA).

## Plan de tests utilisateurs

- **Recrutement** : 2 responsables clubs, 1 juge-arbitre, 2 joueurs.
- **Scénarios** :
  - Organisateur : créer tournoi, gérer 2 inscriptions, générer planning, envoyer convocation.
  - Juge : saisir score, notifier retard.
  - Joueur : consulter convocation, vérifier résultat live.
- **Méthodologie** : test modéré à distance (Zoom) + enregistrement vidéo, grille d’observation (objectifs, obstacles, émotions).
- **Indicateurs** : temps d’accomplissement, satisfaction (échelle 1-5), verbatim.
- **Analyse** : matrice Insights (Succès / Frictions / Idées) + priorisation MoSCoW.

## Préparation & outils

- **Avant sprint** : 
  - Rassembler données existantes (process actuel clubs).
  - Préparer benchmark (PadelClub, TenUp FFT).
  - Configurer board Miro pour collaboration.
  - Sélectionner palette initiale inspirée branding Padel SetPro.
- **Outils** : Figma, FigJam/Miro, Notion pour documentation, Maze/Lookback pour tests, Slack canal `#design-sprint`.

## Plan post-sprint

- Jour +1 : restitution aux parties prenantes (compte rendu + enregistrements).
- Jour +3 : intégration feedback dans roadmap (stories à ajuster).
- Jour +5 : rédaction spécifications UI (Figma ⇄ Storybook), création tickets développement Sprint 1.
- Jour +7 : lancement dev sur backlog validé avec annotations Figma.

## Risques & atténuations

- **Disponibilité experts** : bloquer créneaux 2 semaines à l’avance.
- **Charge design** : préparer kit UI de base avant J3.
- **Couverture tests** : prévoir plan B test asynchrone si absence participant.
- **Alignement tech** : daily check de 30 min avec devs pour vérifier faisabilité.

---

Ce plan doit être validé par la direction produit puis communiqué à l’équipe au moins une semaine avant le sprint pour garantir la disponibilité des intervenants et la préparation des supports.
