import React from "react";

const Sidebar = (props) => {
  const { show, setShow } = props;

  const handleHide = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={show ? "side-bar show" : "side-bar "} id="side-bar">
        <div
          style={{ cursor: "pointer" }}
          className="side-bar-btn"
          onClick={handleHide}
        >
          <i className="fas fa-chevron-right"></i>
        </div>
        <ul>
          <li>
            <a href="#welcome-section" onClick={handleHide}>
            🏠 About
            </a>
          </li>
          <li>
            <a href="#certificates" onClick={handleHide}>
            🎓 Certificates
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleHide}>
            👷 Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleHide}>
            ⚽ Dev skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleHide}>
            💌 Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
