import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <h1>Assignment Review App</h1>
    </header>
  );
};

export default Header;