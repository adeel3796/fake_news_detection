import React, { createContext, useContext, useState } from 'react';

// Create a context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // You might store user information here
  const [token, setToken] = useState(null); // You might store authentication token here

  const login = (userData) => {
    // Implement your login logic, set user and token
    setUser(userData.user);
    setToken(userData.token);
  };

  const logout = () => {
    // Implement your logout logic, clear user and token
    setUser(null);
    setToken(null);
  };

  // Provide the context value to the components
  const contextValue = {
    user,
    token,
    login,
    logout,
    isAuthenticated: !!token,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// Create a custom hook for using the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
