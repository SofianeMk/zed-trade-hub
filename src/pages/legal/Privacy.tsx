const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 gold-gradient">
          Informativa sulla Privacy
        </h1>
        <div className="prose prose-invert max-w-4xl mx-auto">
          <p>Ultimo aggiornamento: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Raccolta dei dati</h2>
          <p>
            Raccogliamo solo i dati necessari per il corretto funzionamento dei nostri servizi.
          </p>
          
          <h2>2. Utilizzo dei dati</h2>
          <p>
            I tuoi dati vengono utilizzati per fornire i nostri servizi e migliorare la tua esperienza.
          </p>
          
          <h2>3. Protezione dei dati</h2>
          <p>
            Implementiamo misure di sicurezza appropriate per proteggere i tuoi dati.
          </p>
          
          <h2>4. I tuoi diritti</h2>
          <p>
            Hai il diritto di accedere ai tuoi dati, modificarli o eliminarli.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;