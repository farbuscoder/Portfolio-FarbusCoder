import React from "react";
import ItemSKill from "./ItemSkill";
import images from "../../../assets/images";
import { css } from "jquery";

const Skills = () => {
  const {
    jsPng,
    nodePng,
    htmlPng,
    sassPng,
    cssPng,
    btsPng,
    vsCPng,
    reactJsPng,
    gitHub,
    figma,
  } = images;

  return (
    <div className="skills" id="skills">
      <h1>SKILLS</h1>

      <div className="skill-grid">
        <ItemSKill image={htmlPng} alt={"HTML5"} description={"Html5"} />
        <ItemSKill image={cssPng} alt={"CSS3"} description={"Css3"} />
        <ItemSKill
          image={btsPng}
          alt={"Bootstrap5"}
          description={"Bootstrap"}
        />
        <ItemSKill
          image={vsCPng}
          alt={"Vs-code"}
          description={"Visual Studio Code"}
        />
        <ItemSKill
          image={jsPng}
          alt={"Javascript"}
          description={"Javascript"}
        />
        <ItemSKill image={sassPng} alt={"SASS"} description={"Sass"} />
        <ItemSKill
          image={nodePng}
          alt={"Node.js"}
          description={"Node.js & Express.js"}
        />
        <ItemSKill
          image={reactJsPng}
          alt={"React.js"}
          description={"React.js"}
        />
        <ItemSKill image={gitHub} alt={"Git-Hub"} description={"Git-Hub"} />
        <ItemSKill image={figma} alt={"Figma"} description={"Figma"} />
      </div>
    </div>
  );
};

export default Skills;
