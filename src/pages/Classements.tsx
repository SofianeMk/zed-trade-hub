import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy, Download, BarChart3, TrendingUp, Users } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PlayerStats {
  id: string;
  name: string;
  partner: string;
  position: number;
  matchesPlayed: number;
  matchesWon: number;
  matchesLost: number;
  setsWon: number;
  setsLost: number;
  pointsFor: number;
  pointsAgainst: number;
  winRate: number;
}

export default function Classements() {
  const { id } = useParams();

  const rankings: PlayerStats[] = [
    {
      id: "1",
      name: "Dupont",
      partner: "Martin",
      position: 1,
      matchesPlayed: 5,
      matchesWon: 5,
      matchesLost: 0,
      setsWon: 10,
      setsLost: 2,
      pointsFor: 120,
      pointsAgainst: 80,
      winRate: 100,
    },
    {
      id: "2",
      name: "Garcia",
      partner: "Lopez",
      position: 2,
      matchesPlayed: 4,
      matchesWon: 3,
      matchesLost: 1,
      setsWon: 7,
      setsLost: 3,
      pointsFor: 95,
      pointsAgainst: 75,
      winRate: 75,
    },
    {
      id: "3",
      name: "Moreau",
      partner: "Petit",
      position: 3,
      matchesPlayed: 4,
      matchesWon: 2,
      matchesLost: 2,
      setsWon: 5,
      setsLost: 5,
      pointsFor: 85,
      pointsAgainst: 90,
      winRate: 50,
    },
    {
      id: "4",
      name: "Rousseau",
      partner: "Blanc",
      position: 4,
      matchesPlayed: 3,
      matchesWon: 1,
      matchesLost: 2,
      setsWon: 3,
      setsLost: 5,
      pointsFor: 60,
      pointsAgainst: 70,
      winRate: 33,
    },
  ];

  const getMedalIcon = (position: number) => {
    if (position === 1) return "🥇";
    if (position === 2) return "🥈";
    if (position === 3) return "🥉";
    return position;
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to={`/tournois/${id}`} className="inline-flex items-center text-gray-400 hover:text-primary mb-6">
          <ArrowLeft className="mr-2" size={16} />
          Retour au tournoi
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              <span className="gold-gradient">Classements et statistiques</span>
            </h1>
            <p className="text-gray-400">Consultez les résultats finaux et les performances</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline">
              <Download className="mr-2" /> Exporter
            </Button>
            <Button variant="outline">
              <Download className="mr-2" /> Export Beach-Padel
            </Button>
          </div>
        </div>

        <Tabs defaultValue="classement" className="space-y-6">
          <TabsList>
            <TabsTrigger value="classement">Classement final</TabsTrigger>
            <TabsTrigger value="statistiques">Statistiques détaillées</TabsTrigger>
          </TabsList>

          <TabsContent value="classement">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="mr-2" />
                  Classement final
                </CardTitle>
                <CardDescription>
                  Classement des équipes selon leurs performances
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Podium */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {rankings.slice(0, 3).map((player, index) => (
                      <div
                        key={player.id}
                        className={`text-center p-6 rounded-lg border ${
                          index === 0
                            ? "bg-primary/20 border-primary order-2"
                            : index === 1
                            ? "bg-secondary order-1"
                            : "bg-secondary order-3"
                        }`}
                      >
                        <div className="text-4xl mb-2">{getMedalIcon(player.position)}</div>
                        <div className="font-bold text-lg">{player.name}</div>
                        <div className="text-sm text-gray-400">+ {player.partner}</div>
                        <div className="mt-2 text-sm">
                          <Badge variant={index === 0 ? "default" : "secondary"}>
                            {player.matchesWon}V - {player.matchesLost}D
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tableau complet */}
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Position</TableHead>
                        <TableHead>Équipe</TableHead>
                        <TableHead>Matchs</TableHead>
                        <TableHead>Victoires</TableHead>
                        <TableHead>Défaites</TableHead>
                        <TableHead>Sets</TableHead>
                        <TableHead>Points</TableHead>
                        <TableHead>Taux de victoire</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rankings.map((player) => (
                        <TableRow key={player.id}>
                          <TableCell className="font-bold">
                            {getMedalIcon(player.position)}
                          </TableCell>
                          <TableCell>
                            <div>
                              <div className="font-medium">{player.name}</div>
                              <div className="text-sm text-gray-400">+ {player.partner}</div>
                            </div>
                          </TableCell>
                          <TableCell>{player.matchesPlayed}</TableCell>
                          <TableCell className="text-green-400">{player.matchesWon}</TableCell>
                          <TableCell className="text-red-400">{player.matchesLost}</TableCell>
                          <TableCell>
                            {player.setsWon} - {player.setsLost}
                          </TableCell>
                          <TableCell>
                            {player.pointsFor} - {player.pointsAgainst}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="w-16 bg-secondary rounded-full h-2">
                                <div
                                  className="bg-primary h-2 rounded-full"
                                  style={{ width: `${player.winRate}%` }}
                                />
                              </div>
                              <span className="text-sm">{player.winRate}%</span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="statistiques">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2" size={20} />
                    Participants
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{rankings.length}</p>
                  <p className="text-sm text-gray-400">équipes</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="mr-2" size={20} />
                    Matchs joués
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    {rankings.reduce((sum, p) => sum + p.matchesPlayed, 0)}
                  </p>
                  <p className="text-sm text-gray-400">au total</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2" size={20} />
                    Taux moyen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    {Math.round(
                      rankings.reduce((sum, p) => sum + p.winRate, 0) / rankings.length
                    )}%
                  </p>
                  <p className="text-sm text-gray-400">de victoires</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Statistiques par équipe</CardTitle>
                <CardDescription>
                  Détails des performances de chaque équipe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {rankings.map((player) => (
                    <div key={player.id} className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-lg">
                            {player.name} / {player.partner}
                          </h3>
                          <p className="text-sm text-gray-400">Position: {player.position}</p>
                        </div>
                        <Badge variant="default">{player.winRate}% de victoires</Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400">Matchs joués</p>
                          <p className="font-bold">{player.matchesPlayed}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Victoires</p>
                          <p className="font-bold text-green-400">{player.matchesWon}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Sets</p>
                          <p className="font-bold">
                            {player.setsWon} - {player.setsLost}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Points</p>
                          <p className="font-bold">
                            {player.pointsFor} - {player.pointsAgainst}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
