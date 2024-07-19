import "./ConnectWithMe.css";
import "../../fonts/Poppins.css";
import { Fragment } from "react/jsx-runtime";
import NavBar from "../../components/NavBar/NavBar";
import pfp from "../../assets/blank_pfp.webp";

const ConnectWithMe = () => {
  return (
    <Fragment>
      <div className="container">
        <NavBar />
        <div className="connect-container">
          <div className="profile-section">
            <img src={pfp} alt="Profile" className="profile-pic" />
          </div>
          <div className="links-section poppins">
            <a
              href="https://www.linkedin.com/in/tom-zhang-485341274/"
              className="connect-link linkedin"
              target="blank"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MightyTMZ"
              className="connect-link github"
              target="blank"
            >
              GitHub
            </a>
            <a
              href="https://x.com/tom_zhang20"
              className="connect-link twitter"
              target="blank"
            >
              Twitter
            </a>
            {/*<a href="mailto:your.email@example.com" className="connect-link">
              Email Me
            </a> */}
            <a
              href="https://zhangtommy.substack.com/"
              className="connect-link substack"
              target="blank"
            >
              Personal Newsletter
            </a>
            {/* Embed LinkedIn activity? */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConnectWithMe;
