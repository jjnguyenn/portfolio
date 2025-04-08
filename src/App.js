import React, { useState, useEffect } from "react";
import './App.css';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import JobBackground from './components/JobBackground';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { FaMoon } from 'react-icons/fa';
import Sidebar from './components/Sidebar';
import { LuSun } from "react-icons/lu";




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

<nav className={`navbar ${darkMode ? "dark" : "light"}`}>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#job-background">Job Background</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
         
          </ul>
          <div className="toggle-switch" onClick={toggleDarkMode}>
  <div className={`slider ${darkMode ? "dark" : "light"}`}>
    {darkMode ? <FaMoon className="icon moon" /> : <LuSun className="icon sun" />}
  </div>
</div>
        </nav>
      
            <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> 


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

      <section id="contact">
        <Contact />
      </section>

  
 
    </div>
  );
}

export default App;
