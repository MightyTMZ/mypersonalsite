import "./ProjectsPage.css";
import NavBar from "../../components/NavBar/NavBar";
import ProjectBox from "../../components/ProjectBox/ProjectBox";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

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
  views: number;
}

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // State to track loading status

  const backendServerAdress = "https://tomzhangpersonalsite.pythonanywhere.com";

  useEffect(() => {
    fetch(`${backendServerAdress}/projects/all`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching projects data:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  if (loading) {
    return (
      <div className="container">
        <NavBar />
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
        <p>Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <NavBar />
      <main>
        <div className="container project-container">
          <div className="row">
            {projects
              .filter((project) => project.visible)
              .map((filteredProject) => (
                <div
                  key={filteredProject.id}
                  className="col-12 col-md-6 col-lg-4 mb-4"
                >
                  <ProjectBox
                    id={filteredProject.id}
                    photo={
                      filteredProject.images.length > 0
                        ? filteredProject.images[0].image
                        : undefined
                    }
                    title={filteredProject.title}
                    description={filteredProject.description}
                    links={filteredProject.links}
                    views={filteredProject.views}
                  />
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
