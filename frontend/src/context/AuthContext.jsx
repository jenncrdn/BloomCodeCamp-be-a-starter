import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

    // Securely store and retrieve token from localStorage
    const getToken = () => localStorage.getItem('token');
    const setTokenLocalStorage = (newToken) => localStorage.setItem('token', newToken);

  useEffect(() => {
    // Check for existing token on page load
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      validateToken();
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await api.post('/api/auth/login', { username, password });
      const newToken = response.data.token;
      setToken(newToken);
      localStorage.setItem('token', newToken);
      setIsAuthenticated(true);
      setUser(response.data.user);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  };

  const validateToken = async () => {
    try {
      const response = await api.get('/api/auth/validate', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsAuthenticated(true);
      setUser(response.data.user);
    } catch (error) {
      console.error('Token validation error:', error);
      logout();
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;