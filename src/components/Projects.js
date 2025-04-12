import React from "react";
import { FaGithub } from "react-icons/fa";
import { DiRuby } from "react-icons/di";

const projects = [
  {
    title: "My Website",
    description:
      "This website was created utilizing React. It is a basic website project that is hosted on GitHub.",
    link: "https://github.com/jjnguyenn/portfolio/tree/master",
    icon: <FaGithub />,
  },
  {
    title: "API Automation",
    description:
      "A basic automation project in Ruby RSpec that utilizes rest-client to send requests to APIs and validates the responses, along with a manual workflow trigger to run the API tests in GitHub Actions.",
    link: "https://github.com/jjnguyenn/APIAutomation/tree/master",
    icon: <DiRuby />,
  },
  {
    title: "GitHub Actions",
    description:
      "Run the workflow through GitHub Actions to see the results of the tests.",
    link: "https://github.com/jjnguyenn/APIAutomation/actions/workflows/rubytests.yml",
    icon: <FaGithub />,
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a
              href={project.link}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-footer">
                {project.icon}
                <span>View on GitHub</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
