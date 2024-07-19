import React from "react";
import "./ProjectBox.css";
import { useNavigate } from "react-router-dom";
import GitHub from "../../assets/GitHub.png";
import Devpost from "../../assets/Devpost.svg";
import Site from "../../assets/Website.png";
import Demo from "../../assets/demo.png";

// route: /portfolio/projects

interface Link {
  link: string;
  type: string; // the type of the link (e.g. GitHub)
}

interface ProjectBoxProps {
  id: number;
  photo?: string; // Optional because you might not always have a photo
  title: string;
  description: string;
  links?: Link[];
}

interface ImageTypes {
  [key: string]: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  id,
  photo,
  title,
  description,
  links,
}) => {
  const navigate = useNavigate(); // instantiate a navigator

  const handleViewDetail = (url: string) => {
    navigate(url);
  };

  const image_types_for_links: ImageTypes = {
    GitHub: GitHub,
    Site: Site,
    Demo: Demo,
    Devpost: Devpost,
  };

  return (
    <div className="project-item poppins mt-4">
      {photo && <img src={photo} alt={title} className="project-image" />}
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-links">
        {links &&
          links.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "10px" }}
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
      <button
        className="btn btn-primary"
        onClick={() => handleViewDetail(`/portfolio/projects/${id}`)}
        style={{ marginTop: "10px", float: "left" }}
        title="View details"
      >
        View details
      </button>
    </div>
  );
};

export default ProjectBox;
