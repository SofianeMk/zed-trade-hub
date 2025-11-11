import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  Users, 
  Trophy, 
  Plus, 
  TrendingUp, 
  Euro,
  Clock,
  CheckCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ClubDashboard = () => {
  const navigate = useNavigate();

  // Mock data
  const stats = [
    {
      title: "Tournois actifs",
      value: "3",
      icon: Trophy,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Participants inscrits",
      value: "142",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Revenus du mois",
      value: "3,850€",
      icon: Euro,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      title: "Matchs à venir",
      value: "24",
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  const upcomingTournaments = [
    {
      id: 1,
      name: "Tournoi P100 Hommes",
      date: "2025-11-15",
      participants: 32,
      status: "Inscriptions ouvertes",
      statusColor: "bg-green-500"
    },
    {
      id: 2,
      name: "Tournoi P250 Mixte",
      date: "2025-11-20",
      participants: 28,
      status: "En cours",
      statusColor: "bg-blue-500"
    },
    {
      id: 3,
      name: "Open du Club - Femmes",
      date: "2025-11-25",
      participants: 16,
      status: "Planification",
      statusColor: "bg-yellow-500"
    }
  ];

  const recentActivities = [
    { action: "Nouvelle inscription", tournament: "Tournoi P100", time: "Il y a 5 minutes" },
    { action: "Paiement reçu", tournament: "Tournoi P250", time: "Il y a 1 heure" },
    { action: "Match complété", tournament: "Open du Club", time: "Il y a 2 heures" },
    { action: "Tableau généré", tournament: "Tournoi P100", time: "Il y a 3 heures" }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Tableau de bord</h1>
            <p className="text-gray-600">Gérez vos tournois et suivez vos performances</p>
          </div>
          <Button 
            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700"
            onClick={() => navigate("/tournaments/create")}
          >
            <Plus className="mr-2 h-4 w-4" />
            Créer un tournoi
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-full`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Tournaments */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Tournois à venir</CardTitle>
                <CardDescription>Gérez vos tournois en cours et à venir</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingTournaments.map((tournament) => (
                    <div 
                      key={tournament.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                      onClick={() => navigate(`/tournaments/${tournament.id}`)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <Trophy className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{tournament.name}</h3>
                          <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(tournament.date).toLocaleDateString('fr-FR')}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {tournament.participants} équipes
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`${tournament.statusColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                          {tournament.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => navigate("/tournaments")}
                >
                  Voir tous les tournois
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Activité récente</CardTitle>
                <CardDescription>Dernières actions sur vos tournois</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-full mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">{activity.action}</p>
                        <p className="text-xs text-gray-600">{activity.tournament}</p>
                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Actions rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => navigate("/tournaments/create")}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Nouveau tournoi
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => navigate("/scores")}
                >
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Saisir des scores
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => navigate("/analytics")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Voir les statistiques
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubDashboard;
