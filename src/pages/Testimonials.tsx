import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Claire Dumont",
    role: "Responsable tournois - Padel Club Lyon",
    content:
      "Depuis que nous utilisons PadelSetPro, nous avons divisé par deux le temps de gestion des inscriptions. La liste d’attente automatisée nous a permis de remplir nos tableaux sans stress.",
  },
  {
    name: "Julien Lopez",
    role: "Juge-arbitre FFT",
    content:
      "La saisie des scores sur tablette est un vrai gain de temps. Les joueurs n’attendent plus devant la table et les supporters suivent tout en direct sur le microsite du club.",
  },
  {
    name: "Morgane Leclerc",
    role: "Directrice communication - Urban Padel",
    content:
      "Le module communication est un atout énorme : convocations ciblées, rappels automatiques et publication instantanée des résultats avec nos sponsors en avant.",
  },
  {
    name: "Alexandre Boucher",
    role: "Coach & organisateur - Académie Padel 78",
    content:
      "Nous gérons désormais trois épreuves simultanées sans jamais perdre le fil. Les statistiques post-tournoi motivent nos joueurs à revenir sur les prochains événements.",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-16">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              <span className="gold-gradient">Ils organisent leurs tournois avec PadelSetPro</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Clubs, juges-arbitres et académies témoignent des bénéfices concrets : gain de temps, expérience joueurs
              améliorée et pilotage data-driven.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border border-border bg-card hover:border-primary transition-colors duration-300 card-shine">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-lg font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="w-5 h-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
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
