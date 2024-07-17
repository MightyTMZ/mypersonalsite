import React from 'react';
import "./ProjectBox.css"

// route: /portfolio/projects

interface Link {
  link: string;
  type: string; // the type of the link
}

interface ProjectBoxProps {
  photo?: string; // Optional because you might not always have a photo
  title: string;
  description: string;
  links?: Link[]; // Array of links, also optional
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ photo, title, description, links }) => {
  return (
    <div className="project-item border">
      {photo && <img src={photo} alt={title} className="project-image" />}
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-links">
        {links && links.map((link, index) => (
          <a key={index} href={link.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {link.type}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectBox;
