import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
// import Certificates from "./screens/Certificates/Certificates";
import ProjectsRoutePage from "./screens/Projects/ProjectsRoutePage";
import ProjectDetails from "./components/ProjectDetail/ProjectDetail";
import CertificatesPage from "./screens/Certificates/Certificates";
// import Skills from "./screens/Skills/Skills";
import Resume from "./screens/Resume/Resume";
import ConnectWithMe from "./screens/Connect With Me/ConnectWithMe";
// import Education from "./screens/Education/Education";

function App() {

  return (
    <Router>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/portfolio/projects" element={<ProjectsRoutePage />} />
        <Route path="/portfolio/projects/:id" element={<ProjectDetails />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        {/* <Route path="/skills" element={<Skills />} />  */}
        <Route path="/connect-with-me" element={<ConnectWithMe />} />
        {/* <Route path="/education" element={<Education />} /> */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
