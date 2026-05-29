import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Have a project in mind? Let's talk about it!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FiMail size={28} />
              </div>
              <h3>Email</h3>
              <p>akbar.maulanadani@gmail.com</p>
              <a href="mailto:akbar.maulanadani@gmail.com">Send an email</a>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiPhone size={28} />
              </div>
              <h3>Phone</h3>
              <p>+6285932922841</p>
              <a href="tel:+6285932922841">Call me</a>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiMapPin size={28} />
              </div>
              <h3>Location</h3>
              <p>Bangkalan, Indonesia</p>
              <a href="#contact">View on map</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
