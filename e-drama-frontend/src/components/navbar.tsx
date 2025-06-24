
import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import { useAuth } from '../context/ AuthContext';


const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); 


  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); 
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
 
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]); 
  // Handler for user logout
  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to homepage after logout
  };


  const getDashboardPath = () => {
    if (user?.isLoggedIn) {
      switch (user.role) {
        case 'admin':
          return '/admin-dashboard';
        case 'school':
          return '/school-dashboard';
        case 'judge':
          return '/judge-dashboard';
        default:
          return '/';
      }
    }
    return '/';
  };

  return (
    <nav className="bg-gray-800 py-5 px-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name - clicking it scrolls to the top of the home page */}
        <Link to="/#home-section" className="text-2xl sm:text-3xl font-bold text-indigo-300 hover:text-indigo-400 transition-colors duration-200 flex-shrink-0">
          E-DRAMA
        </Link>

       
        <div className="flex space-x-6 text-base sm:text-lg">
          <Link to="/#home-section" className="hover:text-gray-300 transition-colors duration-200">Home</Link>
          <Link to="/#about-section" className="hover:text-gray-300 transition-colors duration-200">About</Link>
          <Link to="/#contact-section" className="hover:text-gray-300 transition-colors duration-200">Contact Us</Link>
          <Link to="/#sponsors-section" className="hover:text-gray-300 transition-colors duration-200">Sponsors</Link>
        </div>

       
        <div className="flex items-center space-x-4">
          {user?.isLoggedIn ? (
            <>
              <span className="text-gray-300 hidden sm:inline text-sm sm:text-base">Welcome, {user.username || user.role}!</span>
              {user.role === 'school' && (
                 <Link to={getDashboardPath()} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200 shadow-md text-sm sm:text-base">
                   Switch to Dashboard
                 </Link>
              )}
               {user.role !== 'school' && (
                 <Link to={getDashboardPath()} className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors duration-200 shadow-md text-sm sm:text-base">
                   View Dashboard
                 </Link>
              )}
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 shadow-md text-sm sm:text-base"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200 shadow-md text-sm sm:text-base">
                Login
              </Link>
              <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md text-sm sm:text-base">
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

