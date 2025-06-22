// src/pages/dashboards/SchoolDashboard.tsx
import React from 'react';
import { useAuth } from '../../context/ AuthContext';// Relative path to AuthContext

const SchoolDashboard: React.FC = () => {
  const { user } = useAuth(); // Get user information from AuthContext

  return (
    <div className="p-8 bg-gray-100 m-4 rounded-lg shadow-inner">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">School Dashboard</h1>
      <p className="text-xl text-gray-700 mb-4">Welcome, {user?.username || 'School'}!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Available Competitions Card */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200 hover:shadow-lg transition-shadow duration-200">
          <h3 className="text-2xl font-bold text-blue-700 mb-3">Available Competitions</h3>
          <p className="text-gray-600">View open competitions created by the admin and apply to join them.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 shadow-sm">Browse Competitions</button>
        </div>
        {/* Approved Competitions Card */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-green-200 hover:shadow-lg transition-shadow duration-200">
          <h3 className="text-2xl font-bold text-green-700 mb-3">Approved Competitions</h3>
          <p className="text-gray-600">See the competitions for which your application has been approved by the admin.</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 shadow-sm">View Approved</button>
        </div>
        {/* Marks & Feedback Card */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-purple-200 hover:shadow-lg transition-shadow duration-200">
          <h3 className="text-2xl font-bold text-purple-700 mb-3">Marks & Feedback</h3>
          <p className="text-gray-600">Review the marks awarded by judges and their comments on your school's performance.</p>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors duration-200 shadow-sm">View Results</button>
        </div>
        {/* Performance Statistics Card */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-yellow-200 hover:shadow-lg transition-shadow duration-200">
          <h3 className="text-2xl font-bold text-yellow-700 mb-3">Performance Statistics</h3>
          <p className="text-gray-600">View statistics showing the number of competitions your school has participated in versus marks awarded.</p>
          <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-200 shadow-sm">View Stats</button>
        </div>
      </div>
    </div>
  );
};

export default SchoolDashboard;
