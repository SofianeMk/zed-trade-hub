import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, Calendar, CreditCard, BarChart3, Bell, Settings, CheckCircle2, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gold-gradient">PadelSetPro</span>
              <br />
              <span className="text-white">Organisez vos tournois de padel</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              La plateforme complète pour gérer vos tournois de A à Z : inscriptions, paiements, planning, scores et classements en temps réel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tournois">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                  Créer un tournoi <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10">
                  Découvrir les fonctionnalités
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Avant le tournoi */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gold-gradient">📥 Avant le tournoi</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">Préparez votre événement en toute simplicité</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Inscriptions en ligne",
                description: "Gérez les inscriptions, importez les licenciés FFT et la liste d'attente automatiquement"
              },
              {
                icon: CreditCard,
                title: "Paiement sécurisé",
                description: "Encaissements via Stripe, remboursements automatisés et suivi financier complet"
              },
              {
                icon: Calendar,
                title: "Planification intelligente",
                description: "Simulation du format, planification automatique des matchs selon le temps disponible"
              },
              {
                icon: Bell,
                title: "Communication",
                description: "Convocations automatiques, rappels par email/SMS/push et gestion des imprévus"
              }
            ].map((feature, index) => (
              <div key={index} className="card-shine bg-card p-6 rounded-lg border border-border">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Pendant le tournoi */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gold-gradient">🏆 Pendant le tournoi</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">Réactivité et transparence en temps réel</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: "Saisie des scores",
                description: "Saisissez les scores en direct, les tableaux se mettent à jour automatiquement"
              },
              {
                icon: Trophy,
                title: "Tirage des qualifiés",
                description: "Tirage au sort automatique et transparent avec gestion des têtes de série"
              },
              {
                icon: Settings,
                title: "Gestion des imprévus",
                description: "Multi-épreuves, reprogrammation automatique et notifications instantanées"
              }
            ].map((feature, index) => (
              <div key={index} className="card-shine bg-card p-6 rounded-lg border border-border">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Après le tournoi */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gold-gradient">🏁 Après le tournoi</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">Exploitez les résultats et analysez les performances</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Classements et statistiques",
                description: "Génération automatique des classements finaux, statistiques détaillées pour chaque joueur et export vers Beach-Padel"
              },
              {
                icon: Smartphone,
                title: "Publication et diffusion",
                description: "Résultats en ligne sur microsite dédié, projection en direct sur écrans du club et export vers réseaux sociaux"
              }
            ].map((feature, index) => (
              <div key={index} className="card-shine bg-card p-6 rounded-lg border border-border">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gold-gradient">Prêt à simplifier l'organisation de vos tournois ?</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Rejoignez les clubs qui font confiance à PadelSetPro pour gérer leurs événements de manière professionnelle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                Demander une démo <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/tournois">
              <Button variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10">
                Voir les tournois
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}