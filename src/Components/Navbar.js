import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo  from "../Images/logo.png"

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Your Logo" />
        <span className="logo-text">Gro Globally</span>
      </div>
      <ul className="nav-links">
        <li className={currentPage === 'home' ? 'active' : ''}>
          <Link to="/" onClick={() => handlePageChange('home')}>Home</Link>
        </li>
        <li className={currentPage === 'about' ? 'active' : ''}>
          <Link to="/about" onClick={() => handlePageChange('about')}>About</Link>
        </li>
        <li className={currentPage === 'services' ? 'active' : ''}>
          <Link to="/services" onClick={() => handlePageChange('services')}>Services</Link>
        </li>
        <li className={currentPage === 'contact' ? 'active' : ''}>
          <Link to="/contact" onClick={() => handlePageChange('contact')}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;