import "./index.css";
//import { useCallback } from "react";
import About from "./Components/Views/About/About";
import Projects from "./Components/Views/Projects/Projects";
import Skills from "./Components/Views/Skills/Skills";
import Contact from "./Components/Views/Contact/Contact";
import Footer from "./Components/Views/Footer/Footer";
import { ProjectContentState } from "./Context/Context";
import Certificates from "./Components/Views/Studies/Certificates";
//import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles";

function AppHome() {
  const { state } = ProjectContentState();

  return (
    <div className="body">
      <About />
      <Certificates />
      <Projects projects={state} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default AppHome;
