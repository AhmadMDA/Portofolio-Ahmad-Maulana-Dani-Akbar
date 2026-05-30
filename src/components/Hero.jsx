import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  const fullCode = `function buildAwesome() {\n    return (\n        <Awesome\n             without="ME"\n                status="incomplete"\n                />\n            );\n        }\n// Can't spell AWESOME without ME`;
  const [displayedCode, setDisplayedCode] = useState('');

  useEffect(() => {
    let i = 0;
    let timeoutId = null;

    const tick = () => {
      if (i <= fullCode.length) {
        setDisplayedCode(fullCode.slice(0, i));
        i += 1;
        timeoutId = setTimeout(tick, 30);
      } else {
        // pause at end then restart
        timeoutId = setTimeout(() => {
          i = 0;
          setDisplayedCode('');
          tick();
        }, 1200);
      }
    };

    tick();
    return () => clearTimeout(timeoutId);
  }, []);

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
            <pre className="code-content">{displayedCode}<span className="cursor" /></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
