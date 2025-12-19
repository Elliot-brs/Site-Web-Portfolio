import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Projects from "./pages/Projects";
import DatabaseProject from "./pages/projects/421Project.tsx";
import MeloKnightProject from "./pages/projects/MeloKnightProject.tsx";
import WebAppProject from "./pages/projects/WebAppProject";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/421" element={<DatabaseProject />} />
              <Route path="/projects/melo-knight-game" element={<MeloKnightProject />} />
              <Route path="/projects/web-app" element={<WebAppProject />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;