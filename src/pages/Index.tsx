import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ClipboardList,
  CreditCard,
  CalendarCheck,
  Users2,
  Megaphone,
  Trophy,
  Activity,
  GitBranch,
  AlertTriangle,
  BarChart3,
  Share2,
  FileText,
  Palette,
  Plug,
  Repeat,
} from "lucide-react";
import { Link } from "react-router-dom";

const beforeFeatures = [
  {
    icon: ClipboardList,
    title: "Inscriptions en ligne",
    description:
      "Ouvrez vos tableaux en quelques clics, importez les licenciés FFT et laissez PadelSetPro gérer automatiquement les listes d’attente.",
  },
  {
    icon: CreditCard,
    title: "Paiement sécurisé",
    description:
      "Encaissez les droits via Stripe, automatisez les remboursements et suivez vos flux financiers en temps réel.",
  },
  {
    icon: CalendarCheck,
    title: "Planification assistée",
    description:
      "Simulez votre tournoi (poules, tableau, américain…) et générez un planning optimisé selon vos courts et vos contraintes.",
  },
  {
    icon: Megaphone,
    title: "Convocations intelligentes",
    description:
      "Envoyez convocations et rappels par email, SMS ou push. Les décalages horaires sont notifiés instantanément aux joueurs.",
  },
  {
    icon: Users2,
    title: "Gestion des paires",
    description:
      "Constituez ou importez les équipes, calculez le poids FFT et placez automatiquement les têtes de série.",
  },
];

const duringFeatures = [
  {
    icon: Trophy,
    title: "Tableaux dynamiques",
    description:
      "Saisissez les scores depuis la tablette du JA : les poules, playoffs et écrans clubs se mettent à jour instantanément.",
  },
  {
    icon: Activity,
    title: "Suivi temps réel",
    description:
      "Les joueurs et supporters suivent l’évolution des matchs en direct sur web, mobile ou PWA.",
  },
  {
    icon: GitBranch,
    title: "Tirages automatisés",
    description:
      "Générez le tableau final en tenant compte des qualifiés et têtes de série, avec un tirage traçable.",
  },
  {
    icon: AlertTriangle,
    title: "Gestion des imprévus",
    description:
      "Reprogrammez un match en cas de retard, blessure ou météo. Les nouvelles convocations sont envoyées automatiquement.",
  },
];

const afterFeatures = [
  {
    icon: BarChart3,
    title: "Classements & stats",
    description:
      "Produisez vos classements officiels, analysez les recettes et mesurez l’affluence par épreuve.",
  },
  {
    icon: Share2,
    title: "Publication instantanée",
    description:
      "Diffusez résultats et photos sur un microsite brandé, exportez vers votre site ou vos réseaux.",
  },
  {
    icon: FileText,
    title: "Rapports automatiques",
    description:
      "Recevez par email vos rapports financiers, listes de participants et comptes-rendus post-événement.",
  },
];

const customizationFeatures = [
  {
    icon: Palette,
    title: "White-label complet",
    description:
      "Personnalisez l’interface avec vos couleurs, logo et URL dédiée pour renforcer l’identité de votre club.",
  },
  {
    icon: Plug,
    title: "Intégrations natives",
    description:
      "Connectez votre logiciel de réservation, contrôle d’accès, POS ou comptabilité pour une automatisation totale.",
  },
  {
    icon: Repeat,
    title: "Automatisations avancées",
    description:
      "Programmez inscriptions récurrentes, relances joueurs, notifications JA et rapports programmés.",
  },
];

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-secondary text-primary px-4 py-1 text-sm font-medium">
                Plateforme web & mobile pour clubs et juges-arbitres
              </span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
                <span className="gold-gradient">Organisez vos tournois de padel comme un pro</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                PadelSetPro centralise inscriptions, paiements, planning, communication et résultats. Offrez une
                expérience fluide aux clubs, juges-arbitres et joueurs, du premier formulaire d’inscription jusqu’au
                classement final.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6">
                    Demander une démo <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="px-8 py-6 text-primary border-primary hover:bg-primary/5">
                    Découvrir les fonctionnalités
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="rounded-xl bg-card border border-border p-4">
                  <p className="text-3xl font-semibold text-primary">24h/24</p>
                  <p className="text-sm text-muted-foreground">Suivi en direct pour arbitres, joueurs et supporters</p>
                </div>
                <div className="rounded-xl bg-card border border-border p-4">
                  <p className="text-3xl font-semibold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Des tâches chronophages automatisées</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm uppercase text-muted-foreground">Flux tournoi</p>
                    <p className="text-2xl font-semibold text-primary">Vue d’ensemble</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">
                    Temps réel
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Inscriptions & paiements validés", value: "32 équipes", status: "success" },
                    { title: "Matchs planifiés aujourd’hui", value: "48 rencontres", status: "warning" },
                    { title: "Matches en cours", value: "6 courts actifs", status: "info" },
                    { title: "Notifications envoyées", value: "96 rappels", status: "neutral" },
                  ].map((item, index) => (
                    <div key={index} className="rounded-xl border border-border/70 bg-secondary/60 p-4">
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                      <p className="text-lg font-semibold text-primary mt-1">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-muted-foreground">
                  Gagnez jusqu’à 6 heures par journée de tournoi grâce à l’automatisation des convocations, tirages et
                  tableaux dynamiques.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Pour les clubs",
                description:
                  "Une solution tout-en-un pour gérer la billetterie, la communication et les ressources terrain.",
              },
              {
                title: "Pour les joueurs",
                description:
                  "Un espace dédié pour s’inscrire, payer, consulter les tableaux et suivre les scores en direct.",
              },
              {
                title: "Pour les arbitres",
                description:
                  "Une application de saisie rapide, sécurisée et synchronisée pour piloter l’événement sur le terrain.",
              },
            ].map((item, index) => (
              <div key={index} className="card-shine bg-card border border-border rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before Tournament */}
      <section className="py-16 md:py-24 bg-secondary/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-end md:justify-between mb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">📥 Avant le tournoi</h2>
              <p className="text-lg text-muted-foreground">
                Préparez votre événement sans tableur. PadelSetPro automatise les inscriptions, la gestion des paiements
                et la construction des tableaux.
              </p>
            </div>
            <Link to="/services" className="hidden md:inline-flex">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Voir le module Inscriptions
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beforeFeatures.map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* During Tournament */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-end md:justify-between mb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">🏆 Pendant le tournoi</h2>
              <p className="text-lg text-muted-foreground">
                Restez maître du planning et des scores. Tout est synchronisé pour que l’équipe d’organisation puisse se
                concentrer sur les joueurs.
              </p>
            </div>
            <Link to="/services" className="hidden md:inline-flex">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Découvrir la saisie live
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {duringFeatures.map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After Tournament */}
      <section className="py-16 md:py-24 bg-secondary/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-end md:justify-between mb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">🏁 Après le tournoi</h2>
              <p className="text-lg text-muted-foreground">
                Exploitez vos résultats immédiatement : classements, statistiques et communication post-événement sont
                prêts à être partagés.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {afterFeatures.map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization & Integrations */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">🎨 Personnalisation & intégrations</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Adaptez PadelSetPro à votre écosystème. White-label, intégrations et automatisations font de la plateforme un
            véritable copilote pour vos tournois.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {customizationFeatures.map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Prêt à faire passer vos tournois de padel au niveau supérieur ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Rejoignez les clubs qui modernisent leur organisation avec PadelSetPro. Un expert vous accompagne pour
            configurer votre premier événement en moins d’une heure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6">
                Planifier une démonstration
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-6">
                En savoir plus sur PadelSetPro
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}