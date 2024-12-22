import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Cos'è il trading automatico?",
      answer: "Il trading automatico è un sistema che esegue automaticamente operazioni di trading sui mercati finanziari secondo strategie predefinite, eliminando l'emotività dalle decisioni di trading."
    },
    {
      question: "Come funzionano i segnali privati?",
      answer: "I nostri segnali privati sono analisi di mercato in tempo reale inviate direttamente ai nostri membri, con indicazioni precise su entrata, stop loss e take profit."
    },
    {
      question: "Che cos'è una Prop Firm?",
      answer: "Una Prop Firm è una società che fornisce capitale ai trader qualificati. Attraverso le nostre sfide, puoi dimostrare le tue capacità di trading e ottenere l'accesso a capitali significativi."
    },
    {
      question: "Come funzionano le sessioni live?",
      answer: "Le sessioni live sono incontri virtuali dove i nostri esperti trader analizzano i mercati in tempo reale, condividendo strategie e rispondendo alle domande dei partecipanti."
    },
    {
      question: "Quali sono i requisiti per iniziare?",
      answer: "Non sono necessari requisiti specifici per iniziare. Offriamo formazione completa per tutti i livelli, dal principiante all'esperto."
    },
    {
      question: "Come posso iscrivermi ai vostri servizi?",
      answer: "Puoi iscriverti facilmente attraverso il nostro sito web, selezionando il piano che preferisci e seguendo la procedura di registrazione. Il nostro team sarà a tua disposizione per assisterti."
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
              <span className="gold-gradient">Domande Frequenti</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Trova le risposte alle domande più comuni sui nostri servizi di trading
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-secondary transition-colors">
                  <span className="text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQ;