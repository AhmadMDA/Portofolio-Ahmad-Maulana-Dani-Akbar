import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../logo.png';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <h2>Web Developer</h2>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <button onClick={() => scrollToSection('home')}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')}>
              About
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
