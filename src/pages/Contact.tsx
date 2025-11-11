import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, MessageCircle, Phone, MapPin, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(2, "Votre nom doit contenir au moins 2 caractères."),
  email: z.string().email("Veuillez renseigner une adresse email valide."),
  message: z.string().min(10, "Expliquez-nous votre projet en quelques mots (minimum 10 caractères)."),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: "contact@padelsetpro.com",
      };

      await emailjs.send("service_55knf0k", "template_l9k709n", templateParams, "LpQWkUe5yAZ_u_7fP");

      toast({
        title: "Message envoyé",
        description: "Merci pour votre intérêt ! Nous revenons vers vous sous 24 heures ouvrées.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Une erreur est survenue",
        description: "Impossible d’envoyer votre message pour le moment. Veuillez réessayer ou contactez-nous par email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
          <span className="inline-flex items-center rounded-full bg-secondary text-primary px-4 py-1 text-sm font-semibold">
            Parlons de vos tournois
          </span>
          <h1 className="text-4xl font-bold text-primary">Contactez l’équipe PadelSetPro</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Décrivez-nous votre événement, vos besoins ou vos questions. Nous sommes disponibles pour une démonstration,
            un accompagnement technique ou un devis personnalisé.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card border border-border rounded-2xl p-6 shadow-sm">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom complet</FormLabel>
                      <FormControl>
                        <Input placeholder="Laura Martin" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adresse email</FormLabel>
                      <FormControl>
                        <Input placeholder="laura@votreclub.fr" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Votre message</FormLabel>
                      <FormControl>
                        <Textarea rows={6} placeholder="Parlez-nous de votre prochain tournoi, du nombre de courts, de vos attentes..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  <Mail className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Envoi en cours..." : "Envoyer mon message"}
                </Button>
              </form>
            </Form>
          </div>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Nos coordonnées</h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <p>contact@padelsetpro.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-primary">Téléphone</p>
                    <p>+33 1 76 42 09 88</p>
                    <p className="text-xs">Du lundi au vendredi, 9h00 - 18h30 (CET)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-primary">Adresse</p>
                    <p>18 rue des Pionniers, 75011 Paris, France</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Support instantané</h2>
              <p className="text-muted-foreground text-sm">
                Besoin d’un échange rapide pendant un tournoi ? Notre équipe est disponible sur Telegram pour un support
                en direct.
              </p>
              <a href="https://t.me/padelsetpro" target="_blank" rel="noopener noreferrer" className="inline-flex w-full">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Ouvrir le canal support
                </Button>
              </a>
            </div>

            <div className="bg-secondary/60 border border-dashed border-primary/50 rounded-2xl p-6 space-y-3 text-sm text-muted-foreground">
              <p className="font-semibold text-primary">Comment pouvons-nous vous aider ?</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Démonstration guidée de la plateforme</li>
                <li>Support à la configuration d’un tournoi</li>
                <li>Intégration avec vos outils existants</li>
                <li>Questions sur la tarification ou le contrat</li>
              </ul>
              <Button variant="ghost" className="px-0 text-primary hover:text-primary/80 justify-start" onClick={() => form.setValue("message", "Bonjour PadelSetPro,\n\nJe souhaite organiser un tournoi de padel et j’aimerais en savoir plus sur :\n- ...\n- ...\n\nMerci !")}>
                Utiliser un message type <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
