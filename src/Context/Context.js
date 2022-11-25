import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";

const ProjectContext = createContext();

const Context = ({ children }) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get(
          "https://portfolio-test-7xzm.vercel.app/"
        );

        setState(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider value={{ state }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default Context;

export const ProjectContentState = () => {
  return useContext(ProjectContext);
};
