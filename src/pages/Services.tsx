import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  const clubFeatures = [
    {
      category: "Avant le tournoi",
      features: [
        "Création de tournois multi-formats (poules, tableaux, americano, ladder)",
        "Inscriptions en ligne avec formulaire personnalisable",
        "Import automatique des licenciés FFT",
        "Gestion de la liste d'attente automatisée",
        "Paiements sécurisés via Stripe",
        "Simulation et planification automatique des matchs",
        "Envoi automatique des convocations par email/SMS/push",
        "Calcul automatique du poids des équipes et têtes de série"
      ]
    },
    {
      category: "Pendant le tournoi",
      features: [
        "Saisie des scores en temps réel via application mobile",
        "Mise à jour automatique des tableaux et poules",
        "Affichage en direct sur écrans du club",
        "Gestion multi-épreuves simultanées",
        "Tirage automatique des qualifiés",
        "Notifications push aux joueurs",
        "Gestion des imprévus (météo, blessures, retards)",
        "Interface juge-arbitre dédiée"
      ]
    },
    {
      category: "Après le tournoi",
      features: [
        "Génération automatique des classements finaux",
        "Statistiques détaillées par joueur et équipe",
        "Saisie simplifiée pour classement officiel",
        "Publication sur microsite dédié",
        "Export des données (PDF, Excel, API)",
        "Historique complet des résultats",
        "Analyse des performances et KPIs",
        "Rapports financiers automatisés"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "49€",
      period: "par tournoi",
      description: "Parfait pour les petits tournois",
      features: [
        "Jusqu'à 32 équipes",
        "1 format de jeu",
        "Inscriptions en ligne",
        "Paiements Stripe",
        "Tableaux automatiques",
        "Scores en temps réel",
        "Support email"
      ],
      highlighted: false
    },
    {
      name: "Pro",
      price: "149€",
      period: "par mois",
      description: "Pour les clubs actifs",
      features: [
        "Tournois illimités",
        "Jusqu'à 128 équipes par tournoi",
        "Tous les formats de jeu",
        "Multi-épreuves",
        "Personnalisation white-label",
        "Statistiques avancées",
        "Notifications SMS incluses",
        "Support prioritaire"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      period: "",
      description: "Solution sur-mesure",
      features: [
        "Tout du plan Pro",
        "Nombre d'équipes illimité",
        "API dédiée",
        "Intégrations personnalisées",
        "Formation sur site",
        "Support dédié 24/7",
        "SLA garanti",
        "Développements spécifiques"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Fonctionnalités & Tarifs
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          Une solution complète pour gérer vos tournois de padel de manière professionnelle
        </p>
      </div>

      {/* Features Section */}
      <Tabs defaultValue="before" className="mb-20">
        <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
          <TabsTrigger value="before">Avant</TabsTrigger>
          <TabsTrigger value="during">Pendant</TabsTrigger>
          <TabsTrigger value="after">Après</TabsTrigger>
        </TabsList>
        
        {clubFeatures.map((section, idx) => (
          <TabsContent 
            key={idx} 
            value={idx === 0 ? "before" : idx === 1 ? "during" : "after"}
            className="mt-8"
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">{section.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Pricing Section */}
      <div className="mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tarifs transparents</h2>
          <p className="text-muted-foreground">
            Choisissez la formule adaptée à vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.highlighted ? 'border-blue-600 border-2 shadow-xl' : 'border'}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Le plus populaire
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="mb-4">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button 
                    className={`w-full ${plan.highlighted ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.name === "Enterprise" ? "Nous contacter" : "Commencer"}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-24 pt-8 text-center max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12">
        <h3 className="text-2xl font-bold mb-4">Besoin d'une démo personnalisée ?</h3>
        <p className="text-muted-foreground mb-8">
          Nos équipes sont à votre disposition pour vous présenter PadelSetPro 
          et répondre à toutes vos questions.
        </p>
        <Link to="/contact">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
          >
            Demander une démo gratuite
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
