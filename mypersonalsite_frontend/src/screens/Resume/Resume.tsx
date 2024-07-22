import NavBar from "../../components/NavBar/NavBar";
// import Footer from '../../components/Footer/Footer';
import resume from "./resume.pdf";
import "./Resume.css";

const Resume = () => {
  document.title = "Tom Zhang - Resume";

  return (
    <div className="container">
      <NavBar />
      <iframe id="resume" src={resume} height="500px" width="100%"></iframe>
    </div>
  );
};

export default Resume;
