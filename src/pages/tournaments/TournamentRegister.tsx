import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, CreditCard, Shield, Lock } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const TournamentRegister = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    player1Name: "",
    player1Email: "",
    player1Phone: "",
    player1License: "",
    player2Name: "",
    player2Email: "",
    player2Phone: "",
    player2License: "",
    acceptTerms: false,
    acceptCancellation: false
  });

  // Mock tournament data
  const tournament = {
    name: "Tournoi P100 Hommes",
    date: "2025-11-15",
    entryFee: 45,
    category: "P100"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration data:", formData);
    // TODO: Implement registration and payment logic
    navigate(`/tournaments/${id}/payment`);
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(`/tournaments/${id}`)}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour au tournoi
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Inscription au tournoi</h1>
          <p className="text-gray-600">{tournament.name}</p>
        </div>

        {/* Tournament Summary */}
        <Card className="mb-8 border-2 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <Badge className="mb-2 bg-blue-600">{tournament.category}</Badge>
                <p className="font-semibold text-lg">{tournament.name}</p>
                <p className="text-sm text-gray-600">
                  {new Date(tournament.date).toLocaleDateString('fr-FR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Total à payer</p>
                <p className="text-3xl font-bold text-blue-600">{tournament.entryFee}€</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Joueur 1 */}
          <Card>
            <CardHeader>
              <CardTitle>Joueur 1 (Capitaine)</CardTitle>
              <CardDescription>
                Informations du premier joueur de l'équipe
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="player1-name">Nom complet *</Label>
                <Input
                  id="player1-name"
                  placeholder="Jean Dupont"
                  value={formData.player1Name}
                  onChange={(e) => setFormData({ ...formData, player1Name: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="player1-email">Email *</Label>
                  <Input
                    id="player1-email"
                    type="email"
                    placeholder="jean.dupont@email.com"
                    value={formData.player1Email}
                    onChange={(e) => setFormData({ ...formData, player1Email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="player1-phone">Téléphone *</Label>
                  <Input
                    id="player1-phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={formData.player1Phone}
                    onChange={(e) => setFormData({ ...formData, player1Phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="player1-license">Numéro de licence FFT (optionnel)</Label>
                <Input
                  id="player1-license"
                  placeholder="12345678"
                  value={formData.player1License}
                  onChange={(e) => setFormData({ ...formData, player1License: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Joueur 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Joueur 2</CardTitle>
              <CardDescription>
                Informations du second joueur de l'équipe
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="player2-name">Nom complet *</Label>
                <Input
                  id="player2-name"
                  placeholder="Marc Martin"
                  value={formData.player2Name}
                  onChange={(e) => setFormData({ ...formData, player2Name: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="player2-email">Email *</Label>
                  <Input
                    id="player2-email"
                    type="email"
                    placeholder="marc.martin@email.com"
                    value={formData.player2Email}
                    onChange={(e) => setFormData({ ...formData, player2Email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="player2-phone">Téléphone *</Label>
                  <Input
                    id="player2-phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={formData.player2Phone}
                    onChange={(e) => setFormData({ ...formData, player2Phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="player2-license">Numéro de licence FFT (optionnel)</Label>
                <Input
                  id="player2-license"
                  placeholder="12345678"
                  value={formData.player2License}
                  onChange={(e) => setFormData({ ...formData, player2License: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Conditions */}
          <Card>
            <CardHeader>
              <CardTitle>Conditions générales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, acceptTerms: checked as boolean })
                  }
                  required
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                  J'accepte les{" "}
                  <a href="/legal/terms" className="text-blue-600 hover:underline" target="_blank">
                    conditions d'utilisation
                  </a>{" "}
                  et le{" "}
                  <a href="/legal/privacy" className="text-blue-600 hover:underline" target="_blank">
                    règlement du tournoi
                  </a>
                </Label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="cancellation"
                  checked={formData.acceptCancellation}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, acceptCancellation: checked as boolean })
                  }
                  required
                />
                <Label htmlFor="cancellation" className="text-sm leading-relaxed cursor-pointer">
                  J'ai pris connaissance de la politique d'annulation. En cas de forfait après la date limite, 
                  aucun remboursement ne sera effectué.
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Payment info */}
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Paiement sécurisé</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Votre paiement est sécurisé par Stripe. Vos données bancaires ne transitent jamais par nos serveurs.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Lock className="h-3 w-3" />
                    <span>Connexion SSL cryptée</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => navigate(`/tournaments/${id}`)}
              className="flex-1"
            >
              Annuler
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              disabled={!formData.acceptTerms || !formData.acceptCancellation}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Procéder au paiement ({tournament.entryFee}€)
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TournamentRegister;
