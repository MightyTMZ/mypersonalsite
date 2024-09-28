import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../fonts/Poppins.css";
import "./NavBar.css";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const goToHome = () => {
    window.location.href = "/";
  };

  return (
    <>
      <header className="navbar-custom">
        <h1 className="navbar-brand poppins-bold name-tag" onClick={goToHome}>
          Tom Zhang
        </h1>
        <nav className="nav-links">
          <a href="#home" className="nav-item poppins-semibold">
            Home
          </a>
          <a href="#/connect-with-me" className="nav-item poppins-semibold">
            About
          </a>
          <a
            href="/#/connect-with-me"
            className="nav-item poppins-semibold"
          >
            Contact
          </a>
          <div className="dropdown">
            <button
              className="dropdown-toggle nav-item poppins-semibold"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              style={{ color: "white" }}
            >
              Other
            </button>
            <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <a
                className="dropdown-item poppins-semibold last-item"
                href="#/connect-with-me"
              >
                Connect with me!
              </a>
              <a
                className="dropdown-item poppins-semibold"
                href="#/portfolio/projects"
              >
                Portfolio
              </a>
              {/* <a className="dropdown-item poppins-semibold" href="#/skills">
                Skills
              </a>*/}
              {/*<a className="dropdown-item poppins-semibold" href="#/education">
                Education
              </a>*/}
              <a
                className="dropdown-item poppins-semibold"
                href="#/certificates"
              >
                My Certificates
              </a>
              <a className="dropdown-item poppins-semibold" href="#/resume">
                My Resume
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="separator"></div>
    </>
  );
};

export default NavBar;
