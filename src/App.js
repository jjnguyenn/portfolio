import React, { useState, useEffect } from "react";
import './App.css';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import JobBackground from './components/JobBackground';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { FaMoon } from 'react-icons/fa';
import { LuSun } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { DiRuby } from "react-icons/di";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

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

  // Function to open the contact modal
  const openContactModal = () => {
    setShowContactModal(true);
  };

  // Function to close the contact modal
  const closeContactModal = () => {
    setShowContactModal(false);
  };

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
        <div className="navbar-container">
          <a href="#about" className="logo">:)</a>
          <div className="navbar-links">
            <a href="#about">About Me</a>
            <a href="#job-background">Background</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#" onClick={(e) => { e.preventDefault(); openContactModal(); }}>Contact</a>
          </div>
          <div className="toggle-switch" onClick={toggleDarkMode}>
            <div className={`slider ${darkMode ? "dark" : "light"}`}>
              {darkMode ? <FaMoon className="icon moon" /> : <LuSun className="icon sun" />}
            </div>
          </div>
        </div>
      </nav>


      <section id="about">
        <AboutMe />
      </section>

      <section id="job-background">
        <JobBackground />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="resume">
        <Resume />
      </section>

      {showContactModal && (
        <Contact closeModal={closeContactModal} />
      )}
    </div>
  );
}

export default App;
