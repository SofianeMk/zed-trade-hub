import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Target,
  ShieldCheck,
  Users2,
  Sparkles,
  Trophy,
  Globe,
  BarChart3,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: "Excellence opérationnelle",
      description:
        "Nous modélisons l’ensemble du cycle de vie d’un tournoi pour éliminer les frictions et réduire les tâches manuelles.",
    },
    {
      icon: ShieldCheck,
      title: "Fiabilité et conformité",
      description:
        "Données hébergées en Europe, paiements sécurisés et traçabilité complète pour répondre aux exigences FFT.",
    },
    {
      icon: Users2,
      title: "Communauté padel",
      description:
        "Nous construisons une expérience pensée pour les clubs, les arbitres et les joueurs afin de rapprocher la communauté.",
    },
    {
      icon: Sparkles,
      title: "Innovation continue",
      description:
        "Automatisations, intégrations et analytics évoluent sans cesse pour vous offrir un coup d’avance.",
    },
  ];

  const milestones = [
    {
      icon: Trophy,
      title: "Née sur le terrain",
      description:
        "PadelSetPro est imaginée par des organisateurs de tournois confrontés aux listes Excel, échanges interminables et paiements dispersés.",
    },
    {
      icon: Globe,
      title: "Une vision internationale",
      description:
        "Conçue pour répondre aux standards FFT, la plateforme se déploie également dans les clubs européens en quête d’outils modernes.",
    },
    {
      icon: BarChart3,
      title: "Mesure & pilotage",
      description:
        "Notre promesse : rendre vos décisions data-driven grâce à des tableaux de bord temps réel et des rapports récurrents.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="gold-gradient">PadelSetPro, copilote des clubs et juges-arbitres</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Nous avons conçu une plateforme unique pour que chaque tournoi de padel soit synonyme d’expérience premium.
              De l’inscription à la publication des résultats, nous simplifions chaque étape.
            </p>
            <div className="flex justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => navigate("/contact")}>
                Discuter avec un expert <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-secondary/60">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-sm uppercase text-primary font-semibold">Notre histoire</span>
              <h2 className="text-3xl font-bold text-primary">
                Une plateforme façonnée sur des cas réels de clubs et de tournois FFT
              </h2>
              <p className="text-muted-foreground">
                Après des années à organiser des compétitions locales et nationales, notre équipe a recensé toutes les
                frustrations : inscriptions dispersées, paiements hors délai, planning instable, scores non partagés.
                PadelSetPro est née de cette volonté d’industrialiser l’organisation de tournois pour libérer du temps aux
                équipes terrain.
              </p>
              <p className="text-muted-foreground">
                Aujourd’hui, la plateforme équipe des clubs privés, des structures municipales et des académies qui veulent
                proposer des tournois modernes, transparents et rentables.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
                onClick={() => navigate("/services")}
              >
                Explorer nos modules
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-lg space-y-6">
                <div>
                  <p className="text-sm uppercase text-muted-foreground">Ce que nous changeons</p>
                  <h3 className="text-2xl font-semibold text-primary">De l’Excel au pilotage temps réel</h3>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li>• Inscriptions, paiements et listes d’attente consolidés au sein d’une même interface.</li>
                  <li>• Planification sur mesure en fonction des courts, catégories et disponibilités arbitres.</li>
                  <li>• Scores saisis sur mobile/tablette et diffusion automatique auprès des joueurs.</li>
                  <li>• Rapports financiers et statistiques envoyés automatiquement après l’événement.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Nos valeurs</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            PadelSetPro s’appuie sur quatre piliers pour accompagner durablement clubs et organisateurs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-2xl border border-border hover:border-primary transition-colors duration-300 card-shine"
              >
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-secondary/60">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Ce qui nous distingue</h2>
            <p className="text-muted-foreground">
              Nous transformons l’organisation de tournois en une expérience digitale continue, du premier email à la
              publication des résultats.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 text-left">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;