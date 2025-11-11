import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  TrendingUp, 
  Users, 
  Euro,
  Calendar,
  Target,
  Award,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const navigate = useNavigate();

  // Mock data
  const overallStats = {
    totalTournaments: 47,
    totalPlayers: 1243,
    totalRevenue: 45850,
    averageParticipants: 26.4,
    upcomingTournaments: 3
  };

  const monthlyData = [
    { month: "Janvier", tournaments: 4, players: 128, revenue: 5760 },
    { month: "Février", tournaments: 5, players: 165, revenue: 7425 },
    { month: "Mars", tournaments: 6, players: 192, revenue: 8640 },
    { month: "Avril", tournaments: 4, players: 104, revenue: 4680 },
    { month: "Mai", tournaments: 7, players: 224, revenue: 10080 },
    { month: "Juin", tournaments: 5, players: 160, revenue: 7200 }
  ];

  const topPlayers = [
    { name: "Jean Dupont", tournaments: 12, victories: 8, winRate: 66.7 },
    { name: "Marc Martin", tournaments: 10, victories: 7, winRate: 70.0 },
    { name: "Pierre Durand", tournaments: 15, victories: 9, winRate: 60.0 },
    { name: "Luc Bernard", tournaments: 11, victories: 6, winRate: 54.5 },
    { name: "Thomas Petit", tournaments: 9, victories: 5, winRate: 55.6 }
  ];

  const tournamentPerformance = [
    { name: "Tournoi P100 Janvier", participants: 32, revenue: 1440, satisfaction: 4.8 },
    { name: "Open de Printemps", participants: 48, revenue: 2160, satisfaction: 4.9 },
    { name: "Tournoi P250 Mars", participants: 24, revenue: 1080, satisfaction: 4.7 },
    { name: "Championship Été", participants: 64, revenue: 2880, satisfaction: 5.0 },
    { name: "Tournoi Mixte", participants: 32, revenue: 1440, satisfaction: 4.6 }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Statistiques & Analyses</h1>
          <p className="text-gray-600">
            Suivez les performances de votre club et de vos tournois
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Trophy className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold">{overallStats.totalTournaments}</span>
              </div>
              <p className="text-sm text-gray-600">Tournois organisés</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-8 w-8 text-green-600" />
                <span className="text-2xl font-bold">{overallStats.totalPlayers}</span>
              </div>
              <p className="text-sm text-gray-600">Joueurs uniques</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Euro className="h-8 w-8 text-orange-600" />
                <span className="text-2xl font-bold">{overallStats.totalRevenue.toLocaleString()}€</span>
              </div>
              <p className="text-sm text-gray-600">Revenus totaux</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Target className="h-8 w-8 text-purple-600" />
                <span className="text-2xl font-bold">{overallStats.averageParticipants}</span>
              </div>
              <p className="text-sm text-gray-600">Participants moy.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Calendar className="h-8 w-8 text-pink-600" />
                <span className="text-2xl font-bold">{overallStats.upcomingTournaments}</span>
              </div>
              <p className="text-sm text-gray-600">À venir</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="monthly" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl">
            <TabsTrigger value="monthly">Mensuel</TabsTrigger>
            <TabsTrigger value="players">Joueurs</TabsTrigger>
            <TabsTrigger value="tournaments">Tournois</TabsTrigger>
          </TabsList>

          {/* Monthly Performance */}
          <TabsContent value="monthly" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance mensuelle</CardTitle>
                <CardDescription>
                  Évolution de vos activités mois par mois
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 pb-2 border-b font-semibold text-sm">
                    <span>Mois</span>
                    <span className="text-center">Tournois</span>
                    <span className="text-center">Joueurs</span>
                    <span className="text-right">Revenus</span>
                  </div>
                  {monthlyData.map((data, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 py-3 border-b last:border-0">
                      <span className="font-medium">{data.month}</span>
                      <span className="text-center">{data.tournaments}</span>
                      <span className="text-center">{data.players}</span>
                      <span className="text-right font-semibold text-green-600">{data.revenue}€</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">{monthlyData.reduce((acc, curr) => acc + curr.tournaments, 0)}</p>
                      <p className="text-sm text-gray-600">Total tournois</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">{monthlyData.reduce((acc, curr) => acc + curr.players, 0)}</p>
                      <p className="text-sm text-gray-600">Total joueurs</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-orange-600">{monthlyData.reduce((acc, curr) => acc + curr.revenue, 0)}€</p>
                      <p className="text-sm text-gray-600">Total revenus</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Top Players */}
          <TabsContent value="players" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top joueurs</CardTitle>
                <CardDescription>
                  Classement des joueurs les plus actifs et performants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 pb-2 border-b font-semibold text-sm">
                    <span>Joueur</span>
                    <span className="text-center">Tournois</span>
                    <span className="text-center">Victoires</span>
                    <span className="text-right">Taux victoire</span>
                  </div>
                  {topPlayers.map((player, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 py-3 items-center">
                      <div className="flex items-center gap-3">
                        {index < 3 && (
                          <Award className={`h-5 w-5 ${
                            index === 0 ? 'text-yellow-500' : 
                            index === 1 ? 'text-gray-400' : 
                            'text-orange-700'
                          }`} />
                        )}
                        <span className="font-medium">{player.name}</span>
                      </div>
                      <span className="text-center">{player.tournaments}</span>
                      <span className="text-center font-semibold">{player.victories}</span>
                      <span className="text-right">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-semibold">
                          {player.winRate}%
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tournament Performance */}
          <TabsContent value="tournaments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance des tournois</CardTitle>
                <CardDescription>
                  Analyse détaillée de vos événements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 pb-2 border-b font-semibold text-sm">
                    <span>Tournoi</span>
                    <span className="text-center">Participants</span>
                    <span className="text-center">Revenus</span>
                    <span className="text-right">Satisfaction</span>
                  </div>
                  {tournamentPerformance.map((tournament, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 py-3">
                      <span className="font-medium">{tournament.name}</span>
                      <span className="text-center">{tournament.participants}</span>
                      <span className="text-center font-semibold text-green-600">{tournament.revenue}€</span>
                      <span className="text-right">
                        <span className="flex items-center justify-end gap-1">
                          <span className="font-semibold">{tournament.satisfaction}</span>
                          <span className="text-yellow-500">★</span>
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Actions */}
        <div className="mt-8 flex gap-4">
          <Button 
            variant="outline"
            onClick={() => navigate("/dashboard/club")}
          >
            <BarChart3 className="mr-2 h-4 w-4" />
            Retour au tableau de bord
          </Button>
          <Button 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => {
              // TODO: Implement export functionality
              alert("Fonctionnalité d'export à venir");
            }}
          >
            Exporter les statistiques
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
