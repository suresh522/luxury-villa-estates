import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Villas from "./pages/Villas.tsx";
import VillaDetail from "./pages/VillaDetail.tsx";
import Gallery from "./pages/Gallery.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Dining from "./pages/Dining.tsx";
import Spa from "./pages/Spa.tsx";
import Experiences from "./pages/Experiences.tsx";
import Amenities from "./pages/Amenities.tsx";
import WeddingEvents from "./pages/WeddingEvents.tsx";
import KidsActivities from "./pages/KidsActivities.tsx";
import Transfers from "./pages/Transfers.tsx";
import Adventures from "./pages/Adventures.tsx";
import Honeymoon from "./pages/Honeymoon.tsx";
import NotFound from "./pages/NotFound.tsx";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/villas" element={<Villas />} />
            <Route path="/villa/:id" element={<VillaDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/spa" element={<Spa />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/wedding-events" element={<WeddingEvents />} />
            <Route path="/kids-activities" element={<KidsActivities />} />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/adventures" element={<Adventures />} />
            <Route path="/honeymoon" element={<Honeymoon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
