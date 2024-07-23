import "./Footer.css";
import "../../fonts/Poppins.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

const Footer = () => {
  const backendServerAdress = "https://tomzhangpersonalsite.pythonanywhere.com";
  const [views, setViews] = useState("-"); // set this to a good default value instead of 0

  useEffect(() => {
    fetch(`${backendServerAdress}/views/count`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setViews(data.count);
      })
      .catch((error) => {
        console.error("Error fetching views:", error);
      });
  }, []);
  return (
    <footer className="footer poppins">
      <div className="social-media">
        <a
          href="https://x.com/tom_zhang20"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.linkedin.com/in/tom-zhang-485341274/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/MightyTMZ"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="views-counter">
        <span>Views: {views}</span>
        {/*Placeholder for now*/}
      </div>
      <p>Copyright © 2024 Tom Zhang</p>
    </footer>
  );
};

export default Footer;
