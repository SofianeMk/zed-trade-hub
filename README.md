# PadelSetPro 🎾

![PadelSetPro Logo](public/lovable-uploads/aaea4d69-fbf5-4cb9-8ae8-d227e2d4b234.png)

## 📋 Présentation

**PadelSetPro** est une plateforme web complète dédiée à l'organisation de tournois de padel. Elle permet aux clubs et aux juges-arbitres de gérer un événement de A à Z : inscriptions, paiements, planning, saisie des scores, communication avec les participants et génération des classements finaux.

### 🎯 Objectifs principaux

- **Simplifier l'organisation** : Automatiser toutes les tâches chronophages liées à l'organisation de tournois
- **Améliorer l'expérience joueur** : Offrir une interface claire pour s'inscrire, consulter les tableaux et suivre les résultats en temps réel
- **Professionnaliser la gestion** : Fournir des outils professionnels aux clubs de padel

## ✨ Fonctionnalités principales

### 📥 Avant le tournoi

- ✅ **Inscriptions en ligne** : Formulaire d'inscription simplifié avec liste d'attente automatique
- ✅ **Import FFT** : Import automatique des licenciés FFT via moteur de recherche
- ✅ **Paiements sécurisés** : Encaissement via Stripe avec remboursements automatisés
- ✅ **Simulation de tournois** : Génération automatique des tableaux et planification des matchs
- ✅ **Convocations automatiques** : Envoi automatique par email/SMS/push
- ✅ **Gestion des têtes de série** : Calcul automatique du poids des équipes

### 🏆 Pendant le tournoi

- ✅ **Saisie des scores en temps réel** : Interface intuitive pour la saisie des scores
- ✅ **Mise à jour automatique** : Tableaux et poules mis à jour instantanément
- ✅ **Affichage en direct** : Possibilité d'afficher sur écrans du club
- ✅ **Multi-épreuves** : Gestion de plusieurs épreuves simultanées
- ✅ **Tirage automatique** : Organisation automatique des phases finales
- ✅ **Gestion des imprévus** : Reprogrammation automatique en cas d'intempérie, blessure, etc.

### 🏁 Après le tournoi

- ✅ **Classements finaux** : Génération automatique des résultats
- ✅ **Statistiques détaillées** : Historique des matchs, performances par joueur
- ✅ **Export de données** : Export PDF, Excel, ou via API
- ✅ **Publication en ligne** : Microsite dédié pour chaque tournoi
- ✅ **Rapports financiers** : Suivi automatisé des revenus et paiements

### 🎨 Personnalisation

- ✅ **White-label** : Personnalisation complète aux couleurs du club
- ✅ **Branding** : Logo et URL personnalisés
- ✅ **Multi-plateformes** : Web responsive + applications iOS/Android

## 🛠 Technologies utilisées

Ce projet est construit avec :

- **Vite** - Build tool ultra-rapide
- **TypeScript** - JavaScript typé pour plus de robustesse
- **React** - Library UI moderne et performante
- **shadcn/ui** - Composants UI élégants et accessibles
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Gestion du routing
- **React Query** - Gestion des requêtes et du cache
- **date-fns** - Manipulation des dates
- **Lucide React** - Icônes modernes

## 📦 Installation et développement

### Prérequis

- Node.js 18+ et npm installés ([installer avec nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

```bash
# Cloner le repository
git clone <YOUR_GIT_URL>

# Naviguer dans le dossier du projet
cd padelsetpro

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Scripts disponibles

```bash
npm run dev          # Démarre le serveur de développement
npm run build        # Compile le projet pour la production
npm run preview      # Prévisualise la version de production
npm run lint         # Vérifie le code avec ESLint
```

## 🗂 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── ui/             # Composants UI de base (shadcn/ui)
│   ├── Navbar.tsx      # Barre de navigation
│   └── Footer.tsx      # Pied de page
├── pages/              # Pages de l'application
│   ├── Index.tsx       # Page d'accueil
│   ├── Services.tsx    # Page des fonctionnalités et tarifs
│   ├── About.tsx       # À propos
│   ├── FAQ.tsx         # Questions fréquentes
│   ├── Contact.tsx     # Page de contact
│   ├── Login.tsx       # Connexion/Inscription
│   ├── dashboard/      # Tableaux de bord
│   │   └── ClubDashboard.tsx
│   ├── tournaments/    # Gestion des tournois
│   │   ├── CreateTournament.tsx
│   │   ├── TournamentDetails.tsx
│   │   └── TournamentRegister.tsx
│   ├── scores/         # Saisie des scores
│   │   └── ScoreEntry.tsx
│   ├── analytics/      # Statistiques
│   │   └── Analytics.tsx
│   └── legal/          # Pages légales
├── hooks/              # Hooks React personnalisés
├── lib/                # Utilitaires et helpers
└── App.tsx            # Composant racine avec routing
```

## 🎨 Pages principales

### Pages publiques

1. **Accueil** (`/`) - Présentation de PadelSetPro avec toutes les fonctionnalités
2. **Fonctionnalités & Tarifs** (`/services`) - Liste détaillée des fonctionnalités et plans tarifaires
3. **À propos** (`/about`) - Histoire et valeurs de PadelSetPro
4. **FAQ** (`/faq`) - Questions fréquentes organisées par catégories
5. **Témoignages** (`/testimonials`) - Avis des clubs et joueurs
6. **Contact** (`/contact`) - Formulaire de contact

### Pages d'authentification

7. **Connexion/Inscription** (`/login`) - Authentification pour clubs, joueurs et arbitres

### Interfaces clubs

8. **Dashboard Club** (`/dashboard/club`) - Vue d'ensemble des tournois et statistiques
9. **Créer un tournoi** (`/tournaments/create`) - Formulaire de création de tournoi
10. **Détails du tournoi** (`/tournaments/:id`) - Page complète d'un tournoi
11. **Saisie des scores** (`/scores`) - Interface de saisie en temps réel
12. **Statistiques** (`/analytics`) - Analyses détaillées et performances

### Interfaces joueurs

13. **Inscription au tournoi** (`/tournaments/:id/register`) - Formulaire d'inscription et paiement

## 🎯 Tarifs

### Plan Starter - 49€ par tournoi
- Jusqu'à 32 équipes
- 1 format de jeu
- Inscriptions en ligne
- Paiements Stripe
- Tableaux automatiques
- Scores en temps réel

### Plan Pro - 149€ par mois
- Tournois illimités
- Jusqu'à 128 équipes par tournoi
- Tous les formats de jeu
- Multi-épreuves
- Personnalisation white-label
- Statistiques avancées
- Notifications SMS incluses

### Plan Enterprise - Sur devis
- Tout du plan Pro
- Nombre d'équipes illimité
- API dédiée
- Intégrations personnalisées
- Formation sur site
- Support dédié 24/7

## 🚀 Roadmap

### Phase 1 - MVP (Terminé) ✅
- [x] Pages publiques et présentation
- [x] Système d'authentification
- [x] Dashboard clubs
- [x] Création de tournois
- [x] Inscription des joueurs
- [x] Saisie des scores
- [x] Statistiques et classements

### Phase 2 - Intégrations (À venir)
- [ ] Intégration Stripe pour les paiements
- [ ] Système de notifications (email/SMS/push)
- [ ] Générateur de tableaux et poules automatique
- [ ] API REST complète

### Phase 3 - Avancé (À venir)
- [ ] Application mobile iOS/Android
- [ ] Intégration FFT
- [ ] Live scoring avec websockets
- [ ] Module de réservation de courts
- [ ] Marketplace pour les équipements

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence privée. Tous droits réservés.

## 📞 Contact

Pour toute question ou demande de démo, contactez-nous via le formulaire de contact sur le site.

---

**Développé avec ❤️ par l'équipe PadelSetPro**
