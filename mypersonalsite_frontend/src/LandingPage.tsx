import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import intro_icon from "./assets/name_icon.png";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="container landing-page">
        <NavBar />

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
                  src={intro_icon}
                  alt="my icon"
                  style={{ height: "300px" }}
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center my-5">
            <div className="col-md-4">
              <div
                className="image-placeholder bg-secondary"
                style={{ width: "100%", height: "300px" }}
              >
                {/* Placeholder or Image Tag Here */}
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
