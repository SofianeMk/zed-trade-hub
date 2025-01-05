const Footer = () => {
  return (
    <footer className="bg-card mt-auto border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              src="/lovable-uploads/aaea4d69-fbf5-4cb9-8ae8-d227e2d4b234.png"
              alt="Zed VIP Company"
              className="h-8 w-auto"
            />
          </div>
          <div className="space-x-4">
            <a href="/legal/terms" className="text-primary hover:underline">
              Termini e Condizioni
            </a>
            <a href="/legal/privacy" className="text-primary hover:underline">
              Informativa sulla Privacy
            </a>
            <a href="/legal/impressum" className="text-primary hover:underline">
              Note Legali
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;