import React from 'react';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const showCode = Boolean(project.github && project.github !== '#');
  const showLive = Boolean(project.live && project.live !== '#');

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          {showCode && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label={`View ${project.title} code`}>
              <FiGithub size={24} />
            </a>
          )}
          {showLive && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="icon-btn icon-btn-live" aria-label={`Open ${project.title} live demo`}>
              <FiExternalLink size={24} />
            </a>
          )}
        </div>
        <div className="tech-stack">
          {project.techs.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-features">
          <h4>Features:</h4>
          <ul>
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="all-techs">
          {project.techs.map((tech, idx) => (
            <span key={idx} className="tech-tag">
              <FiCode size={14} /> {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          {showLive && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FiExternalLink size={16} /> Live Demo
            </a>
          )}
          {showCode && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FiGithub size={16} /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
