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
    window.open("/");
  };

  return (
    <>
      <header className="navbar-custom d-flex justify-content-between align-items-center py-3 px-4">
        <h1 className="navbar-brand poppins-bold name-tag" onClick={goToHome}>
          Tom Zhang
        </h1>
        <nav className="d-flex align-items-center">
          <a href="#home" className="nav-item poppins-semibold mx-2">
            Home
          </a>
          <a href="#about" className="nav-item poppins-semibold mx-2">
            About
          </a>
          <a
            href="mailto:tom.zhang.career@hotmail.com"
            className="nav-item poppins-semibold mx-2"
          >
            Contact
          </a>
          <div className="dropdown">
            <button
              className="dropdown-toggle nav-item poppins-semibold mx-2"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
              }}
            >
              Other
            </button>
            <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <a
                className="dropdown-item poppins-semibold"
                href="#/portfolio/projects"
              >
                Portfolio
              </a>
              <a className="dropdown-item poppins-semibold" href="#/skills">
                Skills
              </a>
              <a
                className="dropdown-item poppins-semibold"
                href="#/certificates"
              >
                My Certificates
              </a>
              <a className="dropdown-item poppins-semibold" href="#/resume">
                My Resume
              </a>
              <a
                className="dropdown-item poppins-semibold last-item"
                href="#/connect-with-me"
              >
                Connect with me!
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div
        style={{ height: "1.5px", background: "#333", borderRadius: "50%" }}
      ></div>
    </>
  );
};

export default NavBar;
