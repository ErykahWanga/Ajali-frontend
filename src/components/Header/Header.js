import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Incident Reporter
        </Link>
        <nav className="nav-links">
          <Link to="/">Map View</Link>
          <Link to="/create">Report Incident</Link>
          <Link to="/health">System Health</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;