import ProjectsPage from "./ProjectsPage";
// import { useEffect, useState } from "react";

{
  /* interface Link {
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
  views: number;
}
*/
}
const ProjectsRoutePage = () => {
  {
    /*let [projects, setProjects] = useState<Project[]>([]);

  const backendServerAdress = "https://tomzhangpersonalsite.pythonanywhere.com";

  useEffect(() => {
    fetch(`${backendServerAdress}/projects/all/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
      });
  }, []);*/
  }

  document.title = "Tom Zhang - Projects";

  return (
    <div>
      <ProjectsPage />
    </div>
  );
};

export default ProjectsRoutePage;
