import { Fragment } from "react";
import "./Skills.css";
import "../../fonts/Poppins.css";
import InfoCard from "../../components/InfoCard/InfoCard";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import python from "../../assets/Python.png";
import javascript from "../../assets/JavaScript.png";

const Skills = () => {
  const skills = [
    {
      title: "Python",
      description:
        "Syntax, data structures, and best practices, enabling them to develop robust and scalable applications",
      icon: python,
    },
    {
      title: "JavaScript",
      description:
        "Efficiently build interactive and responsive web applications, manipulate the DOM, handle asynchronous operations, and utilize frameworks like React or Node.js for full-stack development.",
      icon: javascript,
    },
    {
      title: "React",
      description:
        "Build modern, dynamic web applications with ease using React's component-based architecture and powerful state management.",
      icon: "/media/skills/icon/React-logo.png",
    },
    {
      title: "Node.js",
      description:
        "Develop scalable server-side applications and APIs with Node.js, leveraging JavaScript on the backend for efficient development.",
      icon: "/media/skills/icon/Nodejs-logo.png",
    },
    {
      title: "HTML & CSS",
      description:
        "Create visually appealing and responsive web pages using HTML for structure and CSS for styling, ensuring cross-browser compatibility.",
      icon: "/media/skills/icon/HTML-CSS-logo.png",
    },
    {
      title: "Django",
      description:
        "Develop robust and secure web applications with Django, a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
      icon: "/media/skills/icon/Django-logo.png",
    },
    {
      title: "TensorFlow",
      description:
        "Build and deploy machine learning models with TensorFlow, an open-source library for deep learning and neural networks.",
      icon: "/media/skills/icon/TensorFlow-logo.png",
    },
    {
      title: "Keras",
      description:
        "Create powerful neural networks with Keras, a high-level API for building and training deep learning models.",
      icon: "/media/skills/icon/Keras-logo.png",
    },
    {
      title: "PyTorch",
      description:
        "Develop machine learning models and perform tensor computations with PyTorch, a flexible deep learning framework.",
      icon: "/media/skills/icon/PyTorch-logo.png",
    },
    {
      title: "SQL",
      description:
        "Manage and manipulate relational databases using SQL, ensuring efficient data retrieval and storage for applications.",
      icon: "/media/skills/icon/SQL-logo.png",
    },
    {
      title: "Git & GitHub",
      description:
        "Version control your projects and collaborate with others using Git and GitHub, streamlining the development workflow.",
      icon: "/media/skills/icon/GitHub-logo.png",
    },
    {
      title: "Docker",
      description:
        "Containerize your applications with Docker, ensuring consistent environments across development, testing, and production.",
      icon: "/media/skills/icon/Docker-logo.png",
    },
    {
      title: "AWS",
      description:
        "Deploy and scale applications with Amazon Web Services (AWS), utilizing a wide range of cloud services for infrastructure and development.",
      icon: "/media/skills/icon/AWS-logo.png",
    },
    {
      title: "Machine Learning",
      description:
        "Develop predictive models and algorithms to uncover insights from data, applying machine learning techniques for various applications.",
      icon: "/media/skills/icon/MachineLearning-logo.png",
    },
    {
      title: "Data Science",
      description:
        "Analyze and interpret complex data sets to inform decision-making, using statistical techniques and data visualization tools.",
      icon: "/media/skills/icon/DataScience-logo.png",
    },
  ];

  return (
    <Fragment>
      <div className="skills-container container poppins">
        <NavBar />
        <main>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <InfoCard
                key={index}
                title={skill.title}
                description={skill.description}
                icon={skill.icon}
              />
            ))}
          </div>
        </main>
      </div>{" "}
      <Footer />
    </Fragment>
  );
};

export default Skills;
