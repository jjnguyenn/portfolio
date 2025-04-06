import React, { useState, useEffect } from "react";
import './App.css';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import JobBackground from './components/JobBackground';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("darkMode", newTheme);
      return newTheme;
    });
  };

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <header className="App-header">
        <h1>My Portfolio</h1>

        {/* Toggle Button for Dark/Light Mode */}
        <button className="mode-toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? <FaMoon /> : <FaSun />} {/* Display Moon for Dark mode and Sun for Light mode */}
        </button>

        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#job-background">Job Background</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <AboutMe />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="job-background">
        <JobBackground />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="projects">
        <Projects />
      </section>

 
    </div>
  );
}

export default App;
