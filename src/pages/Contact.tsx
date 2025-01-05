import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MessageCircle, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 gold-gradient">Contactez-nous</h1>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="votre@email.com" {...field} />
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Votre message..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full">
                  <Mail className="mr-2" />
                  Envoyer
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Support Telegram</h2>
              <p className="text-muted-foreground mb-4">
                Besoin d'une assistance rapide ? Rejoignez notre support sur Telegram pour une réponse instantanée.
              </p>
              <a
                href="https://t.me/zedvipsupport"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Button variant="outline" className="w-full">
                  <MessageCircle className="mr-2" />
                  Nous contacter sur Telegram
                </Button>
              </a>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Pages Légales</h2>
              <div className="space-y-2">
                <a href="/legal/terms" className="block text-primary hover:underline">
                  Conditions Générales d'Utilisation
                </a>
                <a href="/legal/privacy" className="block text-primary hover:underline">
                  Politique de Confidentialité
                </a>
                <a href="/legal/impressum" className="block text-primary hover:underline">
                  Mentions Légales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;