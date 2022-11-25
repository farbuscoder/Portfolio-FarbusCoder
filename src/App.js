import "./App.css";
import React, { useState, useEffect, createContext, useContext } from "react";
import AppHome from "./AppHome";
import Sidebar from "./Components/Common/Sidebar/Sidebar";
import SideBarBtn from "./Components/Common/SideBarBtn/SideBarBtn";
import ScrollToTop from "./Components/Common/ScrollToTop";
import Tag from "./Components/Common/Tag";

function App() {
  const [show, setShow] = useState(false);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <div className="body">
      <Sidebar show={show} setShow={setShow} />
      <SideBarBtn show={show} setShow={setShow} />
      <Tag />
      <AppHome />
      {showButton && <ScrollToTop style={{ cursor: "pointer" }} />}
    </div>
  );
}

export default App;
