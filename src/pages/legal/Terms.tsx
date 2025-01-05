const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 gold-gradient">
          Conditions Générales d'Utilisation
        </h1>
        <div className="prose prose-invert max-w-4xl mx-auto">
          <p>Dernière mise à jour : {new Date().toLocaleDateString()}</p>
          
          <h2>1. Acceptation des conditions</h2>
          <p>
            En accédant et en utilisant ce site web, vous acceptez d'être lié par ces conditions générales d'utilisation.
          </p>
          
          <h2>2. Services</h2>
          <p>
            Zed VIP Company fournit des services de trading automatisé, des signaux privés, des sessions en direct et des défis prop firm.
          </p>
          
          <h2>3. Responsabilité</h2>
          <p>
            Le trading comporte des risques. Nous ne pouvons garantir de résultats spécifiques. Vos résultats peuvent varier.
          </p>
          
          <h2>4. Propriété intellectuelle</h2>
          <p>
            Tout le contenu présent sur ce site est la propriété exclusive de Zed VIP Company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;