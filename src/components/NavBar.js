import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Edantu</div>
      <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/">About</Link></li>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
