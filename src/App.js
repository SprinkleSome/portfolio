import React from "react";
import "./App.css";

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"]; // Add more as needed
const projects = [
  {
    title: "Project 1",
    image:
      "https://cdn.popupsmart.com/uploaded/0d768ef9f2a361dc5a5c818d7a123eb7.png",
    link: "https://github.com/sprinklesome/project1",
    description: "Short project description here.",
  },
  {
    title: "Project 2",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    link: "https://sprinklesome.github.io/tasty/",
    description: "Another project description.",
  },
  // Add more projects as needed
];

function App() {
  return (
    <div className="app">
      {/* Sticky Header */}
      <header className="sticky-header">
        <nav>
          <h1>Thanasis M.</h1>
          <ul>
            <li>
              <a href="#description">Description</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#information">Information</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Sections */}
      <section id="description" className="description">
        <h2>Welcome to my portfolio</h2>
        <p>
          Hi, I’m Thanasis M., a web developer specialized in building
          interactive and modern web applications.
        </p>
      </section>

      <section id="skills" className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <input type="checkbox" checked disabled /> {skill}
            </li>
          ))}
        </ul>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="img-size"
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="information" className="information">
        <h2>Information</h2>
        <a href="/cv.pdf" download>
          Download my CV
        </a>
        <p>Extra information about me goes here.</p>
        <p>
          Find me on{" "}
          <a
            href="https://www.linkedin.com/in/thanasis-myridis-6a3413293"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </div>
  );
}

export default App;
