import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UseAuthContext } from "../context/ AuthContext";
import { UseAuthSignOut } from "../Api/Auth";
import { Loader2 } from "lucide-react";

const Navbar: React.FC = () => {
  const { user, IsAuthnticated, role } = UseAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const { LogoutUser, isLoading } = UseAuthSignOut();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const handleLogout = async () => {
    await LogoutUser();
    navigate("/");
  };

  const getDashboardPath = () => {
    if (IsAuthnticated) {
      switch (role) {
        case "ADMIN":
          return "/admin-dashboard";
        case "SCHOOL":
          return "/school-dashboard";
        case "JUDGE":
          return "/judge-dashboard";
        default:
          return "/";
      }
    }
    return "/";
  };

  return (
    <nav className="bg-gray-900 py-5 px-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/#home-section"
          className="text-2xl sm:text-3xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
        >
          E-DRAMA
        </Link>

        <div className="flex space-x-6 text-base sm:text-lg">
          <Link
            to="/#home-section"
            className="hover:text-indigo-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/#about-section"
            className="hover:text-indigo-300 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/#contact-section"
            className="hover:text-indigo-300 transition-colors duration-200"
          >
            Contact Us
          </Link>
          <Link
            to="/#sponsors-section"
            className="hover:text-indigo-300 transition-colors duration-200"
          >
            Sponsors
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {IsAuthnticated ? (
            <>
              <span className="text-gray-300 hidden sm:inline text-sm sm:text-base">
                Welcome, {user?.name || role}!
              </span>
              <Link
                to={getDashboardPath()}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200 shadow-md text-sm sm:text-base"
              >
                {role === "SCHOOL" ? "Switch to Dashboard" : "View Dashboard"}
              </Link>
              <button
                onClick={handleLogout}
                disabled={isLoading}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 shadow-md text-sm sm:text-base cursor-pointer"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin mx-auto" />
                ) : (
                  "Logout"
                )}
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200 shadow-md text-sm sm:text-base"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors duration-200 shadow-md text-sm sm:text-base"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

