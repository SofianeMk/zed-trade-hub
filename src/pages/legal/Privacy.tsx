const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 gold-gradient">
          Politique de Confidentialité
        </h1>
        <div className="prose prose-invert max-w-4xl mx-auto">
          <p>Dernière mise à jour : {new Date().toLocaleDateString()}</p>
          
          <h2>1. Collecte des données</h2>
          <p>
            Nous collectons uniquement les données nécessaires au bon fonctionnement de nos services.
          </p>
          
          <h2>2. Utilisation des données</h2>
          <p>
            Vos données sont utilisées pour fournir nos services et améliorer votre expérience.
          </p>
          
          <h2>3. Protection des données</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données.
          </p>
          
          <h2>4. Vos droits</h2>
          <p>
            Vous avez le droit d'accéder à vos données, de les modifier ou de les supprimer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;