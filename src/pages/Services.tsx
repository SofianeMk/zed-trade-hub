import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Trading Automatico",
      description: "Bot di trading avanzati per operare 24/7",
      features: [
        "Algoritmi personalizzati",
        "Monitoraggio 24/7",
        "Gestione del rischio automatizzata",
        "Report dettagliati delle performance"
      ],
      price: "50€/mese"
    },
    {
      title: "Segnali Privati",
      description: "Segnali di trading esclusivi in tempo reale",
      features: [
        "Analisi di mercato professionali",
        "Notifiche immediate",
        "Setup completi di trading",
        "Supporto dedicato"
      ],
      price: "50€/mese"
    },
    {
      title: "Sessioni Live",
      description: "Formazione e analisi di mercato in diretta",
      features: [
        "Sessioni interattive",
        "Analisi in tempo reale",
        "Q&A con esperti",
        "Registrazioni disponibili"
      ],
      price: "50€/mese"
    },
    {
      title: "Prop Firm Challenge",
      description: "Preparazione e supporto per le sfide Prop Firm",
      features: [
        "Strategie di superamento test",
        "Mentoring personalizzato",
        "Simulazioni di trading",
        "Piano di gestione del capitale"
      ],
      price: "50€/mese"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 gold-gradient">I Nostri Servizi</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Soluzioni professionali per il trading automatico, segnali privati e formazione avanzata
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-2xl font-bold text-primary">{service.price}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;