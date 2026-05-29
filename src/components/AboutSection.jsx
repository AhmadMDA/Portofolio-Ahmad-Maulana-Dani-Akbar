import React from 'react';
import { FiAward, FiUsers, FiTarget, FiZap } from 'react-icons/fi';
import './AboutSection.css';

export default function AboutSection() {
  const skills = [
    {
      icon: <FiCode size={32} />,
      title: "Full Stack Development",
      description: "Building complete web applications from frontend to backend with modern technologies"
    },
    {
      icon: <FiZap size={32} />,
      title: "Performance Optimization",
      description: "Creating fast and efficient applications with optimized code and best practices"
    },
    {
      icon: <FiTarget size={32} />,
      title: "Problem Solving",
      description: "Analyzing complex problems and delivering elegant, scalable solutions"
    },
    {
      icon: <FiUsers size={32} />,
      title: "Team Collaboration",
      description: "Working effectively with teams and stakeholders to deliver quality projects"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <h2>About Me</h2>
          <p>Learn more about my journey and expertise</p>
        </div>

        <div className="about-content">
          <div className="about-text">

        <h3>Web Developer & Information Systems Graduate</h3>

        <p>
        I am Ahmad Maulana Dani Akbar, an Information Systems graduate from State Polytechnic of Malang (Politeknik Negeri Malang) with a strong passion for web development and technology. I specialize in building responsive, user-friendly, and efficient web applications that deliver meaningful digital experiences.
        </p>

        <p>
        With a solid foundation in software development, database management, and system analysis, I have worked on various academic and personal projects using modern web technologies. I am committed to writing clean, maintainable code and continuously improving my technical skills to stay current with industry trends.
        </p>

        <p>
        I enjoy solving problems through technology, learning new tools and frameworks, and creating innovative solutions that provide value to users and organizations.
        </p>

            <div className="skills-grid">
              <div className="skill-item">
                <h4>Frontend</h4>
                <p>React, Vue, HTML5, CSS3, JavaScript, Tailwind CSS</p>
              </div>
              <div className="skill-item">
                <h4>Backend</h4>
                <p>Node.js, Express, Laravel, PHP, Python</p>
              </div>
              <div className="skill-item">
                <h4>Database</h4>
                <p>MySQL, PostgreSQL, MongoDB, Firebase</p>
              </div>
              <div className="skill-item">
                <h4>Tools & More</h4>
                <p>Git, Docker, VS Code, Webpack, Vite</p>
              </div>
            </div>
          </div>

          <div className="about-services">
            {skills.map((skill, idx) => (
              <div key={idx} className="service-card">
                <div className="service-icon">
                  {skill.icon}
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FiCode = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);
