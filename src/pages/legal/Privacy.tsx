const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 gold-gradient">Politique de confidentialité</h1>
        <div className="prose max-w-4xl mx-auto prose-headings:text-primary prose-a:text-primary">
          <p>Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

          <h2>1. Responsable du traitement</h2>
          <p>
            PadelSetPro SAS, dont le siège social est situé au 18 rue des Pionniers, 75011 Paris, est responsable du traitement des
            données collectées via la plateforme et les services associés.
          </p>

          <h2>2. Données collectées</h2>
          <p>
            Nous recueillons les données nécessaires à la gestion des tournois : identité des joueurs et arbitres, coordonnées,
            licence FFT, informations d’inscription, paiements, scores, contenus média et données de navigation.
          </p>

          <h2>3. Finalités</h2>
          <ul>
            <li>Gestion des inscriptions, paiements et tableaux de tournois</li>
            <li>Communication avec les participants et envoi de convocations</li>
            <li>Publication des résultats et statistiques individuelles</li>
            <li>Analyse de l’utilisation de la plateforme et amélioration du service</li>
            <li>Respect des obligations légales et réglementaires (FFT, comptabilité)</li>
          </ul>

          <h2>4. Base légale</h2>
          <p>
            Les traitements sont fondés sur l’exécution du contrat (organisation du tournoi), l’intérêt légitime du club et, pour
            certaines communications marketing, le consentement explicite de l’utilisateur.
          </p>

          <h2>5. Durée de conservation</h2>
          <p>
            Les données liées à un tournoi sont conservées pendant la durée nécessaire à son organisation puis archivées pendant 3
            ans maximum, sauf obligation légale différente. Les données de facturation sont conservées 10 ans conformément au droit
            comptable.
          </p>

          <h2>6. Destinataires</h2>
          <p>
            Les données peuvent être consultées par le club organisateur, les juges-arbitres, les membres de l’équipe PadelSetPro
            habilités et nos prestataires techniques (hébergement, paiement, emailing) soumis à des obligations de confidentialité.
            Aucune donnée n’est vendue à des tiers.
          </p>

          <h2>7. Hébergement et sécurité</h2>
          <p>
            Les données sont hébergées dans l’Union européenne. Nous mettons en œuvre des mesures techniques et organisationnelles
            visant à protéger les informations contre l’accès non autorisé, la perte ou l’altération (chiffrement, journalisation,
            contrôle d’accès).
          </p>

          <h2>8. Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, d’opposition et de portabilité.
            Pour l’exercer, écrivez-nous à privacy@padelsetpro.com. Vous pouvez également introduire une réclamation auprès de la
            CNIL.
          </p>

          <h2>9. Cookies</h2>
          <p>
            Des cookies techniques sont nécessaires au fonctionnement de la plateforme. Des cookies analytiques peuvent être utilisés
            avec votre consentement pour améliorer l’expérience utilisateur. Vous pouvez modifier vos préférences à tout moment dans
            le bandeau cookies.
          </p>

          <h2>10. Contact</h2>
          <p>
            Pour toute question relative à cette politique ou au traitement de vos données, contactez-nous à privacy@padelsetpro.com
            ou par voie postale à l’adresse indiquée ci-dessus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;