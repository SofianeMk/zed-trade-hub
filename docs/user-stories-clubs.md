<!--
  Spécifications fonctionnelles – PadelSetPro
  User stories orientées clubs (organisateurs et juges-arbitres)
-->

# User stories – Clubs (PadelSetPro)

## 1. Inscriptions & gestion des équipes

### US1 – Création d’un tournoi
En tant que **responsable de club**, je veux créer un tournoi avec ses catégories, dates et contraintes pour publier rapidement l’événement auprès des joueurs.

#### Critères d’acceptation
```gherkin
Scénario: Création d'un tournoi simple
  Étant donné que je suis authentifié comme responsable de club
  Et que j'ouvre l'assistant "Nouveau tournoi"
  Quand je saisis les informations générales (nom, dates, lieu, catégories FFT, description)
  Et que je valide le récapitulatif
  Alors le tournoi apparaît dans ma liste de tournois avec le statut "Brouillon"
  Et je reçois une confirmation par email
```

### US2 – Publication et ouverture des inscriptions
En tant que **responsable de club**, je veux publier un tournoi et ouvrir les inscriptions en fixant les quotas, tarifs et modes de paiement.

```gherkin
Scénario: Ouverture d'un tournoi aux inscriptions
  Étant donné un tournoi au statut "Brouillon"
  Quand je définis les paramètres d'inscription (nombre d'équipes, frais, date limite)
  Et que j'active l'option "Ouvrir les inscriptions"
  Alors les joueurs voient le tournoi comme "Ouvert" sur l'app
  Et les inscriptions peuvent être soumises
  Et un lien public est généré automatiquement
```

### US3 – Recherche licenciés FFT
En tant que **responsable de club**, je veux rechercher et importer un joueur via son numéro FFT pour éviter les erreurs de saisie.

```gherkin
Scénario: Import d'un licencié FFT
  Étant donné un formulaire d'inscription à un tournoi
  Quand je saisis un numéro de licence valide
  Alors les informations officielles du joueur sont pré-remplies (nom, classement, club)
  Et un badge "Données FFT" est affiché
```

### US4 – Gestion des listes d’attente
En tant que **responsable de club**, je veux gérer automatiquement la liste d’attente lorsque le quota d’équipes est atteint.

```gherkin
Scénario: Passage automatique en liste d'attente
  Étant donné que le quota d'équipes est atteint pour une épreuve
  Quand une nouvelle inscription est confirmée par paiement
  Alors l'équipe est placée en "Liste d'attente"
  Et un email l'informe de son statut
  Et si une place se libère
    Alors l'équipe en tête de liste passe en statut "Confirmée"
    Et reçoit une notification de promotion
```

### US5 – Gestion des paires
En tant que **juge-arbitre**, je veux associer les joueurs en paires ou recomposer une équipe pour équilibrer le tournoi.

```gherkin
Scénario: Recomposition d'une équipe
  Étant donné un tableau des équipes inscrites
  Quand je remplace un joueur indisponible par un joueur de la liste d'attente
  Alors la nouvelle paire est enregistrée
  Et l'ancien joueur reçoit un email d'annulation
  Et le nouveau joueur reçoit une convocation
```

## 2. Paiements & finances

### US6 – Encaissement sécurisé
En tant que **responsable de club**, je veux encaisser les frais d’inscription via Stripe afin de sécuriser les transactions.

```gherkin
Scénario: Paiement réussi
  Étant donné que je finalise une inscription
  Quand je renseigne une carte bancaire valide
  Alors la transaction est acceptée par Stripe
  Et l'inscription passe en statut "Payée"
  Et un reçu est disponible dans l'espace joueur
```

### US7 – Remboursements automatiques
En tant que **responsable de club**, je veux déclencher un remboursement automatique en cas de forfait avant la date limite.

```gherkin
Scénario: Forfait remboursé automatiquement
  Étant donné une équipe confirmée avec paiement
  Et une date limite de remboursement fixée
  Quand l'équipe se désinscrit avant la date limite
  Alors Stripe initie un remboursement
  Et le statut de l'inscription devient "Remboursée"
  Et une notification est envoyée aux joueurs
```

### US8 – Tableau de bord financier
En tant que **responsable de club**, je veux consulter en un coup d’œil les encaissements, remboursements et paiements en attente.

```gherkin
Scénario: Consultation des encaissements
  Étant donné que j'accède au module "Finances"
  Quand je filtre par tournoi
  Alors je vois le montant total perçu, remboursé et en attente
  Et je peux exporter un fichier CSV
```

## 3. Planification & logistique

### US9 – Simulation du planning
En tant que **responsable de club**, je veux simuler automatiquement un planning selon le nombre d’équipes, de courts et la durée des matchs.

```gherkin
Scénario: Génération automatique d'un planning
  Étant donné que j'ai configuré les paramètres logistiques du tournoi
  Quand je clique sur "Générer le planning"
  Alors un planning propose des créneaux pour chaque match
  Et les conflits horaires sont signalés
  Et je peux l'ajuster manuellement
```

### US10 – Gestion multi-courts
En tant que **responsable de club**, je veux bloquer des créneaux sur un court pour gérer les indisponibilités.

```gherkin
Scénario: Blocage ponctuel d'un court
  Étant donné un planning généré
  Quand je clique sur un court et choisis "Bloquer un créneau"
  Alors le créneau apparaît grisé
  Et aucun match ne peut être planifié à cet horaire
```

### US11 – Ajustements manuels drag-and-drop
En tant que **juge-arbitre**, je veux déplacer rapidement un match d’un court à un autre via glisser-déposer.

```gherkin
Scénario: Déplacement manuel d'un match
  Étant donné un match planifié sur le court 1
  Quand je fais glisser la carte du match vers le court 2 au même horaire
  Alors le match est replanifié
  Et les joueurs reçoivent une notification du changement
```

## 4. Communication & convocations

### US12 – Envoi des convocations
En tant que **responsable de club**, je veux envoyer automatiquement les convocations par email et push selon les horaires.

```gherkin
Scénario: Convocations programmées
  Étant donné un planning validé
  Quand j'active l'envoi des convocations
  Alors chaque joueur reçoit un message avec son horaire et court
  Et un rappel est programmé 24 heures avant le match
```

### US13 – Notifications de dernière minute
En tant que **juge-arbitre**, je veux informer instantanément les joueurs d’un changement de court ou de retard.

```gherkin
Scénario: Notification de retard
  Étant donné un match prévu à 15h00
  Quand je déclenche l'action "Notifier retard"
  Alors tous les joueurs concernés reçoivent un push et un SMS
  Et le planning se met à jour avec l'heure de report
```

## 5. Gestion live du tournoi

### US14 – Saisie des scores en direct
En tant que **juge-arbitre**, je veux saisir les scores des matchs via l’application pour mettre à jour automatiquement les tableaux.

```gherkin
Scénario: Saisie d'un score final
  Étant donné que le match est terminé
  Quand je saisis le score set par set et valide
  Alors le tableau principal se met à jour
  Et le prochain match de l'équipe gagnante est créé
  Et les joueurs reçoivent le résultat
```

### US15 – Tirage des qualifiés
En tant que **responsable de club**, je veux générer automatiquement le tableau final à partir des résultats de poules en respectant les têtes de série.

```gherkin
Scénario: Génération du tableau final
  Étant donné que toutes les poules sont terminées
  Quand je lance le tirage des qualifiés
  Alors le tableau final est créé avec les têtes de série au bon emplacement
  Et un rapport PDF est téléchargeable
```

### US16 – Multi-épreuves
En tant que **responsable de club**, je veux gérer plusieurs épreuves (Hommes, Femmes, Mixte) dans un même tournoi.

```gherkin
Scénario: Gestion multi-épreuves
  Étant donné un tournoi avec trois épreuves actives
  Quand je consulte le planning
  Alors je peux filtrer par épreuve
  Et chaque épreuve dispose de ses propres paramètres et convocations
```

## 6. Reporting & post-événement

### US17 – Classements officiels
En tant que **responsable de club**, je veux générer un classement final conforme aux exigences FFT/Beach-Padel.

```gherkin
Scénario: Export du classement officiel
  Étant donné que le tournoi est terminé
  Quand je clique sur "Exporter le classement FFT"
  Alors un fichier conforme au format FFT est généré
  Et je peux le télécharger ou l'envoyer directement à la fédération
```

### US18 – Statistiques et insights
En tant que **responsable de club**, je veux analyser les statistiques du tournoi (participation, recettes, matchs joués).

```gherkin
Scénario: Consultation du rapport statistique
  Étant donné le menu "Analyses"
  Quand je sélectionne un tournoi
  Alors je vois un tableau de bord avec les KPI (nombre d'équipes, taux de remplissage, temps moyen des matchs)
  Et je peux générer un rapport PDF
```

### US19 – Microsite public
En tant que **responsable de club**, je veux publier les résultats sur un microsite personnalisable pour les supporters.

```gherkin
Scénario: Publication des résultats
  Étant donné que le microsite est activé pour un tournoi
  Quand je mets à jour la page "Résultats"
  Alors le site public affiche les scores et classements en temps réel
  Et je peux intégrer une galerie photos
```

## 7. Administration & personnalisation

### US20 – Branding club
En tant que **responsable de club**, je veux personnaliser les couleurs, logo et URL pour refléter l’identité de mon club.

```gherkin
Scénario: Personnalisation de la marque
  Étant donné l'espace "Personnalisation"
  Quand je téléverse mon logo et choisis ma palette de couleurs
  Alors toutes les communications et microsites reprennent ces éléments
  Et l'URL publique inclut mon sous-domaine dédié
```

### US21 – Gestion des rôles
En tant que **responsable de club**, je veux inviter des juges-arbitres ou bénévoles avec des permissions spécifiques.

```gherkin
Scénario: Invitation d'un juge-arbitre
  Étant donné le centre d'administration des utilisateurs
  Quand j'envoie une invitation à un nouvel utilisateur en rôle "Juge-arbitre"
  Alors il reçoit un email d'activation
  Et il ne peut accéder qu'aux modules "Matchs" et "Planning"
```

### US22 – Automatisations
En tant que **responsable de club**, je veux configurer des automatisations (rappels, relances, rapports financiers) déclenchées selon la timeline du tournoi.

```gherkin
Scénario: Configuration d'une relance automatique
  Étant donné un tournoi en préparation
  Quand je crée une automatisation "Relance paiement" déclenchée 48h après inscription non payée
  Alors les équipes concernées reçoivent un email automatique
  Et je peux consulter l'historique des envois
```

---

Ces user stories constituent le backlog initial pour les fonctionnalités orientées clubs et juges-arbitres. Elles serviront de base pour la rédaction des spécifications techniques, des maquettes UX et des plans de test.
