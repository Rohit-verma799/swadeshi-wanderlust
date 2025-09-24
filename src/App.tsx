import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import LandingPage from "./pages/LandingPage";
import ItineraryPage from "./pages/ItineraryPage";
import BusinessPage from "./pages/BusinessPage";
import BookingPage from "./pages/BookingPage";
import NotFound from "./pages/NotFound";
<<<<<<< HEAD
import ExploreNow from "./components/ExploreNow";
=======
import RoadMap from "./pages/roadMap";
import Ticket from "./pages/Ticket";
import DetailedItinerary from "./pages/DetailedItinerary";
>>>>>>> e8068c9f20352b3bae72eebde11987a775282821

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
<<<<<<< HEAD
              <Route path="/ExploreNow" element={<ExploreNow />} />
=======
              <Route path="/roadmap" element={<RoadMap />} />
              <Route path="/ticket" element={<Ticket />} />
>>>>>>> e8068c9f20352b3bae72eebde11987a775282821
              <Route path="/itinerary" element={<ItineraryPage />} />
              <Route path="/detailed-itinerary/:destination/:budget/:days" element={<DetailedItinerary />} />
              <Route path="/businesses" element={<BusinessPage />} />
              <Route path="/booking" element={<BookingPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
