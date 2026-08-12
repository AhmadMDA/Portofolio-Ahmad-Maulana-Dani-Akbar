import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About</h3>
            <p>
              A passionate full-stack developer creating beautiful and functional web applications with modern technologies.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect With Me</h3>
            <div className="contact-info-footer">
              <p><strong>Email:</strong> akbar.maulanadani@gmail.com</p>
              <p><strong>Phone:</strong> +6285932922841</p>
            </div>
            <div className="social-links">
              <a href="https://github.com/AhmadMDA" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ahmad-maulana-dani-akbar-27158a220/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin size={24} />
              </a>
              <a href="mailto:akbar.maulanadani@gmail.com" aria-label="Email">
                <FiMail size={24} />
              </a>
              <a href="tel:+6285932922841" aria-label="Phone">
                <FiPhone size={24} />
              </a>
              <a href="https://web.facebook.com/maulana.akbar.748637" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/mkbr_id/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Ahmad Maulana Dani Akbar. All rights reserved.</p>
          <p>Designed & Built with <span className="heart">♥</span> by Developer</p>
        </div>
      </div>
    </footer>
  );
}
