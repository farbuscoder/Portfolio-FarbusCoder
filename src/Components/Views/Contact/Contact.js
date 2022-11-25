import React from "react";
import ItemContact from "./ItemContact";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <h1>Contact me!</h1>
        <div className="contact-grid">
          <ItemContact
            url={"https://www.linkedin.com/in/marcos-fernandez-aa8bba182/"}
            icon={"fab fa-linkedin"}
          />
          <ItemContact
            url={" https://www.instagram.com/marcos_ferdez98/"}
            icon={"fab fa-instagram"}
          />
          <ItemContact
            url={"https://github.com/farbuscoder"}
            icon={"fab fa-github"}
          />
          <ItemContact
            url={
              "mailto:marcosfer243@gmail.com?subject=Contact&body=I'm interested in your work."
            }
            icon={"fas fa-envelope"}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
