import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  Users, 
  Save,
  ArrowLeft,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ScoreEntry = () => {
  const navigate = useNavigate();

  // Mock matches data
  const [matches, setMatches] = useState([
    {
      id: 1,
      court: 1,
      time: "09:00",
      tournament: "Tournoi P100 Hommes",
      round: "Poule A",
      team1: { name: "Dupont / Martin", score: [6, 0, 0] },
      team2: { name: "Durand / Bernard", score: [0, 0, 0] },
      status: "À venir"
    },
    {
      id: 2,
      court: 2,
      time: "09:00",
      tournament: "Tournoi P100 Hommes",
      round: "Poule A",
      team1: { name: "Petit / Roux", score: [6, 6, 0] },
      team2: { name: "Simon / Michel", score: [3, 3, 0] },
      status: "En cours"
    },
    {
      id: 3,
      court: 1,
      time: "08:00",
      tournament: "Tournoi P100 Hommes",
      round: "Poule B",
      team1: { name: "Leroy / Moreau", score: [6, 6, 0] },
      team2: { name: "Fournier / Girard", score: [2, 3, 0] },
      status: "Terminé"
    }
  ]);

  const [selectedMatch, setSelectedMatch] = useState<any>(null);
  const [scoreEdit, setScoreEdit] = useState({
    team1Set1: 0,
    team1Set2: 0,
    team1Set3: 0,
    team2Set1: 0,
    team2Set2: 0,
    team2Set3: 0
  });

  const handleMatchSelect = (match: any) => {
    setSelectedMatch(match);
    setScoreEdit({
      team1Set1: match.team1.score[0],
      team1Set2: match.team1.score[1],
      team1Set3: match.team1.score[2],
      team2Set1: match.team2.score[0],
      team2Set2: match.team2.score[1],
      team2Set3: match.team2.score[2]
    });
  };

  const handleSaveScore = () => {
    if (!selectedMatch) return;

    const updatedMatches = matches.map(match => {
      if (match.id === selectedMatch.id) {
        return {
          ...match,
          team1: {
            ...match.team1,
            score: [scoreEdit.team1Set1, scoreEdit.team1Set2, scoreEdit.team1Set3]
          },
          team2: {
            ...match.team2,
            score: [scoreEdit.team2Set1, scoreEdit.team2Set2, scoreEdit.team2Set3]
          },
          status: "Terminé"
        };
      }
      return match;
    });

    setMatches(updatedMatches);
    setSelectedMatch(null);
    // TODO: Send to backend
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "À venir":
        return "bg-gray-500";
      case "En cours":
        return "bg-blue-500";
      case "Terminé":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "À venir":
        return <Clock className="h-4 w-4" />;
      case "En cours":
        return <AlertCircle className="h-4 w-4" />;
      case "Terminé":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const filterMatches = (status: string) => {
    if (status === "all") return matches;
    return matches.filter(match => match.status === status);
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/dashboard/club")}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour au tableau de bord
        </Button>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Saisie des scores</h1>
            <p className="text-gray-600">Gérez les scores de vos matchs en temps réel</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {filterMatches("À venir").length} à venir
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1 border-blue-500 text-blue-600">
              <AlertCircle className="h-3 w-3" />
              {filterMatches("En cours").length} en cours
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1 border-green-500 text-green-600">
              <CheckCircle className="h-3 w-3" />
              {filterMatches("Terminé").length} terminés
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Matches List */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="upcoming">À venir</TabsTrigger>
                <TabsTrigger value="live">En cours</TabsTrigger>
                <TabsTrigger value="finished">Terminés</TabsTrigger>
              </TabsList>

              {["all", "upcoming", "live", "finished"].map((tab) => (
                <TabsContent key={tab} value={tab} className="space-y-4 mt-4">
                  {filterMatches(
                    tab === "all" ? "all" : 
                    tab === "upcoming" ? "À venir" : 
                    tab === "live" ? "En cours" : "Terminé"
                  ).map((match) => (
                    <Card 
                      key={match.id}
                      className={`cursor-pointer transition-all hover:shadow-lg ${
                        selectedMatch?.id === match.id ? 'border-2 border-blue-500' : ''
                      }`}
                      onClick={() => handleMatchSelect(match)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-lg">
                              <Trophy className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-semibold">{match.tournament}</p>
                              <p className="text-sm text-gray-500">{match.round}</p>
                            </div>
                          </div>
                          <Badge className={`${getStatusColor(match.status)} flex items-center gap-1`}>
                            {getStatusIcon(match.status)}
                            {match.status}
                          </Badge>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Users className="h-5 w-5 text-gray-400" />
                              <span className="font-semibold">{match.team1.name}</span>
                            </div>
                            <div className="flex gap-2">
                              {match.team1.score.map((score, idx) => (
                                <span 
                                  key={idx} 
                                  className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold ${
                                    score > match.team2.score[idx] ? 'bg-green-100 text-green-700' : 'bg-gray-100'
                                  }`}
                                >
                                  {score}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Users className="h-5 w-5 text-gray-400" />
                              <span className="font-semibold">{match.team2.name}</span>
                            </div>
                            <div className="flex gap-2">
                              {match.team2.score.map((score, idx) => (
                                <span 
                                  key={idx} 
                                  className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold ${
                                    score > match.team1.score[idx] ? 'bg-green-100 text-green-700' : 'bg-gray-100'
                                  }`}
                                >
                                  {score}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t flex items-center justify-between text-sm text-gray-500">
                          <span>Court {match.court}</span>
                          <span>{match.time}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {filterMatches(
                    tab === "all" ? "all" : 
                    tab === "upcoming" ? "À venir" : 
                    tab === "live" ? "En cours" : "Terminé"
                  ).length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                      <Trophy className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p>Aucun match dans cette catégorie</p>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Score Editor */}
          <div>
            {selectedMatch ? (
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Éditer le score</CardTitle>
                  <CardDescription>
                    {selectedMatch.tournament} - {selectedMatch.round}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Team 1 */}
                  <div>
                    <p className="font-semibold mb-3">{selectedMatch.team1.name}</p>
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="text-xs text-gray-500 block mb-1">Set 1</label>
                        <Input
                          type="number"
                          min="0"
                          max="7"
                          value={scoreEdit.team1Set1}
                          onChange={(e) => setScoreEdit({ ...scoreEdit, team1Set1: parseInt(e.target.value) || 0 })}
                          className="text-center font-bold"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 block mb-1">Set 2</label>
                        <Input
                          type="number"
                          min="0"
                          max="7"
                          value={scoreEdit.team1Set2}
                          onChange={(e) => setScoreEdit({ ...scoreEdit, team1Set2: parseInt(e.target.value) || 0 })}
                          className="text-center font-bold"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 block mb-1">Set 3</label>
                        <Input
                          type="number"
                          min="0"
                          max="7"
                          value={scoreEdit.team1Set3}
                          onChange={(e) => setScoreEdit({ ...scoreEdit, team1Set3: parseInt(e.target.value) || 0 })}
                          className="text-center font-bold"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4" />

                  {/* Team 2 */}
                  <div>
                    <p className="font-semibold mb-3">{selectedMatch.team2.name}</p>
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="text-xs text-gray-500 block mb-1">Set 1</label>
                        <Input
                          type="number"
                          min="0"
                          max="7"
                          value={scoreEdit.team2Set1}
                          onChange={(e) => setScoreEdit({ ...scoreEdit, team2Set1: parseInt(e.target.value) || 0 })}
                          className="text-center font-bold"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 block mb-1">Set 2</label>
                        <Input
                          type="number"
                          min="0"
                          max="7"
                          value={scoreEdit.team2Set2}
                          onChange={(e) => setScoreEdit({ ...scoreEdit, team2Set2: parseInt(e.target.value) || 0 })}
                          className="text-center font-bold"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 block mb-1">Set 3</label>
                        <Input
                          type="number"
                          min="0"
                          max="7"
                          value={scoreEdit.team2Set3}
                          onChange={(e) => setScoreEdit({ ...scoreEdit, team2Set3: parseInt(e.target.value) || 0 })}
                          className="text-center font-bold"
                        />
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={handleSaveScore}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Enregistrer le score
                  </Button>

                  <Button 
                    onClick={() => setSelectedMatch(null)}
                    variant="outline"
                    className="w-full"
                  >
                    Annuler
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-12 text-center text-gray-400">
                  <Trophy className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Sélectionnez un match pour éditer le score</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreEntry;
