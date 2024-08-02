import React, { useState } from 'react';
import './Navigation.css';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-container">
      <div className="logo">
        <img src="/images/logodimsum.jpg" alt="Dimsum Logo" />
      </div>
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li className={currentPage === 'home' ? 'active' : ''} onClick={() => setCurrentPage('home')}>Home</li>
        <li className={currentPage === 'products' ? 'active' : ''} onClick={() => setCurrentPage('products')}>Products</li>
        <li className={currentPage === 'contact' ? 'active' : ''} onClick={() => setCurrentPage('contact')}>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navigation;
