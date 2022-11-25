import React from "react";

const ScrollToTop = (props) => {
  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div onClick={scrollToTop} className="scroll-to-top">
      <i className="fas fa-chevron-down"></i>
    </div>
  );
};

export default ScrollToTop;
