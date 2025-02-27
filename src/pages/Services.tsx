
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Trading Automatico",
      description: "Bot di trading avanzati per operare 24/7",
      features: [
        "Algoritmi personalizzati",
        "Monitoraggio 24/7",
        "Gestione del rischio automatizzata",
        "Report dettagliati delle performance"
      ]
    },
    {
      title: "Segnali Privati",
      description: "Segnali di trading esclusivi in tempo reale",
      features: [
        "Analisi di mercato professionali",
        "Notifiche immediate",
        "Setup completi di trading",
        "Supporto dedicato"
      ]
    },
    {
      title: "Sessioni Live",
      description: "Formazione e analisi di mercato in diretta",
      features: [
        "Sessioni interattive",
        "Analisi in tempo reale",
        "Q&A con esperti",
        "Registrazioni disponibili"
      ]
    },
    {
      title: "Prop Firm Challenge",
      description: "Preparazione e supporto per le sfide Prop Firm",
      features: [
        "Strategie di superamento test",
        "Mentoring personalizzato",
        "Simulazioni di trading",
        "Piano di gestione del capitale"
      ]
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
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-24 pt-8 text-center max-w-3xl mx-auto space-y-12">
        <p className="text-lg text-muted-foreground">
          Il servizio VIP di base è disponibile a partire da 50€/mese. Per gli altri servizi avanzati, vi invitiamo a contattare il nostro supporto per un preventivo personalizzato.
        </p>
        <a
          href="https://t.me/zedvipsupport"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button 
            variant="default" 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl py-6 px-12 font-semibold mt-6"
          >
            Abbonati
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Services;
