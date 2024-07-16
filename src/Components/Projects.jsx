import React from 'react';
import '../App.css';

const Projects = () => {
  const projects = [
    { title: 'Ecommerce For Dresses', domain: 'Web Development', description: 'Discover your perfect style with Ecommerce For Dresses, where elegance meets convenience. Browse our curated collection of chic dresses for every occasion, crafted to inspire confidence and capture attention.' },
    { title: 'Dieases Prediction Using Machine Learning', domain: 'Machine Learning', description: 'Disease Prediction Using Machine Learning leverages advanced algorithms to analyze medical data and predict potential health conditions. By integrating data science with healthcare, this innovative approach aims to enhance early detection and personalized treatment strategies.' },
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <h3>{project.domain}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;