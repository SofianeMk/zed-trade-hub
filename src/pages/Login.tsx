import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { UserCircle, Building2, Award } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<"club" | "player" | "referee">("club");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log("Login:", { email, password, userType });
    
    // Redirect based on user type
    if (userType === "club") {
      navigate("/dashboard/club");
    } else if (userType === "player") {
      navigate("/dashboard/player");
    } else {
      navigate("/dashboard/referee");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log("Register:", { email, password, userType });
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Connexion à PadelSetPro</h1>
            <p className="text-gray-600">
              Gérez vos tournois ou suivez vos résultats en temps réel
            </p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Connexion</TabsTrigger>
              <TabsTrigger value="register">Inscription</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Se connecter</CardTitle>
                  <CardDescription>
                    Accédez à votre espace personnel
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label>Type de compte</Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          type="button"
                          variant={userType === "club" ? "default" : "outline"}
                          className="flex flex-col h-auto py-3"
                          onClick={() => setUserType("club")}
                        >
                          <Building2 className="h-5 w-5 mb-1" />
                          <span className="text-xs">Club</span>
                        </Button>
                        <Button
                          type="button"
                          variant={userType === "player" ? "default" : "outline"}
                          className="flex flex-col h-auto py-3"
                          onClick={() => setUserType("player")}
                        >
                          <UserCircle className="h-5 w-5 mb-1" />
                          <span className="text-xs">Joueur</span>
                        </Button>
                        <Button
                          type="button"
                          variant={userType === "referee" ? "default" : "outline"}
                          className="flex flex-col h-auto py-3"
                          onClick={() => setUserType("referee")}
                        >
                          <Award className="h-5 w-5 mb-1" />
                          <span className="text-xs">Arbitre</span>
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Mot de passe</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <a href="#" className="text-blue-600 hover:underline">
                        Mot de passe oublié ?
                      </a>
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Se connecter
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle>Créer un compte</CardTitle>
                  <CardDescription>
                    Rejoignez la communauté PadelSetPro
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label>Type de compte</Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          type="button"
                          variant={userType === "club" ? "default" : "outline"}
                          className="flex flex-col h-auto py-3"
                          onClick={() => setUserType("club")}
                        >
                          <Building2 className="h-5 w-5 mb-1" />
                          <span className="text-xs">Club</span>
                        </Button>
                        <Button
                          type="button"
                          variant={userType === "player" ? "default" : "outline"}
                          className="flex flex-col h-auto py-3"
                          onClick={() => setUserType("player")}
                        >
                          <UserCircle className="h-5 w-5 mb-1" />
                          <span className="text-xs">Joueur</span>
                        </Button>
                        <Button
                          type="button"
                          variant={userType === "referee" ? "default" : "outline"}
                          className="flex flex-col h-auto py-3"
                          onClick={() => setUserType("referee")}
                        >
                          <Award className="h-5 w-5 mb-1" />
                          <span className="text-xs">Arbitre</span>
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-name">
                        {userType === "club" ? "Nom du club" : "Nom complet"}
                      </Label>
                      <Input
                        id="register-name"
                        type="text"
                        placeholder={userType === "club" ? "Mon Club de Padel" : "Jean Dupont"}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email</Label>
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="votre@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-password">Mot de passe</Label>
                      <Input
                        id="register-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="••••••••"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Créer mon compte
                    </Button>

                    <p className="text-xs text-center text-gray-600">
                      En créant un compte, vous acceptez nos{" "}
                      <a href="/legal/terms" className="text-blue-600 hover:underline">
                        Conditions d'utilisation
                      </a>{" "}
                      et notre{" "}
                      <a href="/legal/privacy" className="text-blue-600 hover:underline">
                        Politique de confidentialité
                      </a>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Login;
