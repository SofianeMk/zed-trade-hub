import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, Target, Users, Zap, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous nous engageons à fournir une plateforme de la plus haute qualité pour vos tournois"
    },
    {
      icon: Shield,
      title: "Fiabilité",
      description: "La sécurité et la stabilité sont au cœur de nos opérations"
    },
    {
      icon: Zap,
      title: "Simplicité",
      description: "Une interface intuitive qui rend l'organisation de tournois accessible à tous"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Développé par des passionnés de padel pour la communauté padel"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              À propos de PadelSetPro
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              La plateforme de référence pour l'organisation de tournois de padel, 
              conçue pour simplifier la vie des organisateurs et améliorer l'expérience des joueurs.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Notre Histoire
              </h2>
              <p className="text-gray-600 mb-4">
                PadelSetPro est né de la frustration de gérer des tournois avec des outils inadaptés. 
                Feuilles Excel, messages WhatsApp dispersés, calculs manuels des tableaux... 
                nous savions qu'il existait une meilleure façon de faire.
              </p>
              <p className="text-gray-600 mb-6">
                Aujourd'hui, nous sommes fiers d'accompagner des dizaines de clubs et des milliers de joueurs 
                dans l'organisation de tournois professionnels et conviviaux. Notre mission : rendre 
                l'organisation de tournois simple, rapide et agréable pour tous.
              </p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => navigate('/services')}
              >
                Découvrir nos fonctionnalités <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="relative h-[400px] w-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center">
              <img 
                src="/lovable-uploads/aaea4d69-fbf5-4cb9-8ae8-d227e2d4b234.png"
                alt="PadelSetPro"
                className="h-64 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200">
                <value.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-blue-200">Clubs partenaires</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-blue-200">Tournois organisés</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <p className="text-blue-200">Joueurs actifs</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-blue-200">Satisfaction client</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;