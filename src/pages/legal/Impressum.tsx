const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 gold-gradient">
          Note Legali
        </h1>
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h2>Informazioni legali</h2>
          <p>
            Zed VIP Company<br />
            [Indirizzo dell'azienda]<br />
            [Numero di registrazione]
          </p>
          
          <h2>Contatti</h2>
          <p>
            Email: contact@zedvip.com<br />
            Telegram: @zedvipsupport
          </p>
          
          <h2>Responsabile della pubblicazione</h2>
          <p>
            [Nome del responsabile]<br />
            Direttore della pubblicazione
          </p>
          
          <h2>Hosting</h2>
          <p>
            Questo sito è ospitato da [Nome dell'host]<br />
            [Indirizzo dell'host]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;