import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// import intro_icon from "./assets/name_icon.png";
import portrait from "./assets/tom_zhang_portrait.webp";
import real_portrait from "./assets/real-Tom.png";
import businessman from "./assets/landingpage_imgs/businessman.png";
import connection from "./assets/landingpage_imgs/connection.png";
import dataManagement from "./assets/landingpage_imgs/data-management.png";
import digitalInvestment from "./assets/landingpage_imgs/digital-investment.png";
import electricalEngineering from "./assets/landingpage_imgs/electrical-engineering.png";
import future from "./assets/landingpage_imgs/future.png";
import innovation from "./assets/landingpage_imgs/innovation.png";
import iot from "./assets/landingpage_imgs/iot.png";
import layers from "./assets/landingpage_imgs/layers.png";
import teamwork from "./assets/landingpage_imgs/teamwork.png";
import worldWideWeb from "./assets/landingpage_imgs/world-wide-web.png";
import "./LandingPage.css";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const [cartoon, setCartoon] = useState(false);

  const switchPortrait = () => {
    setCartoon(!cartoon);
  };

  const landingPageImages = [
    businessman,
    connection,
    dataManagement,
    digitalInvestment,
    electricalEngineering,
    future,
    innovation,
    iot,
    layers,
    teamwork,
    worldWideWeb,
  ];

  const imgsLength = landingPageImages.length;

  let randomImageIndex = Math.floor(imgsLength * Math.random());

  const [currentLandingImageIndex, setCurrentLandingImageIndex] =
    useState(randomImageIndex);

  const secondsBetweenImages = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLandingImageIndex((prevIndex) => (prevIndex + 1) % imgsLength);
    }, secondsBetweenImages * 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [imgsLength]);
  return (
    <>
      <NavBar />
      <div className="container landing-page">
        {/*<header className="d-flex justify-content-between align-items-center py-3">
          <h1 className="h3">Tom Zhang</h1>
          <nav>
            <a href="#home" className="btn btn-link">
              Home
            </a>
            <a href="#about" className="btn btn-link">
              About
            </a>
            <a href="#projects" className="btn btn-link">
              Projects
            </a>
            <a href="#other" className="btn btn-link">
              Other
            </a>
          </nav>
        </header>*/}
        <main>
          <div className="row align-items-center my-5">
            <div className="col-lg-7 text-center text-lg-left">
              <h2 className="poppins-bold" id="name-intro">
                Hey! I’m Tom Zhang
              </h2>
            </div>
            <div className="col-lg-5">
              <div style={{ width: "100%", height: "300px" }}>
                <img
                  src={landingPageImages[currentLandingImageIndex]}
                  alt="my icon"
                  style={{ height: "300px" }}
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center my-5">
            <div className="col-md-4">
              <div className="image-container">
                <img
                  src={cartoon ? portrait : real_portrait}
                  alt="Tom Zhang's portrait"
                  className="portrait styled-image"
                  onClick={switchPortrait}
                />
              </div>
            </div>
            <div className="col-md-8" id="about">
              <h2
                className="poppins-light"
                style={{ fontSize: "3rem", marginBottom: "2rem" }}
              >
                LET ME INTRODUCE MYSELF
              </h2>
              <p className="poppins-regular bio-para">
                Hi! My name is Tom Zhang, and I am currently a student at
                <a className="bio-link" href="">
                  &nbsp;Earl Haig Secondary School
                </a>
                . My immense and enthusiastic passion for electrical
                engineering, web development, and global management drives my
                interest in exploring the intersection of technology, economics,
                and sustainable development.
                <br />
                <br />
                Currently, I am working on SkyScout Baseball, a product
                leveraging drones and AI to revolutionize team coaching and
                tactical analysis in baseball.
                <br />
                <br />
                If you you need to reach me in any way, please visit my
                <a className="bio-link" href="/#connect-with-me">
                  &nbsp;contacts page
                </a>
                .
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
