
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Notifications from "./pages/Notifications";
import MyApp from "./pages/MyApp";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";

// Import all category pages
import Doctor from "./pages/categories/Doctor";
import Hospital from "./pages/categories/Hospital";
import Diagnostic from "./pages/categories/Diagnostic";
import Blood from "./pages/categories/Blood";
import VehicleRent from "./pages/categories/VehicleRent";
import PoliceStation from "./pages/categories/PoliceStation";
import Lawyer from "./pages/categories/Lawyer";
import Jobs from "./pages/categories/Jobs";
import Teacher from "./pages/categories/Teacher";
import Entrepreneur from "./pages/categories/Entrepreneur";
import TrainingCenter from "./pages/categories/TrainingCenter";
import TodaysMarket from "./pages/categories/TodaysMarket";
import BusSchedule from "./pages/categories/BusSchedule";
import TrainSchedule from "./pages/categories/TrainSchedule";
import HouseRent from "./pages/categories/HouseRent";
import Hotel from "./pages/categories/Hotel";
import Student from "./pages/categories/Student";
import TouristSpots from "./pages/categories/TouristSpots";
import PlotLand from "./pages/categories/PlotLand";
import Mechanic from "./pages/categories/Mechanic";
import Nursery from "./pages/categories/Nursery";
import BuySell from "./pages/categories/BuySell";
import ElectricOffice from "./pages/categories/ElectricOffice";
import EducationalInstitute from "./pages/categories/EducationalInstitute";
import CourierService from "./pages/categories/CourierService";
import WatchVideo from "./pages/categories/WatchVideo";
import BeautyParlor from "./pages/categories/BeautyParlor";
import Website from "./pages/categories/Website";
import Municipality from "./pages/categories/Municipality";
import BankInsurance from "./pages/categories/BankInsurance";
import GasStation from "./pages/categories/GasStation";
import Newspaper from "./pages/categories/Newspaper";
import GeneralHelp from "./pages/categories/GeneralHelp";
import DayLaborer from "./pages/categories/DayLaborer";
import DuaZikir from "./pages/categories/DuaZikir";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/my-app" element={<MyApp />} />
          
          {/* Category Routes */}
          <Route path="/category/doctor" element={<Doctor />} />
          <Route path="/category/hospital" element={<Hospital />} />
          <Route path="/category/diagnostic" element={<Diagnostic />} />
          <Route path="/category/blood" element={<Blood />} />
          <Route path="/category/vehicle-rent" element={<VehicleRent />} />
          <Route path="/category/police" element={<PoliceStation />} />
          <Route path="/category/lawyer" element={<Lawyer />} />
          <Route path="/category/jobs" element={<Jobs />} />
          <Route path="/category/teacher" element={<Teacher />} />
          <Route path="/category/entrepreneur" element={<Entrepreneur />} />
          <Route path="/category/training" element={<TrainingCenter />} />
          <Route path="/category/market" element={<TodaysMarket />} />
          <Route path="/category/bus-schedule" element={<BusSchedule />} />
          <Route path="/category/train-schedule" element={<TrainSchedule />} />
          <Route path="/category/house-rent" element={<HouseRent />} />
          <Route path="/category/hotel" element={<Hotel />} />
          <Route path="/category/student" element={<Student />} />
          <Route path="/category/tourist-spots" element={<TouristSpots />} />
          <Route path="/category/land" element={<PlotLand />} />
          <Route path="/category/mechanic" element={<Mechanic />} />
          <Route path="/category/nursery" element={<Nursery />} />
          <Route path="/category/buy-sell" element={<BuySell />} />
          <Route path="/category/electric-office" element={<ElectricOffice />} />
          <Route path="/category/educational-institute" element={<EducationalInstitute />} />
          <Route path="/category/courier" element={<CourierService />} />
          <Route path="/category/videos" element={<WatchVideo />} />
          <Route path="/category/parlor" element={<BeautyParlor />} />
          <Route path="/category/website" element={<Website />} />
          <Route path="/category/municipality" element={<Municipality />} />
          <Route path="/category/bank-insurance" element={<BankInsurance />} />
          <Route path="/category/gas-station" element={<GasStation />} />
          <Route path="/category/newspaper" element={<Newspaper />} />
          <Route path="/category/general-help" element={<GeneralHelp />} />
          <Route path="/category/day-laborer" element={<DayLaborer />} />
          <Route path="/category/zikir" element={<DuaZikir />} />
          
          {/* Fallback route */}
          <Route path="/category/:category" element={<CategoryPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
