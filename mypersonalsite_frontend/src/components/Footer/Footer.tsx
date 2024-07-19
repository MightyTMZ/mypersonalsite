import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

  // implement logic to get the number of views on your website here

  return (
    <footer className="footer">
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
          href="https://linkedin.com/in/yourusername"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/yourusername"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="views-counter">
        <span>Views: 303,618</span>
        {/*Placeholder for now*/}
      </div>
      <p>Copyright © 2024 Tom Zhang</p>
    </footer>
  );
};

export default Footer;
