const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 gold-gradient">
          Termini e Condizioni
        </h1>
        <div className="prose prose-invert max-w-4xl mx-auto">
          <p>Ultimo aggiornamento: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Accettazione dei termini</h2>
          <p>
            Accedendo e utilizzando questo sito web, accetti di essere vincolato da questi termini e condizioni.
          </p>
          
          <h2>2. Servizi</h2>
          <p>
            Zed VIP Company fornisce servizi di trading automatizzato, segnali privati, sessioni dal vivo e sfide prop firm.
          </p>
          
          <h2>3. Responsabilità</h2>
          <p>
            Il trading comporta rischi. Non possiamo garantire risultati specifici. I tuoi risultati potrebbero variare.
          </p>
          
          <h2>4. Proprietà intellettuale</h2>
          <p>
            Tutti i contenuti presenti su questo sito sono di proprietà esclusiva di Zed VIP Company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;