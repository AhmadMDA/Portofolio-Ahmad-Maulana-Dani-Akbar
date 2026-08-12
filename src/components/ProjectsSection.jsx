import React, { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';
import './ProjectsSection.css';

export default function ProjectsSection() {
  const duplicatedProjects = [...projectsData, ...projectsData];
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = window.setInterval(() => {
      setOffset((prev) => {
        const step = 340;
        const next = prev - step;
        const max = -(step * projectsData.length);
        return next < max ? 0 : next;
      });
    }, 2200);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setOffset((prev) => {
      const step = 360;
      const next = prev + step;
      return next > 0 ? 0 : next;
    });
    setIsPaused(true);
    window.setTimeout(() => setIsPaused(false), 3600);
  };

  const handleNext = () => {
    setOffset((prev) => {
      const step = 360;
      const next = prev - step;
      const max = -(step * projectsData.length);
      return next < max ? max : next;
    });
    setIsPaused(true);
    window.setTimeout(() => setIsPaused(false), 3600);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>A collection of my best work showcasing full-stack development skills</p>
        </div>

        <div className="projects-marquee">
          <div className="projects-controls overlay">
            <button type="button" className="nav-arrow left" onClick={handlePrev} aria-label="Scroll left">
              <FiChevronLeft size={20} />
            </button>
            <button type="button" className="nav-arrow right" onClick={handleNext} aria-label="Scroll right">
              <FiChevronRight size={20} />
            </button>
          </div>

          <div
            ref={trackRef}
            className="projects-track"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {duplicatedProjects.map((project, idx) => (
              <ProjectCard key={`${project.id}-${idx}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
