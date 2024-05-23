// src/Header.js
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      
      <Link to="/" className='logo'>Company Name</Link>
      {/* <Link to="/">
       */}
      {/* </Link> */}
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#help">Help</a>
      </nav>
    </header>
  );
};

export default Header;
