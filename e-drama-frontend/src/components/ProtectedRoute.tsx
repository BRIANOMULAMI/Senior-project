
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/ AuthContext';


interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: Array<'admin' | 'school' | 'judge'>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { user } = useAuth(); // Use the authentication hook
  const navigate = useNavigate(); 

  if (!user || !user.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }


  if (user.role && !allowedRoles.includes(user.role)) {
  
    return <Navigate to="/" replace />; 
  }


  return <>{children}</>;
};

export default ProtectedRoute; 
