import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

const LandingPage = () => {
  return (
    <div className="container landing-page">
      <header className="d-flex justify-content-between align-items-center py-3">
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
      </header>
      <main>
        <div className="row align-items-center my-5">
          <div className="col-lg-7 text-center text-lg-left">
            <h2>Hey! I’m Tom Zhang</h2>
          </div>
          <div className="col-lg-5">
            <div
              className="image-placeholder bg-secondary"
              style={{ width: "100%", height: "300px" }}
            >
              {/* Placeholder or Image Tag Here */}
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
          <div className="col-md-8">
            <h2>LET ME INTRODUCE MYSELF</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos animi
              sit consequuntur molestias rerum mollitia officia vero,
              reprehenderit quos est placeat tempore reiciendis quis iure
              deserunt adipisci quia eius nobis maiores nam fuga temporibus aut
              quod distinctio...
            </p>
          </div>
        </div>
      </main>
      <footer className="text-center py-4">
        <div className="social-media">{/* Social Media Icons */}</div>
        <p>Copyright © 2024 Tom Zhang</p>
      </footer>
    </div>
  );
};

export default LandingPage;
