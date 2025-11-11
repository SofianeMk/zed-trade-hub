import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "PadelSetPro est-il compatible avec les tournois homologués FFT ?",
    answer:
      "Oui. La plateforme respecte les exigences FFT : import des licenciés, calcul du poids des équipes, placement des têtes de série et exports au format requis pour la remontée des résultats officiels.",
  },
  {
    question: "Comment fonctionnent les inscriptions en ligne et les listes d’attente ?",
    answer:
      "Vous définissez le nombre d’équipes, les catégories, les tarifs et la date limite. Les licenciés peuvent s’inscrire en solo ou en équipe. En cas de surbooking, une liste d’attente est gérée automatiquement et les joueurs sont notifiés dès qu’une place se libère.",
  },
  {
    question: "Les paiements sont-ils sécurisés et les remboursements automatiques ?",
    answer:
      "PadelSetPro s’appuie sur Stripe. Les droits d’inscription sont encaissés immédiatement, stockés sur le compte du club et les remboursements sont déclenchés en un clic selon vos règles (forfait, annulation, remplacement).",
  },
  {
    question: "Puis-je modifier le planning une fois le tournoi lancé ?",
    answer:
      "Oui. Le planificateur vous permet de déplacer facilement un match, bloquer un court ou ajuster l’ordre des rencontres. Les joueurs concernés reçoivent automatiquement une notification email/SMS/push.",
  },
  {
    question: "Comment les scores sont-ils saisis ?",
    answer:
      "Depuis l’application web ou mobile, le juge-arbitre sélectionne un match et renseigne le score jeu par jeu. Les tableaux, poules et microsites publics sont mis à jour instantanément.",
  },
  {
    question: "Quels types de tableaux de bord et statistiques proposez-vous après le tournoi ?",
    answer:
      "Vous disposez d’un classement final automatique, de statistiques par joueur (sets, points, ratio victoires), d’un suivi des recettes et d’un export complet pour vos partenaires ou votre comptabilité.",
  },
  {
    question: "La plateforme est-elle personnalisable ?",
    answer:
      "Absolument. Votre logo, vos couleurs, un sous-domaine dédié, des visuels sponsors et même un microsite public white-label : tout est configurable pour refléter l’identité de votre club.",
  },
  {
    question: "Proposez-vous un accompagnement pour la prise en main ?",
    answer:
      "Chaque nouveau club bénéficie d’un onboarding (visio, check-list, support) et d’une assistance prioritaire pendant ses premiers tournois. Nous mettons également à disposition une base de connaissance et des tutoriels vidéo.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-16">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              <span className="gold-gradient">Questions fréquentes</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Tout ce qu’il faut savoir pour préparer votre prochain tournoi de padel avec PadelSetPro.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`} className="bg-card border border-border rounded-2xl overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left text-primary hover:bg-secondary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
