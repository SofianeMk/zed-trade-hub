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
  name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  email: z.string().email("Email non valida"),
  message: z.string().min(10, "Il messaggio deve contenere almeno 10 caratteri"),
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
      title: "Messaggio inviato!",
      description: "Ti risponderemo il prima possibile.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 gold-gradient">Contattaci</h1>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Il tuo nome" {...field} />
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
                        <Input placeholder="tuo@email.com" {...field} />
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
                      <FormLabel>Messaggio</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Il tuo messaggio..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full">
                  <Mail className="mr-2" />
                  Invia
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Supporto Telegram</h2>
              <p className="text-muted-foreground mb-4">
                Hai bisogno di assistenza rapida? Unisciti al nostro supporto su Telegram per una risposta immediata.
              </p>
              <a
                href="https://t.me/zedvipsupport"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Button variant="outline" className="w-full">
                  <MessageCircle className="mr-2" />
                  Contattaci su Telegram
                </Button>
              </a>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Pagine Legali</h2>
              <div className="space-y-2">
                <a href="/legal/terms" className="block text-primary hover:underline">
                  Termini e Condizioni
                </a>
                <a href="/legal/privacy" className="block text-primary hover:underline">
                  Informativa sulla Privacy
                </a>
                <a href="/legal/impressum" className="block text-primary hover:underline">
                  Note Legali
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
