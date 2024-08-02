import { Fragment } from "react";
import "./Skills.css";
import "../../fonts/Poppins.css";
import InfoCard from "../../components/InfoCard/InfoCard";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import python from "../../assets/Python.png";
import javascript from "../../assets/JavaScript.png";
import django from "../../assets/django.png";
import tensorflow from "../../assets/tensorflow.png";
import ml from "../../assets/machine leanring.png";
import ds from "../../assets/data science.png";
import html_css from "../../assets/html_css.svg";
import react from "../../assets/react.png";
import pytorch from "../../assets/pytorch.png";
import sql from "../../assets/sql.png";
import git_github from "../../assets/git-vs-github.png";
import docker from "../../assets/docker.webp";

const Skills = () => {
  document.title = "Tom Zhang - Skills";
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
      icon: react,
    },
    {
      title: "HTML & CSS",
      description:
        "Create visually appealing and responsive web pages using HTML for structure and CSS for styling, ensuring cross-browser compatibility.",
      icon: html_css,
    },
    {
      title: "Django",
      description:
        "Develop robust and secure web applications with Django, a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
      icon: django,
    },
    {
      title: "TensorFlow",
      description:
        "Build and deploy machine learning models with TensorFlow, an open-source library for deep learning and neural networks.",
      icon: tensorflow,
    },
    {
      title: "PyTorch",
      description:
        "Develop machine learning models and perform tensor computations with PyTorch, a flexible deep learning framework.",
      icon: pytorch,
    },
    {
      title: "SQL",
      description:
        "Manage and manipulate relational databases using SQL, ensuring efficient data retrieval and storage for applications.",
      icon: sql,
    },
    {
      title: "Git & GitHub",
      description:
        "Version control your projects and collaborate with others using Git and GitHub, streamlining the development workflow.",
      icon: git_github,
    },
    {
      title: "Docker",
      description:
        "Containerize your applications with Docker, ensuring consistent environments across development, testing, and production.",
      icon: docker,
    },
    {
      title: "Machine Learning",
      description:
        "Develop predictive models and algorithms to uncover insights from data, applying machine learning techniques for various applications.",
      icon: ml,
    },
    {
      title: "Data Science",
      description:
        "Analyze and interpret complex data sets to inform decision-making, using statistical techniques and data visualization tools.",
      icon: ds,
    },
  ];

  return (
    <Fragment>
      <NavBar />
      <div className="skills-container container poppins">
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
