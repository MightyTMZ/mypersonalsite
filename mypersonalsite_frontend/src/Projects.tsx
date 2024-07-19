import "./Projects.css"; // Ensure the CSS file is correctly linked
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const Projects = () => {
  return (
    <div className="container">
      <NavBar />
      <main>
        <div className="container project-container">
          <div className="row">
            {/* Placeholder divs for gallery items */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="project-item border">Project 1</div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="project-item border">Project 2</div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="project-item border">Project 3</div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="project-item border">Project 4</div>
            </div>
            {/* Add more project divs as needed */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
