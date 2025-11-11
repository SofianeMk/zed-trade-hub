<!--
  Backlog produit – PadelSetPro (fonctionnalités clubs)
-->

# Backlog priorisé – Clubs (PadelSetPro)

## Vue d’ensemble

- **Vision MVP** : permettre à un club d’organiser un tournoi complet (création > inscriptions payantes > planning > live scoring > résultats).
- **Hypothèses** : 3 premiers clubs pilotes, un juge-arbitre référent, cycle de release toutes les 2 semaines.
- **Capacité** : équipe de 6 (PM, UX, 2 FE, 2 BE) + QA partagée.

## Épics & objectifs

| Épic | Objectif | Indicateurs succès | Dépendances |
| --- | --- | --- | --- |
| E1. Création & publication de tournoi | Créer, configurer et publier un tournoi multi-épreuves | 100 % tournois pilotes publiés sans support | Auth, modèle club |
| E2. Inscriptions & paiements | Collecter les inscriptions FFT avec paiement sécurisé | >90 % inscriptions payées en ligne | Stripe, FFT |
| E3. Planning & logistique | Générer et ajuster un planning multi-courts | <10 min pour planifier un P100 | E1 |
| E4. Live scoring & communication | Mettre à jour en temps réel scores & notifications | 95 % matchs saisis en <5 min | E2, E3 |
| E5. Reporting & post-tournoi | Fournir classements, stats, microsite | Rapports envoyés <24h | E4 |
| E6. Personnalisation & rôles | Brand club + gestion permissions | 100 % clubs avec branding actif | E1 |
| E7. Automatisations & intégrations | Relances, connecteurs, API | 50 % convocations auto | E2, E3 |

## Découpage en releases

### Release 0 – Foundations (Sprint 0)
- Setup monorepo, design system initial, authentification, base données.
- Migration initiale tables `Club`, `Utilisateur`, `Tournoi`.
- Critère : login club + accès dashboard vide.

### Release 1 – MVP Tournoi (Sprints 1-2)
- Stories clés : US1, US2, US3, US21.
- Deliverables : assistant création, publication, recherche FFT basique, invitation staff.
- Critère : un club peut publier un tournoi et inviter un juge.

### Release 2 – Inscriptions payantes (Sprints 2-3)
- Stories : US4, US5, US6, US7, US8.
- Stripe Checkout intégrée, liste d’attente automatique, dashboard finances.
- Critère : 20 équipes peuvent s’inscrire/tester paiement test mode.

### Release 3 – Planning intelligent (Sprints 3-4)
- Stories : US9, US10, US11.
- Générateur planning, drag-and-drop, blocage courts.
- Critère : planning complet éditable + export pdf planning.

### Release 4 – Live & communication (Sprints 5-6)
- Stories : US12, US13, US14, US15, US16.
- App juge scoring, notifications multi-canaux, tirages final.
- Critère : simulateur live sur tournoi test, push/email envoyés.

### Release 5 – Post-tournoi (Sprint 7)
- Stories : US17, US18, US19.
- Export FFT, stats dashboard, microsite public.
- Critère : microsite accessible publiquement, rapport PDF généré.

### Release 6 – Personnalisation & automatisations (Sprints 8+)
- Stories : US20, US22 + intégrations roadmap.
- Branding, automatisations relances, connecteurs.
- Critère : club configure charte + automation active.

## Planification sprint détaillée (indicative)

| Sprint | Durée | Épic focus | Stories principales | Notes |
| --- | --- | --- | --- | --- |
| 0 | 2 sem | Foundations | Setup auth, modèle données, CI/CD, design tokens | Tech spikes Stripe/FFT |
| 1 | 2 sem | E1 | US1, US2 | Tests UX assistant + doc config club |
| 2 | 2 sem | E1 + E2 | US3, US4 | Stripe sandbox, import FFT |
| 3 | 2 sem | E2 | US5, US6, US7 | Dashboard finances M1 |
| 4 | 2 sem | E3 | US9, US10 | Algorithme planning initial |
| 5 | 2 sem | E3 + E4 | US11, US12 | Notifications emails, drag-drop |
| 6 | 2 sem | E4 | US13, US14, US15 | App juge PWA, SSE |
| 7 | 2 sem | E4 + E5 | US16, US17 | Microsite, export FFT |
| 8 | 2 sem | E5 | US18, US19 | Analytics, rapports |
| 9 | 2 sem | E6 | US20, US21 | Branding et rôles avancés |
| 10 | 2 sem | E7 | US22 + automatisations | Intégrations externes |

## Backlog détaillé (extrait par story)

### Sprint 1 – Assistant tournoi
- T1. Créer structure Wizard (React) + Stepper design.
- T2. API `POST /tournaments` + validations.
- T3. Stockage brouillon (auto-save).
- T4. Composant aperçu + publication.
- T5. Tests E2E Cypress scénario création.

### Sprint 2 – FFT & liste d’attente
- T6. Service `FFTSync` mock + recherche.
- T7. Écran gestion inscriptions (table, filtres).
- T8. Automatisation liste d’attente (queue BullMQ).
- T9. Emails confirmation (Brevo template).
- T10. Tests intégration Stripe (webhook).

### Sprint 4 – Planning
- T18. Algorithme `SchedulingService` (heuristique greedy).
- T19. Vue calendrier (React BigCalendar ou custom).
- T20. Blocage créneau (UI + API `POST /courts/{id}/block`).
- T21. Alerte conflits (affichage + logs).

### Sprint 6 – Live scoring
- T28. UI tablette juge (saisie set-by-set).
- T29. Endpoint `POST /matches/{id}/score`.
- T30. SSE/Websocket update front joueur.
- T31. Push FCM (match update).
- T32. Tests charge 100 matchs simultanés (k6).

*(Étendre selon besoin dans Jira/Linear).*

## Risques & mitigation

- **FFT API** : accès différé → prévoir fallback CSV + import manuel.
- **Stripe Connect** : conformité KYC → anticiper collect info clubs.
- **Adoption juge-arbitre** : ergonomie tablette critique → tests utilisateurs Sprint 5.
- **Notifications SMS** : coût → définir quotas + opt-in.
- **Multi-tenant** : isolation données → test automations sur environnement staging.

## KPI de suivi

- Taux de complétion assistant tournoi.
- Ratio inscriptions payées vs en attente.
- Temps moyen de planification.
- % scores saisis <5 min.
- Satisfaction club (NPS) après tournoi pilote.

---

Ce backlog sert de base pour configurer l’outil de gestion projet et détailler les tâches techniques/UX par sprint. Ajuster priorités selon retours des clubs pilotes et contraintes du planning.
