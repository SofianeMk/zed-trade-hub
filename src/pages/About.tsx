import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, Target, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Eccellenza",
      description: "Ci impegniamo per offrire servizi di trading di altissima qualità"
    },
    {
      icon: Shield,
      title: "Affidabilità",
      description: "La sicurezza e la stabilità sono al centro delle nostre operazioni"
    },
    {
      icon: Users,
      title: "Comunità",
      description: "Costruiamo una comunità di trader di successo"
    },
    {
      icon: Award,
      title: "Innovazione",
      description: "Utilizziamo tecnologie all'avanguardia per il trading automatico"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gold-gradient">Chi Siamo</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Zed VIP Company è leader nel settore del trading automatico e della formazione finanziaria. 
              La nostra missione è rendere il trading accessibile e profittevole per tutti.
            </p>
          </div>
        </div>
      </section>

      {/* Storia Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="gold-gradient">La Nostra Storia</span>
              </h2>
              <p className="text-gray-400 mb-4">
                Fondata da esperti trader con anni di esperienza nei mercati finanziari, 
                Zed VIP Company nasce dalla passione per il trading e dalla volontà di 
                condividere conoscenze e strategie vincenti.
              </p>
              <p className="text-gray-400 mb-6">
                Oggi, siamo orgogliosi di aver aiutato centinaia di trader a raggiungere 
                i loro obiettivi finanziari attraverso i nostri servizi di trading automatico 
                e la nostra formazione specializzata.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Scopri i Nostri Servizi <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="relative h-[400px] w-full">
              <img 
                src="/lovable-uploads/d9a1f484-4efb-4328-98c7-a3e125d4f5ef.png"
                alt="Rappresentazione della nostra eccellenza"
                className="absolute inset-0 w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valori Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gold-gradient">I Nostri Valori</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors duration-300 card-shine">
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;