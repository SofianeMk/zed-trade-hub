import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, Users, Trophy, MapPin, Clock, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Tournament {
  id: string;
  name: string;
  date: string;
  location: string;
  category: string;
  status: "inscriptions" | "en_cours" | "termine";
  participants: number;
  maxParticipants: number;
  format: string;
}

const mockTournaments: Tournament[] = [
  {
    id: "1",
    name: "Tournoi P100 - Printemps 2024",
    date: "2024-04-15",
    location: "Club Padel Paris",
    category: "P100",
    status: "inscriptions",
    participants: 24,
    maxParticipants: 32,
    format: "Poules + Tableau final",
  },
  {
    id: "2",
    name: "Championnat Mixte",
    date: "2024-04-20",
    location: "Padel Center Lyon",
    category: "P250",
    status: "en_cours",
    participants: 16,
    maxParticipants: 16,
    format: "Tableau à élimination",
  },
  {
    id: "3",
    name: "Tournoi Amateur",
    date: "2024-03-10",
    location: "Club Padel Marseille",
    category: "P25",
    status: "termine",
    participants: 32,
    maxParticipants: 32,
    format: "Americano",
  },
];

export default function Tournois() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const getStatusBadge = (status: Tournament["status"]) => {
    const statusMap = {
      inscriptions: { label: "Inscriptions ouvertes", variant: "default" as const },
      en_cours: { label: "En cours", variant: "secondary" as const },
      termine: { label: "Terminé", variant: "outline" as const },
    };
    const statusInfo = statusMap[status];
    return <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>;
  };

  const filteredTournaments = mockTournaments.filter((tournament) => {
    const matchesSearch = tournament.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tournament.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || tournament.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              <span className="gold-gradient">Tournois</span>
            </h1>
            <p className="text-gray-400">Gérez et suivez tous vos tournois de padel</p>
          </div>
          <Link to="/tournois/nouveau">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 md:mt-0">
              <Plus className="mr-2" /> Créer un tournoi
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Rechercher un tournoi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <Filter className="mr-2" size={16} />
              <SelectValue placeholder="Statut" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les statuts</SelectItem>
              <SelectItem value="inscriptions">Inscriptions ouvertes</SelectItem>
              <SelectItem value="en_cours">En cours</SelectItem>
              <SelectItem value="termine">Terminé</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tournaments Grid */}
        {filteredTournaments.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-gray-400 mb-4">Aucun tournoi trouvé</p>
              <Link to="/tournois/nouveau">
                <Button variant="outline">Créer votre premier tournoi</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTournaments.map((tournament) => (
              <Card key={tournament.id} className="card-shine">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{tournament.name}</CardTitle>
                    {getStatusBadge(tournament.status)}
                  </div>
                  <CardDescription>{tournament.category}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="mr-2" size={16} />
                    {new Date(tournament.date).toLocaleDateString("fr-FR", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="mr-2" size={16} />
                    {tournament.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="mr-2" size={16} />
                    {tournament.participants} / {tournament.maxParticipants} participants
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Trophy className="mr-2" size={16} />
                    {tournament.format}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Link to={`/tournois/${tournament.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      Voir les détails
                    </Button>
                  </Link>
                  {tournament.status === "inscriptions" && (
                    <Link to={`/tournois/${tournament.id}/inscriptions`} className="flex-1">
                      <Button className="w-full bg-primary text-primary-foreground">
                        Gérer
                      </Button>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
