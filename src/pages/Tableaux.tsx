import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy, Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Match {
  id: string;
  team1: string;
  team2: string;
  score?: string;
  winner?: string;
}

interface Round {
  name: string;
  matches: Match[];
}

export default function Tableaux() {
  const { id } = useParams();

  // Mock data - à remplacer par des données réelles
  const rounds: Round[] = [
    {
      name: "Quart de finale",
      matches: [
        { id: "1", team1: "Dupont / Martin", team2: "Durand / Bernard", score: "6-4, 6-2", winner: "Dupont / Martin" },
        { id: "2", team1: "Moreau / Petit", team2: "Lefebvre / Dubois", score: "6-3, 4-6, 6-4", winner: "Moreau / Petit" },
        { id: "3", team1: "Garcia / Lopez", team2: "Müller / Schmidt", score: "6-2, 6-1", winner: "Garcia / Lopez" },
        { id: "4", team1: "Rousseau / Blanc", team2: "Noir / Vert", score: "6-3, 6-4", winner: "Rousseau / Blanc" },
      ],
    },
    {
      name: "Demi-finale",
      matches: [
        { id: "5", team1: "Dupont / Martin", team2: "Moreau / Petit", score: "6-4, 6-3", winner: "Dupont / Martin" },
        { id: "6", team1: "Garcia / Lopez", team2: "Rousseau / Blanc", score: "-", winner: undefined },
      ],
    },
    {
      name: "Finale",
      matches: [
        { id: "7", team1: "Dupont / Martin", team2: "À déterminer", score: "-", winner: undefined },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to={`/tournois/${id}`} className="inline-flex items-center text-gray-400 hover:text-primary mb-6">
          <ArrowLeft className="mr-2" size={16} />
          Retour au tournoi
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="gold-gradient">Tableaux du tournoi</span>
          </h1>
          <p className="text-gray-400">Visualisez la progression des équipes</p>
        </div>

        <Tabs defaultValue="tableau-principal" className="space-y-6">
          <TabsList>
            <TabsTrigger value="tableau-principal">Tableau principal</TabsTrigger>
            <TabsTrigger value="poules">Poules</TabsTrigger>
          </TabsList>

          <TabsContent value="tableau-principal">
            <div className="space-y-8">
              {rounds.map((round, roundIndex) => (
                <Card key={roundIndex}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Trophy className="mr-2" size={20} />
                      {round.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {round.matches.map((match) => (
                        <div
                          key={match.id}
                          className="border border-border rounded-lg p-4 bg-card hover:border-primary transition-colors"
                        >
                          <div className="space-y-2">
                            <div className={`p-2 rounded ${match.winner === match.team1 ? "bg-primary/20" : ""}`}>
                              <div className="font-medium text-sm">{match.team1}</div>
                            </div>
                            <div className="text-center text-xs text-gray-400">VS</div>
                            <div className={`p-2 rounded ${match.winner === match.team2 ? "bg-primary/20" : ""}`}>
                              <div className="font-medium text-sm">{match.team2}</div>
                            </div>
                            {match.score && (
                              <div className="text-center text-xs text-gray-400 mt-2">
                                {match.score}
                              </div>
                            )}
                            {match.winner && (
                              <Badge variant="default" className="w-full justify-center mt-2">
                                {match.winner} gagne
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="poules">
            <Card>
              <CardHeader>
                <CardTitle>Poules</CardTitle>
                <CardDescription>
                  Classement des poules préliminaires
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-400">
                  <Trophy className="mx-auto mb-4" size={48} />
                  <p>Les poules seront affichées ici une fois générées.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
