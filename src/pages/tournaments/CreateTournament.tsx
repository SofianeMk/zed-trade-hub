import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Calendar as CalendarIcon, ArrowLeft, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const CreateTournament = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    format: "",
    maxTeams: 32,
    entryFee: 0,
    description: "",
    isPublic: true,
    allowWaitlist: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating tournament:", { ...formData, date });
    // TODO: Implement tournament creation logic
    navigate("/dashboard/club");
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/dashboard/club")}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au tableau de bord
          </Button>
          <h1 className="text-3xl font-bold mb-2">Créer un tournoi</h1>
          <p className="text-gray-600">
            Configurez tous les paramètres de votre tournoi
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Informations générales */}
            <Card>
              <CardHeader>
                <CardTitle>Informations générales</CardTitle>
                <CardDescription>
                  Détails de base du tournoi
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom du tournoi *</Label>
                  <Input
                    id="name"
                    placeholder="Ex: Tournoi P100 Hommes"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Catégorie *</Label>
                    <Select 
                      value={formData.category} 
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez une catégorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="p25">P25</SelectItem>
                        <SelectItem value="p100">P100</SelectItem>
                        <SelectItem value="p250">P250</SelectItem>
                        <SelectItem value="p500">P500</SelectItem>
                        <SelectItem value="p1000">P1000</SelectItem>
                        <SelectItem value="p1500">P1500</SelectItem>
                        <SelectItem value="p2000">P2000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Date du tournoi *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP", { locale: fr }) : "Sélectionner une date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Décrivez votre tournoi..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Format du tournoi */}
            <Card>
              <CardHeader>
                <CardTitle>Format du tournoi</CardTitle>
                <CardDescription>
                  Choisissez le format et les paramètres de jeu
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="format">Format de jeu *</Label>
                  <Select 
                    value={formData.format} 
                    onValueChange={(value) => setFormData({ ...formData, format: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="poules">Poules puis tableau</SelectItem>
                      <SelectItem value="elimination">Élimination directe</SelectItem>
                      <SelectItem value="americano">Americano</SelectItem>
                      <SelectItem value="ladder">Ladder</SelectItem>
                      <SelectItem value="roundrobin">Round Robin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maxTeams">Nombre maximum d'équipes</Label>
                  <Input
                    id="maxTeams"
                    type="number"
                    min="4"
                    max="128"
                    value={formData.maxTeams}
                    onChange={(e) => setFormData({ ...formData, maxTeams: parseInt(e.target.value) })}
                  />
                  <p className="text-xs text-gray-500">
                    Entre 4 et 128 équipes
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Inscriptions et paiements */}
            <Card>
              <CardHeader>
                <CardTitle>Inscriptions et paiements</CardTitle>
                <CardDescription>
                  Paramètres d'inscription et tarifs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="entryFee">Frais d'inscription (€)</Label>
                  <Input
                    id="entryFee"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.entryFee}
                    onChange={(e) => setFormData({ ...formData, entryFee: parseFloat(e.target.value) })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Liste d'attente automatique</Label>
                    <p className="text-xs text-gray-500">
                      Gérer automatiquement les inscriptions en surplus
                    </p>
                  </div>
                  <Switch
                    checked={formData.allowWaitlist}
                    onCheckedChange={(checked) => setFormData({ ...formData, allowWaitlist: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Tournoi public</Label>
                    <p className="text-xs text-gray-500">
                      Visible dans la liste des tournois publics
                    </p>
                  </div>
                  <Switch
                    checked={formData.isPublic}
                    onCheckedChange={(checked) => setFormData({ ...formData, isPublic: checked })}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex gap-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate("/dashboard/club")}
                className="flex-1"
              >
                Annuler
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                <Save className="mr-2 h-4 w-4" />
                Créer le tournoi
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTournament;
