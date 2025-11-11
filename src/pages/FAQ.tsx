import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Général",
      faqs: [
        {
          question: "Qu'est-ce que PadelSetPro ?",
          answer: "PadelSetPro est une plateforme complète de gestion de tournois de padel. Elle permet aux clubs d'organiser des tournois de A à Z : inscriptions, paiements, génération des tableaux, saisie des scores en temps réel, et bien plus encore."
        },
        {
          question: "Pour qui est destiné PadelSetPro ?",
          answer: "PadelSetPro s'adresse aux clubs de padel, aux juges-arbitres, et aux organisateurs de tournois qui souhaitent professionnaliser la gestion de leurs événements tout en offrant une meilleure expérience aux joueurs."
        },
        {
          question: "Ai-je besoin de compétences techniques pour utiliser la plateforme ?",
          answer: "Non ! PadelSetPro a été conçu pour être intuitif et facile à utiliser. Aucune compétence technique n'est requise. De plus, nous proposons une formation complète et un support dédié."
        }
      ]
    },
    {
      category: "Fonctionnalités",
      faqs: [
        {
          question: "Quels formats de tournois sont supportés ?",
          answer: "PadelSetPro supporte tous les formats populaires : poules, tableaux à élimination directe, americano, ladder, round robin, et bien d'autres. Vous pouvez également créer des formats personnalisés."
        },
        {
          question: "Comment fonctionnent les inscriptions en ligne ?",
          answer: "Vous créez votre tournoi, définissez les paramètres (nombre d'équipes, tarifs, dates), et partagez le lien d'inscription. Les joueurs s'inscrivent directement en ligne, paient de manière sécurisée, et reçoivent une confirmation automatique."
        },
        {
          question: "Peut-on gérer plusieurs tournois simultanément ?",
          answer: "Oui ! Avec le plan Pro et Enterprise, vous pouvez gérer plusieurs tournois en parallèle, avec différentes épreuves (Hommes, Femmes, Mixte, etc.)."
        },
        {
          question: "Comment fonctionne la saisie des scores ?",
          answer: "Les arbitres ou organisateurs saisissent les scores via l'application mobile ou web. Les tableaux se mettent à jour automatiquement en temps réel, et les joueurs reçoivent des notifications pour leurs prochains matchs."
        }
      ]
    },
    {
      category: "Tarifs & Abonnement",
      faqs: [
        {
          question: "Quels sont les tarifs ?",
          answer: "Nous proposons 3 formules : Starter (49€ par tournoi), Pro (149€/mois pour des tournois illimités), et Enterprise (sur devis pour des besoins spécifiques). Consultez notre page Fonctionnalités pour plus de détails."
        },
        {
          question: "Y a-t-il une période d'essai ?",
          answer: "Oui ! Nous offrons une démonstration gratuite et personnalisée. Contactez-nous pour planifier votre démo et découvrir toutes les fonctionnalités."
        },
        {
          question: "Puis-je changer de formule en cours d'abonnement ?",
          answer: "Absolument ! Vous pouvez upgrader ou downgrader votre formule à tout moment. Les changements prennent effet immédiatement."
        },
        {
          question: "Les frais Stripe sont-ils inclus ?",
          answer: "Les frais de traitement Stripe (environ 1,4% + 0,25€ par transaction) sont à la charge des joueurs lors de leur inscription. Vous recevez le montant net directement sur votre compte."
        }
      ]
    },
    {
      category: "Support & Technique",
      faqs: [
        {
          question: "Quel support est disponible ?",
          answer: "Nous offrons un support par email pour tous les plans, un support prioritaire pour le plan Pro, et un support dédié 24/7 pour le plan Enterprise. Une documentation complète et des tutoriels vidéo sont également disponibles."
        },
        {
          question: "La plateforme fonctionne-t-elle sur mobile ?",
          answer: "Oui ! PadelSetPro est disponible en version web responsive et via des applications natives iOS et Android. Les joueurs peuvent tout gérer depuis leur smartphone."
        },
        {
          question: "Mes données sont-elles sécurisées ?",
          answer: "Absolument. Nous utilisons les dernières technologies de sécurité (SSL, cryptage des données, serveurs sécurisés) et sommes conformes au RGPD. Vos données et celles de vos joueurs sont protégées."
        },
        {
          question: "Puis-je exporter mes données ?",
          answer: "Oui ! Vous pouvez exporter toutes vos données (résultats, statistiques, listes de joueurs) au format PDF, Excel, ou via notre API pour les intégrer à d'autres outils."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Questions Fréquentes
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              Trouvez les réponses aux questions les plus courantes sur PadelSetPro
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{category.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${categoryIndex}-${index}`}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                      <span className="text-left font-semibold text-gray-900">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Vous avez d'autres questions ?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Notre équipe est là pour vous aider. N'hésitez pas à nous contacter pour toute question supplémentaire.
          </p>
          <a href="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Nous contacter
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;