import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;