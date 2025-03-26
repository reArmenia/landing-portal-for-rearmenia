
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Helper function to determine the base path
const getBasePath = () => {
  // Check if we're in a preview environment
  const isPreview = window.location.hostname.includes('preview--');
  const pathSegments = window.location.pathname.split('/');
  
  // Log information for debugging
  console.log("Current hostname:", window.location.hostname);
  console.log("Current pathname:", window.location.pathname);
  console.log("Is preview environment:", isPreview);
  
  return '';
};

const App = () => {
  // Get the base path for routing
  const basePath = getBasePath();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basePath}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Add a redirect from '/index' to '/' */}
            <Route path="/index" element={<Navigate to="/" replace />} />
            {/* Redirect from empty path to root in case of nested routes */}
            <Route path="" element={<Navigate to="/" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
