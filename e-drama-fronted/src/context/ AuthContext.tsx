
import React, { createContext, useContext, useState, useEffect } from 'react';


interface User {
  isLoggedIn: boolean;
  role: 'admin' | 'school' | 'judge' | null;
  username?: string;
}

// Define the shape of the AuthContext value
interface AuthContextType {
  user: User | null;
  login: (role: 'admin' | 'school' | 'judge', username: string) => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
 
  const [user, setUser] = useState<User | null>(() => {
    try {
      const storedUser = localStorage.getItem('eDramaUser');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      return null;
    }
  });

  // Save user state to localStorage whenever it changes
  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('eDramaUser', JSON.stringify(user));
      } else {
        localStorage.removeItem('eDramaUser');
      }
    } catch (error) {
      console.error("Failed to save user to localStorage", error);
    }
  }, [user]);

  // Simulate user login
  const login = (role: 'admin' | 'school' | 'judge', username: string) => {
    setUser({ isLoggedIn: true, role, username });
  };

  // user logout
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};


