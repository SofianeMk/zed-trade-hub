const Footer = () => {
  return (
    <footer className="bg-card mt-auto border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo-padelsetpro.svg"
              alt="PadelSetPro"
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-primary">PadelSetPro</span>
              <span className="text-sm text-muted-foreground">La plateforme tout-en-un pour vos tournois</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/legal/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Conditions d’utilisation
            </a>
            <a href="/legal/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Politique de confidentialité
            </a>
            <a href="/legal/impressum" className="text-muted-foreground hover:text-primary transition-colors">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;