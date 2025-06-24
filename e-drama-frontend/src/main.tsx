
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Import the main App component
import './index.css';

import { AuthProvider } from './context/ AuthContext'; // Import AuthProvider

// Render the entire application wrapped in AuthProvider
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider> {/* Ensure AuthProvider is here and wraps <App /> */}
      <App />
    </AuthProvider>
  </React.StrictMode>,
);

