import React from "react";
import ItemProject from "./ItemProject";

const Projects = ({ projects }) => {
  return (
    <div className="projects" id="projects">
      <h1>PROJECTS</h1>
      <p className="description">Some of the projects i've been working on</p>
      <div className="items">
        {projects.map((project) => {
          return <ItemProject key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
