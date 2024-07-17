import "./Portfolio.css"
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const Portfolio = () => {
  return (
    <div className="container">
      <NavBar />
      <a href="projects">Projects</a><br></br>
      <a href="education">Education</a><br></br>
      <a href="references">References</a>
      <Footer />
    </div>
  );
};

export default Portfolio;
