import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./pages/ HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/Password/ForgotPasswordPage";
import ResetPasswordPage from "./pages/Password/ResetPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";

import AdminDashboard from "./pages/dashboards/AdminDashboard";
import SchoolDashboard from "./pages/dashboards/SchoolDashboard";
import JudgeDashboard from "./pages/dashboards/JudgeDashboard";

import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import EditCompetitionDialogue from "./components/admin/EditCompetitionDialogue";
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <HomePage />
            </PublicLayout>
          }
        />
        <Route
          path="/login"
          element={
            <PublicLayout>
              <LoginPage />
            </PublicLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicLayout>
              <SignupPage />
            </PublicLayout>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PublicLayout>
              <ForgotPasswordPage />
            </PublicLayout>
          }
        />
        <Route
          path="/reset-password/:email"
          element={
            <PublicLayout>
              <ResetPasswordPage />
            </PublicLayout>
          }
        />

        {/* Dashboards */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRoles={"ADMIN"}>
              <DashboardLayout>
                <AdminDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/school-dashboard"
          element={
            <ProtectedRoute allowedRoles={"SCHOOL"}>
              <DashboardLayout>
                <SchoolDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/judge-dashboard"
          element={
            <ProtectedRoute allowedRoles={"JUDGE"}>
              <DashboardLayout>
                <JudgeDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route path="/test" element={<EditCompetitionDialogue />} />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <PublicLayout>
              <NotFoundPage />
            </PublicLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
