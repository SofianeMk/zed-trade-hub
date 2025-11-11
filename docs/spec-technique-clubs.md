<!--
  Spécification technique initiale – PadelSetPro
  Périmètre : fonctionnalités clubs / organisateurs
-->

# Spécification technique – Clubs (PadelSetPro)

## 1. Architecture globale

- **Clients** : Back-office web (React/Vite), App joueur (PWA + mobile), Tablette juge-arbitre.
- **API Gateway** : REST/GraphQL (NestJS) exposant endpoints sécurisés OAuth2 / JWT.
- **Services** (micro-services légers ou modules NestJS) :
  - `AuthService` (OIDC, rôles, permissions).
  - `TournamentService` (tournois, épreuves, courts, planning).
  - `RegistrationService` (inscriptions, listes d’attente, import FFT).
  - `PaymentService` (Stripe, remboursements, webhooks).
  - `MatchService` (gestion matchs, scores, tableaux).
  - `NotificationService` (email, SMS, push via provider type Brevo/Twilio/FCM).
  - `ReportingService` (statistiques, exports).
- **Données** :
  - PostgreSQL (relations fortes, transactions Stripe).
  - Redis (cache FFT, sessions, queues).
  - S3/Cloud Storage (documents, exports).
- **Messaging / Jobs** : BullMQ (Node + Redis) pour notifications, automatisations, exports.

## 2. Modèle de données (extrait)

| Entité | Attributs clés | Relations |
| --- | --- | --- |
| `Club` | id, nom, logoUrl, paramètres branding | 1-n `Tournoi`, 1-n `Utilisateur` |
| `Utilisateur` | id, rôle (`RESP_CLUB`, `JUGE`, `STAFF`), email, statut | n-1 `Club` |
| `Tournoi` | id, clubId, nom, dates, statut (`BROUILLON`, `OUVERT`, `VERROUILLE`, `TERMINE`) | 1-n `Epreuve`, 1-n `Court`, 1-n `Automation` |
| `Epreuve` | id, tournoiId, nom, catégorie FFT, quotaEquipes | 1-n `Equipe`, 1-n `Match` |
| `Joueur` | id, licenceFFT, nom, classement, clubOrigine | n-n via `EquipeJoueur` |
| `Equipe` | id, epreuveId, seed, statut (`ATTENTE`, `CONFIRMEE`, `FORFAIT`) | n-n `Joueur`, 1-n `Inscription` |
| `Inscription` | id, equipeId, statut (`DRAFT`, `PAYEE`, `ATTENTE`, `REMBOURSEE`), montant | 1-1 `Transaction` |
| `Court` | id, tournoiId, nom, surface, slotsIndisponibles | 1-n `Match` |
| `Match` | id, epreuveId, courtId, horaire, statut (`PLANIFIE`, `EN_COURS`, `TERMINE`) | 1-1 `Score` |
| `Score` | id, matchId, sets (JSONB), vainqueurEquipeId | - |
| `Automation` | id, tournoiId, trigger (`DATE`, `STATUS_CHANGE`), action (`EMAIL`, `SMS`, `PUSH`) | n-1 `Tournoi` |
| `Notification` | id, type, payload, status, destinataires | n-1 `Utilisateur` / `Joueur` |

## 3. Endpoints principaux (REST)

Base : `/api/v1`

- **Tournois**
  - `POST /tournaments` – créer (roles: RESP_CLUB).
  - `GET /tournaments/{id}` – détails (permissions contextuelles).
  - `PATCH /tournaments/{id}` – mise à jour.
  - `POST /tournaments/{id}/publish` – ouverture inscriptions.
- **Épreuves & courts**
  - `POST /tournaments/{id}/events` – créer une épreuve.
  - `POST /tournaments/{id}/courts` – créer un court / importer.
  - `POST /tournaments/{id}/courts/{courtId}/block` – ajouter indisponibilité.
- **Inscriptions**
  - `POST /events/{id}/registrations` – inscrire une équipe.
  - `GET /events/{id}/registrations` – liste + filtres (statut, paiement).
  - `POST /registrations/{id}/promote` – passer de liste d’attente à confirmée.
  - `DELETE /registrations/{id}` – désinscrire / forfait (déclenche remboursement).
- **Paiements**
  - `POST /payments/checkout` – créer session Stripe.
  - `POST /payments/webhook` – recevoir événements Stripe (signés).
- **Planning**
  - `POST /events/{id}/schedule/generate` – génération automatique.
  - `PATCH /matches/{id}` – replanifier (court/horaire).
  - `POST /matches/{id}/notify` – notifier changement.
- **Scores**
  - `POST /matches/{id}/score` – saisir score live (juge-arbitre).
  - `POST /events/{id}/bracket/generate` – tableau final.
- **Reporting**
  - `GET /tournaments/{id}/stats` – KPI, analytics.
  - `GET /tournaments/{id}/exports/fft` – export officiel.

Endpoints publics pour l’app joueur (READ only, cache CDN) :
- `GET /public/tournaments` – liste des tournois ouverts.
- `GET /public/tournaments/{slug}` – détails + planning.
- `GET /public/matches/{id}/live` – flux score temps réel (SSE/websocket).

## 4. Sécurité & rôles

- Authentification via OAuth2 (password, magic link ou SSO club).
- JWT Access (15 min) + Refresh (7 jours), rotation.
- Scopes par rôle :
  - `RESP_CLUB` : tous modules du club.
  - `JUGE` : matches, planning, notifications live.
  - `STAFF` : lecture + actions limitées (convocations).
- Accès app joueur via compte utilisateur ou guest (lecture seule).
- Protection CSRF sur back-office, rate limiting sur endpoints publics, audit log (création/édition planning, scores).

## 5. Intégrations externes

- **FFT** : API ou import CSV (fallback) – module `FFTSync` avec cache Redis, tâches nocturnes.
- **Stripe** : Checkout, Payment Intent, refunds, connect (si multi-clubs). Stockage webhook durable (idempotency).
- **Providers notification** : 
  - Email (Brevo, Sendgrid) via SMTP/API.
  - SMS (Twilio).
  - Push (Firebase Cloud Messaging pour PWA/app).
- **Réservations courts** (phase ultérieure) : connecteurs REST (Doinsport, Anybuddy) via service `IntegrationHub`.

## 6. Automatisations & jobs

- File BullMQ :
  - `send-notification` (email/SMS/push).
  - `promotion-waiting-list`.
  - `generate-reports`.
  - `sync-fft`.
- Déclencheurs (`trigger`) : `TIME_BEFORE_MATCH`, `REGISTRATION_PENDING > 48h`, `TOURNAMENT_STATUS_CHANGE`.
- Gestion des échecs avec retry + dead-letter queue + alerting (PagerDuty/Slack).

## 7. Observabilité & qualité

- Logs structurés (pino) + agrégation (Datadog/Loki).
- Monitoring : métriques Prometheus (latence API, jobs).
- Tests :
  - Unitaires (Jest) par module.
  - Intégration (Supertest + base Postgres ephemeral).
  - E2E (Cypress) pour back-office, Playwright pour PWA.
- Pipeline CI :
  - Lint (ESLint, Stylelint).
  - Tests unitaires / intégrations.
  - Build front + backend.
  - Déploiement staging (preview) puis production via approbation.

## 8. Performance & scalabilité

- Caching (Redis) pour données publiques (tournois, scores live).
- Websocket ou SSE pour scores live (with fallback polling).
- Partitionnement par club (multi-tenant logique : `club_id` obligatoire).
- Feature flags (LaunchDarkly ou maison) pour déploiements progressifs.

## 9. Conformité & sécurité

- Stockage chiffré des champs sensibles (Stripe customer id, coordonnées).
- RGPD :
  - Consentement notifications.
  - Droit à l’effacement (suppression joueur).
  - Registre traitements.
- Sauvegardes Postgres (point-in-time, retention 30 jours).
- Tests d’intrusion / revues sécurité avant go-live.

## 10. Roadmap technique (focus clubs)

1. **Sprint 0**
   - Setup monorepo (pnpm) ou repos séparés.
   - Infrastructure initiale (Terraform modules, environnements dev/staging).
   - Auth + gestion rôles minimal.
2. **Sprint 1-2**
   - CRUD tournois/épreuves/courts.
   - Intégration Stripe (test mode).
   - Import FFT (mock).
3. **Sprint 3-4**
   - Génération planning + vue calendrier.
   - Gestion listes d’attente + promotions automatiques.
4. **Sprint 5**
   - Saisie scores live, tableau final, notifications.
   - SSE/Websocket pour app joueur.
5. **Sprint 6**
   - Dashboard finances, exports FFT, rapport statistiques.
6. **Sprint 7+**
   - Personnalisation branding, automatisations, connecteurs externes.

---

Ce document constitue la base de travail pour l’équipe produit & tech. Il devra être affiné après ateliers de cadrage avec les clubs pilotes et complété par des spécifications détaillées (OpenAPI, diagrammes UML, maquettes UI).
