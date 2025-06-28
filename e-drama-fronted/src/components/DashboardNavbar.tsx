// src/components/DashboardNavbar.tsx
import React from 'react';
import { useAuth } from '../context/ AuthContext'; // Import useAuth to get user information

const DashboardNavbar: React.FC = () => {
  const { user } = useAuth(); // Access the current logged-in user object

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg fixed w-full z-10 top-0 h-20 flex items-center justify-between">
      {/* Left spacer for alignment */}
      <div className="flex-1"></div>

      {/* Center: E-DRAMA Brand Name */}
      <div className="flex-1 text-center">
        <span className="text-3xl font-extrabold text-indigo-400">
          E-DRAMA
        </span>
      </div>

      {/* Right: Welcome message */}
      <div className="flex-1 flex justify-end items-center pr-4">
        {/* Display "Welcome, [Username/Role]!" if user is logged in, else a generic welcome */}
        {user ? (
          <span className="text-gray-300 text-lg sm:text-xl font-semibold">
            Welcome, {user.username || user.role}!
          </span>
        ) : (
          <span className="text-gray-400 text-lg">Welcome!</span>
        )}
      </div>
    </nav>
  );
};

export default DashboardNavbar;