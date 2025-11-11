import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, UserPlus, Search, CheckCircle2, Clock, XCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Inscriptions() {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const participants = [
    { id: "1", name: "Jean Dupont", partner: "Marie Martin", ranking: "P100", status: "confirmé", payment: "payé" },
    { id: "2", name: "Pierre Durand", partner: "Sophie Bernard", ranking: "P100", status: "confirmé", payment: "payé" },
    { id: "3", name: "Luc Moreau", partner: "Julie Petit", ranking: "P100", status: "en attente", payment: "en attente" },
    { id: "4", name: "Marc Lefebvre", partner: "Anne Dubois", ranking: "P100", status: "liste_attente", payment: "-" },
  ];

  const filteredParticipants = participants.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.partner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; variant: "default" | "secondary" | "outline" | "destructive" }> = {
      confirmé: { label: "Confirmé", variant: "default" },
      en_attente: { label: "En attente", variant: "secondary" },
      liste_attente: { label: "Liste d'attente", variant: "outline" },
    };
    const statusInfo = statusMap[status] || { label: status, variant: "outline" as const };
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
              <span className="gold-gradient">Gestion des inscriptions</span>
            </h1>
            <p className="text-gray-400">Gérez les participants et les paiements</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <UserPlus className="mr-2" /> Ajouter une équipe
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ajouter une équipe</DialogTitle>
                <DialogDescription>
                  Recherchez un joueur licencié FFT ou ajoutez manuellement
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Rechercher un licencié FFT</Label>
                  <div className="flex gap-2">
                    <Input placeholder="Nom, prénom ou numéro de licence" />
                    <Button><Search /></Button>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-400">ou</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Joueur 1 *</Label>
                    <Input placeholder="Nom" />
                    <Input placeholder="Prénom" />
                    <Input placeholder="Classement (ex: P100)" />
                  </div>
                  <div className="space-y-2">
                    <Label>Joueur 2 *</Label>
                    <Input placeholder="Nom" />
                    <Input placeholder="Prénom" />
                    <Input placeholder="Classement (ex: P100)" />
                  </div>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button variant="outline" className="flex-1" onClick={() => setIsDialogOpen(false)}>
                    Annuler
                  </Button>
                  <Button className="flex-1 bg-primary text-primary-foreground">
                    Ajouter l'équipe
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total inscrits</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <CheckCircle2 className="text-primary" size={24} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">En attente</p>
                  <p className="text-2xl font-bold">1</p>
                </div>
                <Clock className="text-yellow-500" size={24} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Liste d'attente</p>
                  <p className="text-2xl font-bold">1</p>
                </div>
                <XCircle className="text-gray-400" size={24} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Places restantes</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <UserPlus className="text-green-500" size={24} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Participants List */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <CardTitle>Liste des participants</CardTitle>
                <CardDescription>Gérez les inscriptions et les paiements</CardDescription>
              </div>
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-[300px]"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Équipe</TableHead>
                  <TableHead>Classement</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Paiement</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredParticipants.map((participant) => (
                  <TableRow key={participant.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{participant.name}</div>
                        <div className="text-sm text-gray-400">+ {participant.partner}</div>
                      </div>
                    </TableCell>
                    <TableCell>{participant.ranking}</TableCell>
                    <TableCell>{getStatusBadge(participant.status)}</TableCell>
                    <TableCell>
                      <Badge variant={participant.payment === "payé" ? "default" : "secondary"}>
                        {participant.payment}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">Voir</Button>
                        {participant.status === "en_attente" && (
                          <Button variant="outline" size="sm">Confirmer</Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
