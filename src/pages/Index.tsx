import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Trophy, 
  Users, 
  Calendar, 
  TrendingUp,
  CreditCard,
  Bell,
  BarChart3,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("/lovable-uploads/aaea4d69-fbf5-4cb9-8ae8-d227e2d4b234.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/aaea4d69-fbf5-4cb9-8ae8-d227e2d4b234.png" 
                alt="PadelSetPro Logo" 
                className="h-24 md:h-32"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              PadelSetPro
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              La plateforme complète pour organiser vos tournois de padel de A à Z. 
              Inscriptions, paiements, tableaux, scores en temps réel et bien plus encore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                  Découvrir les fonctionnalités <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                  Demander une démo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Une solution complète pour vos tournois
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              De l'inscription des joueurs jusqu'à la publication des résultats, 
              gérez tout depuis une seule plateforme
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Inscriptions en ligne",
                description: "Formulaire d'inscription simplifié avec liste d'attente automatique et import des licenciés FFT"
              },
              {
                icon: CreditCard,
                title: "Paiements sécurisés",
                description: "Encaissement via Stripe, gestion des remboursements et suivi financier automatisé"
              },
              {
                icon: Calendar,
                title: "Planification automatique",
                description: "Génération des tableaux, poules et planning des matchs selon vos contraintes"
              },
              {
                icon: Trophy,
                title: "Gestion multi-formats",
                description: "Poules, tableaux à élimination, americano, ladder... tous les formats disponibles"
              },
              {
                icon: TrendingUp,
                title: "Scores en temps réel",
                description: "Saisie des scores avec mise à jour instantanée des tableaux et notifications push"
              },
              {
                icon: Bell,
                title: "Communication automatisée",
                description: "Convocations, rappels et notifications par email/SMS/push automatiques"
              },
              {
                icon: BarChart3,
                title: "Statistiques complètes",
                description: "Historique des matchs, performances, classements et analyse détaillée"
              },
              {
                icon: Shield,
                title: "White-label",
                description: "Personnalisation complète aux couleurs de votre club avec votre logo et URL"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Un tournoi en 3 étapes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">📥 Avant le tournoi</h3>
              <p className="text-gray-600">
                Inscriptions en ligne, paiements, simulation des tableaux, convocations automatiques
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">🏆 Pendant le tournoi</h3>
              <p className="text-gray-600">
                Saisie des scores en temps réel, mise à jour automatique des tableaux, gestion des imprévus
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">🏁 Après le tournoi</h3>
              <p className="text-gray-600">
                Classements automatiques, statistiques détaillées, publication des résultats en ligne
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à révolutionner vos tournois ?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez les clubs qui font confiance à PadelSetPro pour gérer leurs tournois de manière professionnelle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                Demander une démo <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                Voir les tarifs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}