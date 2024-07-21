import "./ProjectsPage.css"; // Ensure the CSS file is correctly linked
import NavBar from "../../components/NavBar/NavBar";
// import Footer from "../../components/Footer/Footer";
import ProjectBox from "../../components/ProjectBox/ProjectBox";

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

interface ProjectsList {
  projects: Project[];
}

const ProjectsPage: React.FC<ProjectsList> = ({ projects }) => {
  return (
    <div className="container">
      <NavBar />
      <main>
        <div className="container project-container">
          <div className="row">
            {projects.map((project) => (
              <div key={project.id} className="col-12 col-md-6 col-lg-4 mb-4">
                <ProjectBox
                  id={project.id}
                  photo={
                    project.images.length > 0
                      ? project.images[0].image
                      : undefined
                  }
                  title={project.title}
                  description={project.description}
                  links={project.links}
                  views={project.views}
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
