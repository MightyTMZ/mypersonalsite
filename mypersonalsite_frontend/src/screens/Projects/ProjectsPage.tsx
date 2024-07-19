import "./ProjectsPage.css"; // Ensure the CSS file is correctly linked
import NavBar from "../../components/NavBar/NavBar";
// import Footer from "../../components/Footer/Footer";
import ProjectBox from "../../components/ProjectBox/ProjectBox";
import testimage from "../../assets/JavaScript.png";

const ProjectsPage = () => {
  let projects = [
    {
      id: 1,
      title: "IoT house",
      description: "Made an IoT house using 74HC595, a keypad, and servos",
      visible: false,
      images: [
        {
          image: testimage,
        },
      ],
      links: [{
        link: "https://github.com/MightyTMZ/BookFindr",
        type: "Demo",
      },],
      achievements: [
        {
          title: "100% on summative",
          description:
            "Achieved a 100% on the grade 10 computer technology summative project",
          icon: "/media/icon/star.png",
        },
      ],
    },
    {
      id: 2,
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
    },
    {
      id: 2,
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
    },
    {
      id: 2,
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
    },
    {
      id: 2,
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
    },
  ];

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
