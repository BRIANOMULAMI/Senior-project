// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/ AuthContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useAuth(); 
  const navigate = useNavigate(); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!email || !password) {
      // use a custom modal or toast notification instead of alert
      alert('Please enter both email and password.');
      return;
    }

  
    let role: 'admin' | 'school' | 'judge' | null = null;
    let username = email.split('@')[0]; // Default username from email prefix

    if (email.includes('@admin.com')) {
      role = 'admin';
      username = 'Admin User';
    } else if (email.includes('@school.com')) {
      role = 'school';
      // username is already set to email prefix
    } else if (email.includes('@judge.com')) {
      role = 'judge';
      username = 'Judge User';
    } else {
      // In a real app, show an error message to the user
      alert('Invalid credentials or role for demo. Try: admin@admin.com, school@school.com, judge@judge.com with any password.');
      return;
    }

    if (role) {
      login(role, username); 
     
      switch (role) {
        case 'admin':
          navigate('/admin-dashboard');
          break;
        case 'school':
          navigate('/school-dashboard');
          break;
        case 'judge':
          navigate('/judge-dashboard');
          break;
        default:
          navigate('/'); // Fallback
      }
    } else {
     
      alert('Login failed: Unknown role.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)] p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login to E-DRAMA</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your email"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 font-semibold shadow-md"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Don't have an account? <Link to="/signup" className="text-indigo-600 hover:underline">Sign Up</Link>
          </p>
          <p className="text-gray-600 mt-2">
            <Link to="/forgot-password" className="text-indigo-600 hover:underline">Forgot Password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
