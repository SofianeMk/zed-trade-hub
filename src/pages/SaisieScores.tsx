import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Save, RefreshCw } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Match {
  id: string;
  round: string;
  team1: string;
  team2: string;
  score1?: number;
  score2?: number;
  set1?: string;
  set2?: string;
  set3?: string;
  status: "a_venir" | "en_cours" | "termine";
  court?: string;
  time?: string;
}

export default function SaisieScores() {
  const { id } = useParams();
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [scoreData, setScoreData] = useState({
    set1_team1: "",
    set1_team2: "",
    set2_team1: "",
    set2_team2: "",
    set3_team1: "",
    set3_team2: "",
  });

  const matches: Match[] = [
    {
      id: "1",
      round: "Quart de finale",
      team1: "Dupont / Martin",
      team2: "Durand / Bernard",
      score1: 2,
      score2: 0,
      set1: "6-4",
      set2: "6-2",
      status: "termine",
      court: "Court 1",
      time: "10:00",
    },
    {
      id: "2",
      round: "Quart de finale",
      team1: "Moreau / Petit",
      team2: "Lefebvre / Dubois",
      status: "en_cours",
      court: "Court 2",
      time: "11:00",
    },
    {
      id: "3",
      round: "Quart de finale",
      team1: "Garcia / Lopez",
      team2: "Müller / Schmidt",
      status: "a_venir",
      court: "Court 3",
      time: "12:00",
    },
  ];

  const handleScoreSubmit = () => {
    // Logique de sauvegarde des scores
    console.log("Scores sauvegardés:", scoreData);
    setIsDialogOpen(false);
    setScoreData({
      set1_team1: "",
      set1_team2: "",
      set2_team1: "",
      set2_team2: "",
      set3_team1: "",
      set3_team2: "",
    });
  };

  const openScoreDialog = (match: Match) => {
    setSelectedMatch(match);
    setIsDialogOpen(true);
  };

  const getStatusBadge = (status: Match["status"]) => {
    const statusMap = {
      a_venir: { label: "À venir", variant: "outline" as const },
      en_cours: { label: "En cours", variant: "secondary" as const },
      termine: { label: "Terminé", variant: "default" as const },
    };
    const statusInfo = statusMap[status];
    return <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>;
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
              <span className="gold-gradient">Saisie des scores</span>
            </h1>
            <p className="text-gray-400">Saisissez les résultats des matchs en temps réel</p>
          </div>
          <Button variant="outline">
            <RefreshCw className="mr-2" /> Actualiser
          </Button>
        </div>

        {/* Matchs par round */}
        <div className="space-y-6">
          {["Quart de finale", "Demi-finale", "Finale"].map((round) => {
            const roundMatches = matches.filter((m) => m.round === round);
            if (roundMatches.length === 0) return null;

            return (
              <Card key={round}>
                <CardHeader>
                  <CardTitle>{round}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Équipe 1</TableHead>
                        <TableHead>Score</TableHead>
                        <TableHead>Équipe 2</TableHead>
                        <TableHead>Court</TableHead>
                        <TableHead>Horaire</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {roundMatches.map((match) => (
                        <TableRow key={match.id}>
                          <TableCell className="font-medium">{match.team1}</TableCell>
                          <TableCell>
                            {match.status === "termine" ? (
                              <div className="flex items-center gap-2">
                                <span className="font-bold">{match.score1}</span>
                                <span className="text-gray-400">-</span>
                                <span className="font-bold">{match.score2}</span>
                                <div className="text-xs text-gray-400 ml-2">
                                  ({match.set1}, {match.set2})
                                </div>
                              </div>
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </TableCell>
                          <TableCell className="font-medium">{match.team2}</TableCell>
                          <TableCell>{match.court}</TableCell>
                          <TableCell>{match.time}</TableCell>
                          <TableCell>{getStatusBadge(match.status)}</TableCell>
                          <TableCell>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => openScoreDialog(match)}
                              disabled={match.status === "a_venir"}
                            >
                              {match.status === "termine" ? "Modifier" : "Saisir"}
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Score Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Saisir le score</DialogTitle>
              <DialogDescription>
                {selectedMatch?.team1} vs {selectedMatch?.team2}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 py-4">
              {/* Set 1 */}
              <div className="space-y-2">
                <Label>Set 1</Label>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="text-right font-medium">{selectedMatch?.team1}</div>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder="0"
                      value={scoreData.set1_team1}
                      onChange={(e) => setScoreData({ ...scoreData, set1_team1: e.target.value })}
                      className="text-center"
                    />
                    <span className="flex items-center">-</span>
                    <Input
                      type="number"
                      placeholder="0"
                      value={scoreData.set1_team2}
                      onChange={(e) => setScoreData({ ...scoreData, set1_team2: e.target.value })}
                      className="text-center"
                    />
                  </div>
                  <div className="font-medium">{selectedMatch?.team2}</div>
                </div>
              </div>

              {/* Set 2 */}
              <div className="space-y-2">
                <Label>Set 2</Label>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="text-right font-medium">{selectedMatch?.team1}</div>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder="0"
                      value={scoreData.set2_team1}
                      onChange={(e) => setScoreData({ ...scoreData, set2_team1: e.target.value })}
                      className="text-center"
                    />
                    <span className="flex items-center">-</span>
                    <Input
                      type="number"
                      placeholder="0"
                      value={scoreData.set2_team2}
                      onChange={(e) => setScoreData({ ...scoreData, set2_team2: e.target.value })}
                      className="text-center"
                    />
                  </div>
                  <div className="font-medium">{selectedMatch?.team2}</div>
                </div>
              </div>

              {/* Set 3 (si nécessaire) */}
              <div className="space-y-2">
                <Label>Set 3 (si nécessaire)</Label>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="text-right font-medium">{selectedMatch?.team1}</div>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder="0"
                      value={scoreData.set3_team1}
                      onChange={(e) => setScoreData({ ...scoreData, set3_team1: e.target.value })}
                      className="text-center"
                    />
                    <span className="flex items-center">-</span>
                    <Input
                      type="number"
                      placeholder="0"
                      value={scoreData.set3_team2}
                      onChange={(e) => setScoreData({ ...scoreData, set3_team2: e.target.value })}
                      className="text-center"
                    />
                  </div>
                  <div className="font-medium">{selectedMatch?.team2}</div>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button variant="outline" className="flex-1" onClick={() => setIsDialogOpen(false)}>
                  Annuler
                </Button>
                <Button className="flex-1 bg-primary text-primary-foreground" onClick={handleScoreSubmit}>
                  <Save className="mr-2" /> Enregistrer le score
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
