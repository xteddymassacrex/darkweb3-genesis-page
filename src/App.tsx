
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "@/context/UserContext";
import Index from "./pages/Index";
import GameCategory from "./pages/GameCategory";
import ServiceDetail from "./pages/ServiceDetail";
import Checkout from "./pages/Checkout";
import JoinUs from "./pages/JoinUs";
import UserDashboard from "./pages/UserDashboard";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import NotFound from "./pages/NotFound";
import CartDrawer from "./components/CartDrawer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/game/:gameId" element={<GameCategory />} />
            <Route path="/service/:serviceId" element={<ServiceDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-out" element={<SignOut />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
