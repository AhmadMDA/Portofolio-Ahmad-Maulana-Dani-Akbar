import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';
import './ProjectsSection.css';

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>A collection of my best work showcasing full-stack development skills</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
