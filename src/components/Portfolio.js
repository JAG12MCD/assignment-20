import React from 'react';
import { developerData } from '../data/developer';

function Portfolio() {
    return (
        <div className="portfolio-container">
            {developerData.projects.map((project, index) => (
                <div key={index} className="project-card">
                    <img src={project.imageUrl} alt={project.title} />
                    <h3>{project.title}</h3>
                    <a href={project.appUrl} target="_blank" rel="noopener noreferrer">View App</a>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </div>
            ))}
        </div>
    );
}

export default Portfolio;
