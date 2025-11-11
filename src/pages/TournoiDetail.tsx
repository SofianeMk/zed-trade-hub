import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Calendar, MapPin, Users, Trophy, CreditCard, BarChart3, Settings } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function TournoiDetail() {
  const { id } = useParams();

  // Mock data - à remplacer par des données réelles
  const tournament = {
    id: id || "1",
    name: "Tournoi P100 - Printemps 2024",
    date: "2024-04-15",
    location: "Club Padel Paris",
    category: "P100",
    status: "inscriptions",
    participants: 24,
    maxParticipants: 32,
    format: "Poules + Tableau final",
    fees: 25,
    description: "Tournoi de printemps ouvert à tous les joueurs P100.",
  };

  const participants = [
    { id: "1", name: "Jean Dupont", partner: "Marie Martin", ranking: "P100", status: "confirmé" },
    { id: "2", name: "Pierre Durand", partner: "Sophie Bernard", ranking: "P100", status: "confirmé" },
    { id: "3", name: "Luc Moreau", partner: "Julie Petit", ranking: "P100", status: "en attente" },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/tournois" className="inline-flex items-center text-gray-400 hover:text-primary mb-6">
          <ArrowLeft className="mr-2" size={16} />
          Retour aux tournois
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                <span className="gold-gradient">{tournament.name}</span>
              </h1>
              <div className="flex flex-wrap gap-4 text-gray-400">
                <div className="flex items-center">
                  <Calendar className="mr-2" size={16} />
                  {new Date(tournament.date).toLocaleDateString("fr-FR", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  {tournament.location}
                </div>
                <div className="flex items-center">
                  <Users className="mr-2" size={16} />
                  {tournament.participants} / {tournament.maxParticipants}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Badge variant="default">{tournament.category}</Badge>
              <Badge variant="secondary">{tournament.status}</Badge>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="participants">Participants</TabsTrigger>
            <TabsTrigger value="brackets">Tableaux</TabsTrigger>
            <TabsTrigger value="scores">Scores</TabsTrigger>
            <TabsTrigger value="classements">Classements</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2" size={20} />
                    Participants
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{tournament.participants}</p>
                  <p className="text-sm text-gray-400">sur {tournament.maxParticipants} places</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="mr-2" size={20} />
                    Recettes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{tournament.participants * tournament.fees}€</p>
                  <p className="text-sm text-gray-400">à ce jour</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="mr-2" size={20} />
                    Format
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">{tournament.format}</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{tournament.description}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="participants">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Liste des participants</CardTitle>
                    <CardDescription>
                      {tournament.participants} équipes inscrites
                    </CardDescription>
                  </div>
                  {tournament.status === "inscriptions" && (
                    <Link to={`/tournois/${tournament.id}/inscriptions`}>
                      <Button className="bg-primary text-primary-foreground">
                        Gérer les inscriptions
                      </Button>
                    </Link>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Équipe</TableHead>
                      <TableHead>Classement</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {participants.map((participant) => (
                      <TableRow key={participant.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{participant.name}</div>
                            <div className="text-sm text-gray-400">+ {participant.partner}</div>
                          </div>
                        </TableCell>
                        <TableCell>{participant.ranking}</TableCell>
                        <TableCell>
                          <Badge variant={participant.status === "confirmé" ? "default" : "secondary"}>
                            {participant.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">Voir</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="brackets">
            <Card>
              <CardHeader>
                <CardTitle>Tableaux du tournoi</CardTitle>
                <CardDescription>
                  Visualisez et gérez les tableaux de votre tournoi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Trophy className="mx-auto mb-4 text-gray-400" size={48} />
                  <p className="text-gray-400 mb-4">Les tableaux seront générés automatiquement une fois les inscriptions closes.</p>
                  <Link to={`/tournois/${tournament.id}/tableaux`}>
                    <Button className="bg-primary text-primary-foreground">
                      Voir les tableaux
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scores">
            <Card>
              <CardHeader>
                <CardTitle>Saisie des scores</CardTitle>
                <CardDescription>
                  Saisissez les résultats des matchs en temps réel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="mx-auto mb-4 text-gray-400" size={48} />
                  <p className="text-gray-400 mb-4">Les matchs apparaîtront ici une fois les tableaux générés.</p>
                  <Link to={`/tournois/${tournament.id}/scores`}>
                    <Button className="bg-primary text-primary-foreground">
                      Accéder à la saisie des scores
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="classements">
            <Card>
              <CardHeader>
                <CardTitle>Classements et statistiques</CardTitle>
                <CardDescription>
                  Consultez les résultats finaux et les performances
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="mx-auto mb-4 text-gray-400" size={48} />
                  <p className="text-gray-400 mb-4">Les classements seront disponibles une fois le tournoi terminé.</p>
                  <Link to={`/tournois/${tournament.id}/classements`}>
                    <Button className="bg-primary text-primary-foreground">
                      Voir les classements
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="mr-2" />
                  Paramètres du tournoi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full">Modifier les informations</Button>
                  <Button variant="outline" className="w-full">Gérer les paiements</Button>
                  <Button variant="outline" className="w-full">Envoyer les convocations</Button>
                  <Button variant="destructive" className="w-full">Annuler le tournoi</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
