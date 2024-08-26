import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
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
import SubstackFeed from "./components/SubstackFeed";
import Quotes from "./screens/Quotes/Quotes";
import Communities from "./components/MyCommunities/MyCommunities";
import "./LandingPage.css";
import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

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

  const d = new Date();
  // const localDateForUser = d.toLocaleDateString();
  // const localTimeForUser = d.toLocaleTimeString();
  // console.log(localDateForUser);
  // console.log(localTimeForUser);

  let greetingMessage = "";
  const hours = d.getHours();

  if (hours < 12) {
    greetingMessage = "Good morning!";
  } else if (hours < 18) {
    greetingMessage = "Good afternoon!";
  } else {
    greetingMessage = "Good evening!";
  }

  return (
    <>
      <NavBar />
      <div className="container landing-page">
        <main>
          <div className="row align-items-center my-5">
            <div className="col-lg-7 text-center text-lg-left">
              <h1 className="poppins" id="name-intro">
                {greetingMessage} My name is Tom Zhang
              </h1>
              <p className="poppins prof-line">
                I am{" "}
                <ReactTyped
                  className="poppins-bold profession"
                  strings={[
                    "an innovator",
                    "a data-driven decision maker",
                    "a leader",
                    "an engineer",
                    "an entrepreneur",
                    "a technologist",
                    "a team player",
                    "a global thinker",
                    "a visionary",
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              </p>
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
              <h1
                className="poppins-bold"
                style={{ fontSize: "3rem", marginBottom: "2rem" }}
              >
                LET ME INTRODUCE MYSELF
              </h1>
              <p className="poppins-regular bio-para">
                Hi! My name is Tom Zhang, and I am currently based in
                <a className="bio-link" href="">
                  &nbsp;Toronto, Canada 🍁
                </a>
                <br />
                <br />
                🚀 Tech Innovator | IoT & AI Enthusiast | Entrepreneur <br />
                📚 Passionate About Learning | Business & Economics Visionary{" "}
                <br />
                📈 Transforming Ideas Into Impactful Solutions
                <br />
                <br />
                <ReactTyped
                  className="poppins"
                  strings={[
                    "Driven by my relentless passion for technology, I am dedicated to building the next big thing in IoT and tech. As a lifelong learner, I continuously expand my skill and knowledge in artificial, business, and economics to stay at the forefront of innovation in the fast-paced world. My mission is to turn bold ideas into reality, creating solutions that push boundaries that break boundaries and make a lasting impact. Together, we can shape the future!",
                  ]}
                  typeSpeed={10}
                />
                <br />
                <br />
                Please do not hesitate to connect with me
                <a className="bio-link" href="/#connect-with-me">
                  &nbsp;here
                </a>
                ! Please feel free to reach out—I'm always eager to meet new
                people and be open-minded about exciting new ventures.
              </p>
            </div>{" "}
            <Communities />
            <h1 className="poppins mb-2 quote-heading">Quote of the...</h1>
            <Quotes />
            <h1 className="poppins mb-4 substack-heading">Latest From Me</h1>
            <SubstackFeed />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
