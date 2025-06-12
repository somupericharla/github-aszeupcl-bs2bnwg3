
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { MainLayout } from "@/components/layout/MainLayout";
import Auth from "./pages/Auth";
import Index from "./pages/Index";  // Make sure to display the index page
import Home from "./pages/Home";  // New home page
import Dashboard from "./pages/Dashboard";
import LMS from "./pages/LMS";
import Communication from "./pages/Communication";
import NotFound from "./pages/NotFound";

// Import the new pages we've created
import Assessments from "./pages/Assessments";
import Results from "./pages/Results";
import LiveClasses from "./pages/LiveClasses";
import Doubts from "./pages/Doubts";
import Skills from "./pages/Skills";
import Leaderboard from "./pages/Leaderboard";
import Rewards from "./pages/Rewards";
import StudyMaterials from "./pages/StudyMaterials";
import Research from "./pages/Research";
import Employment from "./pages/Employment";
import Scholarships from "./pages/Scholarships";
import Workspace from "./pages/Workspace";

// Create a new QueryClient instance
const queryClient = new QueryClient();

interface ProtectedRouteProps {
  element: React.ReactNode;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const isAuthenticated = localStorage.getItem("edubridge_user") !== null;
  
  return isAuthenticated ? (
    <MainLayout>{element}</MainLayout>
  ) : (
    <Navigate to="/auth" />
  );
};

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <BrowserRouter>
              <Toaster />
              <Sonner />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/home" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                
                {/* Protected Routes */}
                <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
                <Route path="/lms" element={<ProtectedRoute element={<LMS />} />} />
                <Route path="/communication" element={<ProtectedRoute element={<Communication />} />} />
                
                {/* All the newly implemented modules */}
                <Route path="/assessments" element={<ProtectedRoute element={<Assessments />} />} />
                <Route path="/results" element={<ProtectedRoute element={<Results />} />} />
                <Route path="/live-classes" element={<ProtectedRoute element={<LiveClasses />} />} />
                <Route path="/doubts" element={<ProtectedRoute element={<Doubts />} />} />
                <Route path="/skills" element={<ProtectedRoute element={<Skills />} />} />
                <Route path="/leaderboard" element={<ProtectedRoute element={<Leaderboard />} />} />
                <Route path="/rewards" element={<ProtectedRoute element={<Rewards />} />} />
                <Route path="/study-materials" element={<ProtectedRoute element={<StudyMaterials />} />} />
                <Route path="/research" element={<ProtectedRoute element={<Research />} />} />
                <Route path="/employment" element={<ProtectedRoute element={<Employment />} />} />
                <Route path="/scholarships" element={<ProtectedRoute element={<Scholarships />} />} />
                <Route path="/workspace" element={<ProtectedRoute element={<Workspace />} />} />
                
                {/* Mentor/Parent/Admin Routes */}
                <Route path="/students" element={<ProtectedRoute element={<div className="p-4">Students Module (Coming Soon)</div>} />} />
                <Route path="/create-content" element={<ProtectedRoute element={<div className="p-4">Content Creation Module (Coming Soon)</div>} />} />
                <Route path="/live-sessions" element={<ProtectedRoute element={<div className="p-4">Live Sessions Module (Coming Soon)</div>} />} />
                <Route path="/answer-doubts" element={<ProtectedRoute element={<div className="p-4">Answer Doubts Module (Coming Soon)</div>} />} />
                <Route path="/child-progress" element={<ProtectedRoute element={<div className="p-4">Child Progress Module (Coming Soon)</div>} />} />
                <Route path="/reports" element={<ProtectedRoute element={<div className="p-4">Reports Module (Coming Soon)</div>} />} />
                <Route path="/mentor-connect" element={<ProtectedRoute element={<div className="p-4">Mentor Connect Module (Coming Soon)</div>} />} />
                <Route path="/users" element={<ProtectedRoute element={<div className="p-4">Users Module (Coming Soon)</div>} />} />
                <Route path="/content" element={<ProtectedRoute element={<div className="p-4">Content Module (Coming Soon)</div>} />} />
                <Route path="/analytics" element={<ProtectedRoute element={<div className="p-4">Analytics Module (Coming Soon)</div>} />} />
                <Route path="/settings" element={<ProtectedRoute element={<div className="p-4">Settings Module (Coming Soon)</div>} />} />
                
                {/* Catch all */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
