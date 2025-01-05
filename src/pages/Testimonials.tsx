import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marco Rossi",
      role: "Trader Indipendente",
      content: "I segnali di trading di Zed VIP hanno completamente trasformato il mio approccio al mercato. La precisione e l'affidabilità sono impressionanti.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Laura Bianchi",
      role: "Prop Trader",
      content: "Grazie al programma di preparazione Prop Firm, ho superato la sfida al primo tentativo. Il supporto del team è stato fondamentale.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Giuseppe Verdi",
      role: "Trader Principiante",
      content: "Le sessioni live sono incredibilmente formative. Ho imparato più in un mese che in un anno di studio autonomo.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Sofia Conti",
      role: "Trader Esperta",
      content: "Il trading automatico di Zed VIP è estremamente affidabile. I risultati sono costanti e la trasparenza è totale.",
      rating: 5,
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gold-gradient">Testimonianze</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Scopri le esperienze di chi ha già scelto i nostri servizi
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="border border-border bg-card hover:border-primary transition-colors duration-300 card-shine"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-gray-400">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;