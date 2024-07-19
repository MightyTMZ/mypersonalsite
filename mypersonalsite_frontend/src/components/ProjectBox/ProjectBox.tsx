import React from "react";
import "./ProjectBox.css";
import { useNavigate } from "react-router-dom";

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

const ProjectBox: React.FC<ProjectBoxProps> = ({
  id,
  photo,
  title,
  description,
  links,
}) => {

  const navigate = useNavigate();  // instantiate a navigator

  const handleViewDetail = (url: string) => {
    navigate(url);
  }



  return (
    <div className="project-item border">
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
              className="btn btn-primary"
            >
              {link.type}
            </a>
          ))}
      </div>
      <button className="btn btn-primary" onClick={() => handleViewDetail(`/portfolio/projects/${id}`)}>View details</button>
    </div>
  );
};

export default ProjectBox;
