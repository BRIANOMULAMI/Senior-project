
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] p-8 text-center bg-gray-100 m-4 rounded-lg shadow-inner">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 max-w-xl">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link to="/" className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200 text-lg font-medium shadow-md">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
