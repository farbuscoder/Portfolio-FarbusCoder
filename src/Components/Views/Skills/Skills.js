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
    rnative,
    mongoDb,
    redux
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
        <ItemSKill image={rnative} alt={"React-Native"} description={"React Native"} />
        <ItemSKill image={mongoDb} alt={"Mongo_Db"} description={"Mongo Db Atlas"} />
        <ItemSKill image={"https://v4.mui.com/static/logo.png"} alt={"Material_Ui"} description={"Material UI"} />
        <ItemSKill image={"https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55"} alt={"Redux"} description={"Redux"} />
      </div>
    </div>
  );
};

export default Skills;
