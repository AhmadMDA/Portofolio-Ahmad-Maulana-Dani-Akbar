import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className="hero-content fade-in-up">
          <h1>Hi, I'm Maulana Akbar</h1>
          <p className="hero-subtitle">
            I create amazing web applications with React, Node.js, and modern technologies
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              View My Work <FiArrowRight style={{ marginLeft: '8px' }} />
            </button>
            {/* <button className="btn btn-secondary">
              Get In Touch
            </button> */}
          </div>
        </div>

        <div className="hero-image slide-in-right">
          <div className="code-card">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre className="code-content">
            {`function buildAwesome() {
    return (
        <Awesome
             without="ME"
                status="incomplete"
                />
            );
        }
// Can't spell AWESOME without ME`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
