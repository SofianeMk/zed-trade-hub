
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Check,
  ArrowRight,
  Layers,
  Workflow,
  MessagesSquare,
  Laptop2,
  UsersRound,
  BellRing,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const bundles = [
    {
      title: "Module Inscriptions & Paiements",
      description:
        "Digitalisez vos inscriptions licenciés et open avec paiement sécurisé, gestion automatique des listes d’attente et suivi financier en direct.",
      icon: Layers,
      features: [
        "Formulaires en ligne multi-catégories avec quotas et tarifs différenciés",
        "Recherche licenciés FFT & import automatique des profils joueurs",
        "Encaissement Stripe (CB, portefeuille club) et remboursements automatisés",
        "Workflow de validation, listes d’attente intelligentes et communications ciblées",
        "Tableau de bord financier temps réel et export comptable (CSV/Excel)",
      ],
      cta: "Demander une présentation",
    },
    {
      title: "Module Pilotage du Tournoi",
      description:
        "Accompagnez vos juges-arbitres sur le terrain : planification assistée, tirages équitables et saisie live des scores.",
      icon: Workflow,
      features: [
        "Simulation de formats (poules, tableaux, americano, ladder...) selon contraintes de courts",
        "Placement automatique des têtes de série et calcul du poids FFT des équipes",
        "Application web & mobile pour saisir les scores en direct avec verrouillage JA",
        "Affichage dynamique des rencontres (tablettes, TV, microsite public)",
        "Reprogrammation rapide en cas d’imprévus avec notifications instantanées",
      ],
      cta: "Tester la saisie live",
    },
    {
      title: "Module Expérience Joueurs & Supporters",
      description:
        "Fidélisez vos participants avec un espace dédié et valorisez vos événements auprès des partenaires et médias.",
      icon: MessagesSquare,
      features: [
        "Portail joueurs pour inscriptions, paiements, convocations et historique de résultats",
        "Notifications email, SMS et push configurables par segment (joueurs, remplaçants, staff)",
        "Diffusion temps réel des scores, tableaux et actualités sur microsite white-label",
        "Gestion de la galerie médias et publication automatique sur vos réseaux sociaux",
        "Statistiques individuelles (sets, points, ratio victoires) et sondages post-tournoi",
      ],
      cta: "Voir un microsite démo",
    },
  ];

  const extras = [
    {
      icon: Laptop2,
      title: "Formation & onboarding",
      content:
        "Accompagnement personnalisé, sessions visio, documentation interactive et support prioritaire lors de vos premiers tournois.",
    },
    {
      icon: UsersRound,
      title: "Accès multi-profils",
      content:
        "Droits granulaire pour clubs, juges-arbitres, responsables communication et bénévoles avec traçabilité complète.",
    },
    {
      icon: BellRing,
      title: "Automatisations avancées",
      content:
        "Scénarios prêts à l’emploi : relances d’inscription, rappels de paiement, rapports financiers hebdomadaires, exports FFT.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl font-bold gold-gradient">Fonctionnalités PadelSetPro</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Composez votre suite : automatisez les inscriptions, pilotez vos matchs sur le terrain et offrez une expérience
          digitale premium à vos joueurs et partenaires.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {bundles.map((bundle, index) => (
          <Card
            key={bundle.title}
            className={`border border-border bg-card hover:border-primary transition-colors duration-300 card-shine ${
              index === 1 ? "lg:-mt-6 lg:mb-6 shadow-xl shadow-primary/15" : ""
            }`}
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <bundle.icon className="h-10 w-10 text-primary" />
                <CardTitle className="text-2xl text-primary">{bundle.title}</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground">{bundle.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {bundle.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="mt-8 w-full border-primary text-primary hover:bg-primary/5"
                onClick={() => navigate("/contact")}
              >
                {bundle.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        {extras.map((extra) => (
          <div key={extra.title} className="bg-card border border-border rounded-2xl p-6">
            <extra.icon className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">{extra.title}</h3>
            <p className="text-sm text-muted-foreground">{extra.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 pt-12 bg-secondary/60 rounded-3xl px-6 md:px-12 py-12 text-center space-y-6">
        <h2 className="text-3xl font-semibold text-primary">Une tarification claire et évolutive</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Nos offres s’ajustent à votre volume de tournois, au nombre de courts et aux modules activés. Nous construisons
          ensemble le plan qui maximise votre rentabilité et l’expérience des joueurs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6" onClick={() => navigate("/contact")}>
            Obtenir une proposition personnalisée
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5 px-8 py-6"
            onClick={() => navigate("/about")}
          >
            Comprendre notre approche
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
