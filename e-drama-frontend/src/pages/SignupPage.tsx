import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/ AuthContext';

const SignupPage: React.FC = () => {
  const [schoolName, setSchoolName] = useState<string>('');
  const [schoolCounty, setSchoolCounty] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useAuth(); // Get the login function from AuthContext
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!schoolName || !schoolCounty || !email || !password) {
      alert('Please fill in all fields.'); // Use custom modal in real app
      return;
    }

    //  send this data to your Express backend
    console.log('School Signup Data:', { schoolName, schoolCounty, email, password });
    //  automatically log in the school
    alert('School registered successfully! You are now logged in as a school.'); // Use custom modal in real app
    login('school', schoolName); // Log in the school after signup
    navigate('/school-dashboard'); // Redirect to school dashboard
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)] p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up for E-DRAMA</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="schoolName" className="block text-gray-700 text-sm font-semibold mb-2">School Name</label>
            <input
              type="text"
              id="schoolName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., St. Peter's High School"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="schoolCounty" className="block text-gray-700 text-sm font-semibold mb-2">School County</label>
            <input
              type="text"
              id="schoolCounty"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Nairobi"
              value={schoolCounty}
              onChange={(e) => setSchoolCounty(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="school@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-md"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
