import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPasswordPage: React.FC = () => {
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match.'); 
      return;
    }
    // send the new password to your backend along with a reset token
    console.log('Password reset successful with new password:', newPassword);
    alert('Your password has been successfully reset. Please login with your new password.'); // Use custom modal in real app
    navigate('/login'); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-200 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Reset Password</h2>
        <p className="text-gray-600 mb-4">
          Enter your new password below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="newPassword" className="sr-only">New Password</label>
            <input
              type="password"
              id="newPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="sr-only">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 font-semibold shadow-md"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
