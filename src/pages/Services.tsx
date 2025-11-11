import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "📥 Avant le tournoi",
      description: "Préparez votre événement en toute simplicité",
      features: [
        "Inscriptions en ligne avec import FFT",
        "Gestion automatique de la liste d'attente",
        "Paiements sécurisés via Stripe",
        "Planification intelligente des matchs",
        "Convocations et rappels automatiques"
      ]
    },
    {
      title: "🏆 Pendant le tournoi",
      description: "Réactivité et transparence en temps réel",
      features: [
        "Saisie des scores en direct",
        "Mise à jour automatique des tableaux",
        "Gestion des têtes de série",
        "Multi-épreuves simultanées",
        "Notifications instantanées des changements"
      ]
    },
    {
      title: "🏁 Après le tournoi",
      description: "Exploitez les résultats et analysez les performances",
      features: [
        "Classements finaux automatiques",
        "Statistiques détaillées par joueur",
        "Export vers Beach-Padel",
        "Publication sur microsite dédié",
        "Projection sur écrans du club"
      ]
    },
    {
      title: "🎨 Personnalisation",
      description: "White-label et intégrations avancées",
      features: [
        "Branding personnalisé (logo, couleurs, URL)",
        "Intégration avec logiciel de réservation",
        "Connexion au système de contrôle d'accès",
        "Automatisations programmables",
        "Application mobile iOS/Android/PWA"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 gold-gradient">Fonctionnalités PadelSetPro</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Une plateforme complète pour organiser vos tournois de padel de A à Z
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="border border-border bg-card hover:border-primary transition-colors duration-300 card-shine">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-24 pt-8 text-center max-w-3xl mx-auto">
        <p className="text-lg text-muted-foreground mb-8">
          PadelSetPro simplifie la vie des organisateurs en automatisant les tâches chronophages et améliore l'expérience des joueurs avec une transparence totale.
        </p>
        <Link to="/contact">
          <Button 
            variant="default" 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl py-6 px-12 font-semibold"
          >
            Demander une démo
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
