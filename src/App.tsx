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
import Login from "./pages/Login";
import ClubDashboard from "./pages/dashboard/ClubDashboard";
import CreateTournament from "./pages/tournaments/CreateTournament";
import TournamentDetails from "./pages/tournaments/TournamentDetails";
import TournamentRegister from "./pages/tournaments/TournamentRegister";
import ScoreEntry from "./pages/scores/ScoreEntry";
import Analytics from "./pages/analytics/Analytics";

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
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard/club" element={<ClubDashboard />} />
              <Route path="/tournaments/create" element={<CreateTournament />} />
              <Route path="/tournaments/:id" element={<TournamentDetails />} />
              <Route path="/tournaments/:id/register" element={<TournamentRegister />} />
              <Route path="/scores" element={<ScoreEntry />} />
              <Route path="/analytics" element={<Analytics />} />
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