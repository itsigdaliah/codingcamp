
import React from 'react'
import '../../src/Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Router Project</h3>
          <p>A web app that offers digital services to people anywhere anytime. Its going to be a global brand</p>
          <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <h3>Paysis</h3>
          <p>An online payment system facilitator mostly for cameroonians</p>
          <a href="https://github.com/your-username/project2" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </section>
  );
}

export default Projects
