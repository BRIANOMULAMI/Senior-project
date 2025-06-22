
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/ AuthContext';


import Navbar from './components/navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/footer';

import HomePage from './pages/ HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import NotFoundPage from './pages/NotFoundPage';

import AdminDashboard from './pages/dashboards/AdminDashboard';
import SchoolDashboard from './pages/dashboards/SchoolDashboard';
import JudgeDashboard from './pages/dashboards/JudgeDashboard';

function App() {
  return (
    
    <AuthProvider>
      <Router>
    
        <Navbar />
        
        <main className="font-sans antialiased text-gray-900">
          <Routes>
            {/* Public Pages - accessible by anyone */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />

            {/* Protected Dashboards - accessible only by authenticated users with specific roles */}
            <Route path="/admin-dashboard" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/school-dashboard" element={
              <ProtectedRoute allowedRoles={['school']}>
                <SchoolDashboard />
              </ProtectedRoute>
            } />
            <Route path="/judge-dashboard" element={
              <ProtectedRoute allowedRoles={['judge']}>
                <JudgeDashboard />
              </ProtectedRoute>
            } />

            {/*  displays the NotFoundPage */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;





