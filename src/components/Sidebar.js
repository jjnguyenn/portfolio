import React, { useState, useRef, useEffect } from 'react';
import './Sidebar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import { LuSun } from "react-icons/lu";

const Sidebar = ({ darkMode, toggleDarkMode, openContactModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="hamburger" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <aside ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#about" onClick={toggleSidebar}>About Me</a></li>
          <li><a href="#job-background" onClick={toggleSidebar}>Job Background</a></li>
          <li><a href="#projects" onClick={toggleSidebar}>Projects</a></li>
          <li><a href="#resume" onClick={toggleSidebar}>Resume</a></li>
          {/* Trigger the contact modal on click */}
          <li><a href="#" onClick={(e) => { e.preventDefault(); openContactModal(); toggleSidebar(); }}>Contact</a></li>
        </ul>
        <div className="mode-toggle-button" onClick={toggleDarkMode}>
          <div className={`slider ${darkMode ? "dark" : "light"}`}>
            {darkMode ? <FaMoon className="icon moon" /> : <LuSun className="icon sun" />}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
