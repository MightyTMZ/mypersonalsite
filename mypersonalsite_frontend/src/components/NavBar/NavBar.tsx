import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="d-flex justify-content-between align-items-center py-3">
      <h1 className="h3">Tom Zhang</h1>
      <nav className="d-flex">
        <a href="#home" className="btn btn-link">
          Home
        </a>
        <a href="#about" className="btn btn-link">
          About
        </a>
        <a href="#contact" className="btn btn-link">
          Contact
        </a>
        <div className="dropdown">
          <button
            className="btn btn-link dropdown-toggle"
            type="button"
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
          >
            Other
          </button>
          <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
            <a className="dropdown-item" href="#portfolio">
              Portfolio
            </a>
            <a className="dropdown-item" href="#newsletters">
              Newsletters
            </a>
            <a className="dropdown-item" href="#current-ventures">
              Current Ventures
            </a>
            <a className="dropdown-item" href="#skills">
              Skills
            </a>
            <a className="dropdown-item" href="#certificates">
              My Certificates
            </a>
            <a className="dropdown-item" href="#resume">
              My Resume
            </a>
            <a className="dropdown-item" href="#organizations">
              Organizations
            </a>
            <a className="dropdown-item" href="#connect-with-me">
              Connect with me!
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
