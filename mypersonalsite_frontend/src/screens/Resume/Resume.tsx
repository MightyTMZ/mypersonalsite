import NavBar from "../../components/NavBar/NavBar";
// import Footer from '../../components/Footer/Footer';
import resume from "./resume.pdf";
import "./Resume.css";
import { Fragment } from "react/jsx-runtime";

const Resume = () => {
  document.title = "Tom Zhang - Resume";

  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <iframe id="resume" src={resume} height="500px" width="100%"></iframe>
      </div>
    </Fragment>
  );
};

export default Resume;
