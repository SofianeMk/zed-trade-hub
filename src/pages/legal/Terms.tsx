const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 gold-gradient">Conditions générales d’utilisation</h1>
        <div className="prose max-w-4xl mx-auto prose-headings:text-primary prose-a:text-primary">
          <p>Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

          <h2>1. Objet</h2>
          <p>
            Les présentes conditions générales d’utilisation (ci-après « CGU ») encadrent l’accès et l’utilisation de la plateforme
            PadelSetPro, éditée par PadelSetPro SAS, et destinée aux clubs, juges-arbitres, joueurs et partenaires impliqués dans
            l’organisation de tournois de padel.
          </p>

          <h2>2. Accès au service</h2>
          <p>
            L’utilisation de la plateforme nécessite la création d’un compte administrateur (club ou organisateur) et l’acceptation
            des présentes CGU. Le club reste responsable de la confidentialité de ses identifiants et de l’exactitude des
            informations transmises sur ses événements.
          </p>

          <h2>3. Description des fonctionnalités</h2>
          <p>
            PadelSetPro propose notamment : la gestion des inscriptions et paiements, la planification des rencontres, la saisie des
            scores en direct, la communication multicanal, la diffusion des résultats et la génération de rapports statistiques.
            Certaines fonctionnalités peuvent être soumises à souscription spécifique.
          </p>

          <h2>4. Obligations de l’utilisateur</h2>
          <p>
            L’utilisateur s’engage à utiliser la plateforme conformément à la législation en vigueur, aux règlements de la FFT et
            aux droits des joueurs. Il s’interdit d’introduire des données inexactes, de porter atteinte à l’intégrité du système ou
            d’exploiter la plateforme à des fins illicites.
          </p>

          <h2>5. Responsabilités</h2>
          <p>
            PadelSetPro met en œuvre tous les moyens raisonnables pour assurer la disponibilité et la sécurité du service. La
            responsabilité de l’éditeur ne saurait être engagée en cas d’interruption liée à la maintenance, à un cas de force
            majeure ou à un usage non conforme de la plateforme par l’utilisateur.
          </p>

          <h2>6. Propriété intellectuelle</h2>
          <p>
            L’ensemble des éléments composant la plateforme (textes, graphismes, logos, bases de données, code source) est protégé
            par le droit d’auteur et demeure la propriété exclusive de PadelSetPro SAS. Toute reproduction ou exploitation non
            autorisée est interdite.
          </p>

          <h2>7. Données personnelles</h2>
          <p>
            La collecte et le traitement des données sont détaillés dans notre Politique de confidentialité. Les utilisateurs
            disposent d’un droit d’accès, de rectification et de suppression en écrivant à privacy@padelsetpro.com.
          </p>

          <h2>8. Durée et résiliation</h2>
          <p>
            Les CGU sont applicables pendant toute la durée d’utilisation de la plateforme. PadelSetPro se réserve le droit de
            suspendre ou résilier l’accès en cas de non-respect des règles ou d’utilisation abusive du service.
          </p>

          <h2>9. Loi applicable et litiges</h2>
          <p>
            Les présentes CGU sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute
            action judiciaire. À défaut, les tribunaux compétents de Paris seront seuls compétents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;