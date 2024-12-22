import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Signal, Users, BookOpen } from "lucide-react";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gold-gradient">Trading Automatico</span>
              <br />
              <span className="text-white">di Eccellenza</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Accedi ai migliori segnali di trading, sessioni live e supporto personalizzato per il tuo successo finanziario
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
              Inizia Ora <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gold-gradient">I Nostri Servizi</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BarChart2,
                title: "Trading Automatico",
                description: "Sistemi automatizzati di trading sviluppati da esperti"
              },
              {
                icon: Signal,
                title: "Segnali Privati",
                description: "Segnali di trading esclusivi in tempo reale"
              },
              {
                icon: Users,
                title: "Sessioni Live",
                description: "Formazione e analisi di mercato in diretta"
              },
              {
                icon: BookOpen,
                title: "Prop Firms",
                description: "Preparazione e supporto per i challenge delle prop firms"
              }
            ].map((service, index) => (
              <div key={index} className="card-shine bg-card p-6 rounded-lg border border-border">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
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
            <span className="gold-gradient">Pronto a Iniziare?</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Unisciti a Zed VIP Company oggi e accedi a tutti i nostri servizi premium per soli €50/mese
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
            Abbonati Ora <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}