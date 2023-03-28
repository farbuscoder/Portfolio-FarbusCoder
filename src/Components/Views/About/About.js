import React from "react";
import { useCallback } from "react";
import Title from "./Title";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Button } from "react-bootstrap";
import Tooltip from 'react-bootstrap/Tooltip';



const About = () => {
 
     return(
      <div className="about" id="welcome-section">
   
              <img src="https://i.ibb.co/0YwtjG6/2244cfab-421f-4e72-b612-d98328447c09.jpg" alt="about_img" ></img>
     
        <Title />
      </div>
     )
    

};

export default About;
