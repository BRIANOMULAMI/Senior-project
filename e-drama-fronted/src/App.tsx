

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/ AuthContext';

import ProtectedRoute from './components/ProtectedRoute';

import HomePage from './pages/ HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import NotFoundPage from './pages/NotFoundPage';

import AdminDashboard from './pages/dashboards/AdminDashboard';
import SchoolDashboard from './pages/dashboards/SchoolDashboard';
import JudgeDashboard from './pages/dashboards/JudgeDashboard';

import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';

function App() {
  return (
    <AuthProvider>
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
            path="/reset-password"
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
              <ProtectedRoute allowedRoles={['admin']}>
                <DashboardLayout>
                  <AdminDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/school-dashboard"
            element={
              <ProtectedRoute allowedRoles={['school']}>
                <DashboardLayout>
                  <SchoolDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/judge-dashboard"
            element={
              <ProtectedRoute allowedRoles={['judge']}>
                <DashboardLayout>
                  <JudgeDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

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
    </AuthProvider>
  );
}

export default App;
