
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { pageView, isAnalyticsLoaded } from "./utils/analytics";

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

// Analytics route change tracker
const RouteChangeTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Check if GA is loaded on component mount
    isAnalyticsLoaded();
    
    // Track page view on route change
    pageView(document.title, window.location.href, location.pathname);
  }, [location]);
  
  return null;
};

const App = () => {
  // Get the base path for routing
  const basePath = getBasePath();
  
  // Check if Analytics is loaded when app initializes
  useEffect(() => {
    isAnalyticsLoaded();
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basePath}>
          <RouteChangeTracker />
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
