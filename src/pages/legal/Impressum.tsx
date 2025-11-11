const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 gold-gradient">Mentions légales</h1>
        <div className="prose max-w-4xl mx-auto prose-headings:text-primary prose-a:text-primary">
          <h2>Éditeur</h2>
          <p>
            PadelSetPro SAS<br />
            Capital social : 120 000 €<br />
            SIREN : 921 456 789<br />
            Siège social : 18 rue des Pionniers, 75011 Paris, France<br />
            Email : contact@padelsetpro.com<br />
            Téléphone : +33 1 76 42 09 88
          </p>

          <h2>Directeur de la publication</h2>
          <p>
            Antoine Lefèvre, Président de PadelSetPro SAS.<br />
            Contact : direction@padelsetpro.com
          </p>

          <h2>Hébergement</h2>
          <p>
            OVHcloud<br />
            2 rue Kellermann, 59100 Roubaix, France<br />
            www.ovhcloud.com
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus disponibles sur le site (textes, visuels, logos, vidéos, éléments graphiques, base de données)
            est protégé par le droit d’auteur et demeure la propriété exclusive de PadelSetPro SAS ou de ses partenaires. Toute
            reproduction ou représentation, totale ou partielle, est soumise à l’autorisation préalable de l’éditeur.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Pour toute information relative au traitement des données personnelles, veuillez consulter notre Politique de
            confidentialité ou adresser votre demande à privacy@padelsetpro.com.
          </p>

          <h2>Crédits</h2>
          <p>
            Conception et développement : Équipe Produit PadelSetPro.<br />
            Illustrations : PadelSetPro / iconographie interne.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
