import NavBar from "../NavBar/NavBar";
import { Fragment } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import "./ProjectDetail.css";
import testimage from "../../assets/JavaScript.png";
import React from "react";
import GitHub from "../../assets/GitHub.png";
import Devpost from "../../assets/Devpost.svg";
import Site from "../../assets/Website.png";
import Demo from "../../assets/demo.png";
import "../../fonts/Poppins.css"

interface Link {
  link: string;
  type: string; // e.g., "GitHub", "Site"
}

interface Image {
  image: string;
}

interface Achievement {
  title: string;
  description: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  visible: boolean;
  images: Image[];
  links: Link[];
  achievements: Achievement[]; // Define this if you have achievements
}

interface ProjectDetailProps {
  projects: Project[];
}

const ProjectDetails = () => {
  // the prop we pass here is a single project
  // const { projectId } = useParams();
  // we then send a request to the endpoint on the backend server to
  const project = {
    id: 1,
    title: "BookFindr",
    description:
      "An AI book recommendation system for avid readers. Uses the ChatGPT API integrated with a vibrant user interface",
    visible: false,
    images: [
      {
        image: testimage,
      },
    ],
    links: [
      {
        link: "https://github.com/MightyTMZ/BookFindr",
        type: "GitHub",
      },
      {
        link: "https://bookfindr2.pythonanywhere.com",
        type: "Site",
      },
    ],
    achievements: [],
  };

  if (!project) {
    return (
      <Fragment>
        <div className="container poppins">
          <NavBar />
          <h2>Project not found</h2>
        </div>
        ;
      </Fragment>
    );
  }

  interface ImageTypes {
    [key: string]: string;
  }

  const image_types_for_links: ImageTypes = {
    GitHub: GitHub,
    Site: Site,
    Demo: Demo,
    Devpost: Devpost,
  };

  return (
    <Fragment>
      <div className="container poppins">
        <NavBar />
        <div className="project-details">
          <h1 className="project-title poppins-bold">{project.title}</h1>
          {/* Map through the images */}
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img.image}
              alt={project.title}
              className="project-image"
            />
          ))}

          <p className="project-description">{project.description}</p>
          <div className="project-links">
            {/* Map through the links */}
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                style={{ background: "#ccc" }}
              >
                <img
                  src={image_types_for_links[link.type]}
                  alt={link.type}
                  height="40px"
                  title={link.type}
                />
              </a>
            ))}
          </div>
          {/* Include additional sections as needed */}
        </div>
        {/* Include additional sections as needed */}
      </div>
    </Fragment>
  );
};

export default ProjectDetails;
