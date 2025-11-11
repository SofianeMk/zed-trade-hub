import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import Impressum from "./pages/legal/Impressum";
import Tournois from "./pages/Tournois";
import TournoiNouveau from "./pages/TournoiNouveau";
import TournoiDetail from "./pages/TournoiDetail";
import Inscriptions from "./pages/Inscriptions";
import SaisieScores from "./pages/SaisieScores";
import Tableaux from "./pages/Tableaux";
import Classements from "./pages/Classements";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tournois" element={<Tournois />} />
              <Route path="/tournois/nouveau" element={<TournoiNouveau />} />
              <Route path="/tournois/:id" element={<TournoiDetail />} />
              <Route path="/tournois/:id/inscriptions" element={<Inscriptions />} />
              <Route path="/tournois/:id/scores" element={<SaisieScores />} />
              <Route path="/tournois/:id/tableaux" element={<Tableaux />} />
              <Route path="/tournois/:id/classements" element={<Classements />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/legal/terms" element={<Terms />} />
              <Route path="/legal/privacy" element={<Privacy />} />
              <Route path="/legal/impressum" element={<Impressum />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;