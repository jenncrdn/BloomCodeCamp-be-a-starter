import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Authentication/Login';
import AuthContextProvider from './context/AuthContext';
import AssignmentContextProvider from './context/AssignmentContext';
import HomePage from './components/HomePage';
import './App.css'

function App() {
  return (
    <Router>
    <div className="container">
        <AuthContextProvider>
          <AssignmentContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/api/auth/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer />
          </AssignmentContextProvider>
        </AuthContextProvider>
    </div>
    </Router>
  );
}

export default App;
