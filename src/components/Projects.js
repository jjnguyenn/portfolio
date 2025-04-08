import React from "react";


const projects = [
  {
    title: "Portfolio Website",
    description: "This portfolio was created in React. Below is the repository that this page was built on",
    link: "https://github.com/jjnguyenn/portfolio",
  },
  {
    title: "API Automation",
    description: "A basic automation project in Ruby that utilizes rest-client to send requests to APIs and validates the responses, along with manual workflow triggers to run the tests in GitHub Actions",
    link: "https://github.com/jjnguyenn/APIAutomation/tree/master",
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
