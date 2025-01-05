const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 gold-gradient">
          Mentions Légales
        </h1>
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h2>Informations légales</h2>
          <p>
            Zed VIP Company<br />
            [Adresse de l'entreprise]<br />
            [Numéro d'enregistrement]
          </p>
          
          <h2>Contact</h2>
          <p>
            Email : contact@zedvip.com<br />
            Telegram : @zedvipsupport
          </p>
          
          <h2>Responsable de la publication</h2>
          <p>
            [Nom du responsable]<br />
            Directeur de la publication
          </p>
          
          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par [Nom de l'hébergeur]<br />
            [Adresse de l'hébergeur]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;