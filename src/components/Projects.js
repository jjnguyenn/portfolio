import React from "react";


const projects = [
  {
    title: "Portfolio Website",
    description: "I created this Portfolio with React and below is a link to the repository",
    link: "https://github.com/jjnguyenn/portfolio",
  },
  {
    title: "API Automation",
    description: "A basic automation project in Ruby that utilizes rest-client to create API calls and validate the responses",
    link: "https://github.com/jjnguyenn/APIAutomation",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
