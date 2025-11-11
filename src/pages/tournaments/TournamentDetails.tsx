import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  Euro,
  Clock,
  ArrowLeft,
  Share2,
  Download
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const TournamentDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isRegistered, setIsRegistered] = useState(false);

  // Mock tournament data
  const tournament = {
    id: 1,
    name: "Tournoi P100 Hommes",
    category: "P100",
    date: "2025-11-15",
    location: "Club de Padel Paris",
    address: "123 Rue du Padel, 75001 Paris",
    maxTeams: 32,
    registeredTeams: 24,
    entryFee: 45,
    format: "Poules puis tableau final",
    status: "Inscriptions ouvertes",
    description: "Tournoi homologué FFT catégorie P100. Ouvert à tous les joueurs classés. Format poules de 4 équipes puis tableau final à élimination directe.",
    organizer: "Club de Padel Paris",
    courts: 6,
    startTime: "09:00",
    prizes: ["150€", "100€", "50€"]
  };

  const registeredTeams = [
    { id: 1, player1: "Jean Dupont", player2: "Marc Martin", ranking: "P100" },
    { id: 2, player1: "Pierre Durand", player2: "Luc Bernard", ranking: "P250" },
    { id: 3, player1: "Thomas Petit", player2: "Nicolas Roux", ranking: "P100" },
    { id: 4, player1: "Alexandre Simon", player2: "David Michel", ranking: "P100" }
  ];

  const handleRegister = () => {
    navigate(`/tournaments/${id}/register`);
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/tournaments")}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux tournois
        </Button>

        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <Badge className="bg-orange-500 mb-3">{tournament.category}</Badge>
              <h1 className="text-4xl font-bold mb-2">{tournament.name}</h1>
              <div className="flex flex-wrap gap-4 text-blue-100">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(tournament.date).toLocaleDateString('fr-FR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {tournament.startTime}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {tournament.location}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                <Share2 className="mr-2 h-4 w-4" />
                Partager
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="info" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="info">Informations</TabsTrigger>
                <TabsTrigger value="participants">Participants</TabsTrigger>
                <TabsTrigger value="bracket">Tableaux</TabsTrigger>
              </TabsList>

              <TabsContent value="info" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{tournament.description}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Détails du tournoi</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Format</p>
                        <p className="font-semibold">{tournament.format}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Organisateur</p>
                        <p className="font-semibold">{tournament.organizer}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Nombre de courts</p>
                        <p className="font-semibold">{tournament.courts} courts</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Équipes inscrites</p>
                        <p className="font-semibold">{tournament.registeredTeams}/{tournament.maxTeams}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Dotation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {tournament.prizes.map((prize, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Trophy className={`h-5 w-5 ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : 'text-orange-700'}`} />
                            <span className="font-semibold">{index + 1}{index === 0 ? 'er' : 'ème'} place</span>
                          </div>
                          <span className="font-bold text-green-600">{prize}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="participants">
                <Card>
                  <CardHeader>
                    <CardTitle>Équipes inscrites ({tournament.registeredTeams})</CardTitle>
                    <CardDescription>
                      {tournament.maxTeams - tournament.registeredTeams} places restantes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {registeredTeams.map((team) => (
                        <div key={team.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-full">
                              <Users className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-semibold">{team.player1} / {team.player2}</p>
                              <p className="text-sm text-gray-500">Classement: {team.ranking}</p>
                            </div>
                          </div>
                          <Badge variant="outline">{team.ranking}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bracket">
                <Card>
                  <CardHeader>
                    <CardTitle>Tableaux</CardTitle>
                    <CardDescription>
                      Les tableaux seront générés après la clôture des inscriptions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-gray-400">
                      <Trophy className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p>Les tableaux ne sont pas encore disponibles</p>
                      <p className="text-sm">Ils seront générés automatiquement après la clôture des inscriptions</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Card */}
            <Card>
              <CardHeader>
                <CardTitle>Inscription</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600 mb-1">Frais d'inscription</p>
                  <p className="text-4xl font-bold text-blue-600">{tournament.entryFee}€</p>
                  <p className="text-xs text-gray-500 mt-1">par équipe</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Places disponibles</span>
                    <span className="font-semibold">{tournament.maxTeams - tournament.registeredTeams}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(tournament.registeredTeams / tournament.maxTeams) * 100}%` }}
                    />
                  </div>
                </div>

                {!isRegistered ? (
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={handleRegister}
                  >
                    S'inscrire au tournoi
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <Badge className="w-full justify-center py-2 bg-green-500">
                      ✓ Inscrit
                    </Badge>
                    <Button variant="outline" className="w-full">
                      Annuler mon inscription
                    </Button>
                  </div>
                )}

                <p className="text-xs text-center text-gray-500">
                  Paiement sécurisé par Stripe
                </p>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card>
              <CardHeader>
                <CardTitle>Lieu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="font-semibold">{tournament.location}</p>
                  <p className="text-sm text-gray-600">{tournament.address}</p>
                  <Button variant="outline" className="w-full">
                    <MapPin className="mr-2 h-4 w-4" />
                    Voir sur la carte
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Contacter l'organisateur
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentDetails;
