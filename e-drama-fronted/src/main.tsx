import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx"; // Import the main App component
import "./index.css";
import { AuthContextProvider } from "./context/ AuthContext.tsx";
import TanstackQueryProvider from "./Providers/TanstackQueryProvider.tsx";

// Render the entire application wrapped in AuthProvider
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TanstackQueryProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </TanstackQueryProvider>
  </React.StrictMode>
);
