import "./index.css";
import About from "./Components/Views/About/About";
import Projects from "./Components/Views/Projects/Projects";
import Skills from "./Components/Views/Skills/Skills";
import Contact from "./Components/Views/Contact/Contact";
import Footer from "./Components/Views/Footer/Footer";
import { ProjectContentState } from "./Context/Context";

function AppHome() {
  const { state } = ProjectContentState();

  return (
    <div className="body">
      <About />
      <Projects projects={state} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default AppHome;
