import React from "react";
import { Navigate } from "react-router-dom";
import { UseAuthContext } from "../context/ AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: "ADMIN" | "JUDGE" | "SCHOOL";
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles,
}) => {
  const { user, IsAuthnticated, role, isLoading } = UseAuthContext(); // Use the authentication hook

  if (!user && !IsAuthnticated && !isLoading) {
    return <Navigate to="/login" replace />;
  }

  if (role && !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
