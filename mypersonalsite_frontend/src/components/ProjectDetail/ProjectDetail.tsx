import NavBar from "../NavBar/NavBar";
import { Fragment } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import "./ProjectDetail.css";
import React, { useEffect, useState } from "react";
import GitHub from "../../assets/GitHub.png";
import Devpost from "../../assets/Devpost.svg";
import Site from "../../assets/Website.png";
import Demo from "../../assets/demo.png";
import "../../fonts/Poppins.css";

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
  achievements: Achievement[];
}

const ProjectDetails = () => {
  const { id } = useParams(); // we read the parameter taken in the url
  console.log(id);
  const [project, setProject] = useState<Project | null>(null);

  const backendServerAdress = "https://tomzhangpersonalsite.pythonanywhere.com";

  useEffect(() => {
    fetch(`${backendServerAdress}/projects/${id}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProject(data);
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
      });
  }, []);

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
        <div className="project-details mt-4">
          <h1 className="project-title poppins-bold">{project.title}</h1>
          {/* Map through the images */}
          {project.images.map((img: any, index: number) => (
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
            {project.links.map((link: any, index: number) => (
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
