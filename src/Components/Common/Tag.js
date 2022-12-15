import React, { useState } from "react";

const Tag = () => {
  const [show, setShow] = useState(false);

  const showTag = () => {
    if (show) {
      //true
      setShow(false);
    } else {
      //false
      setShow(true);
    }
  };

  return (
    <div className={show ? "tag show" : "tag"}>
      <div className="download-icon">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1f7mB7FBTsqmZLRE96PzCYdADS4XxqbcX/view?usp=sharing"
        >
          <i className="fas fa-download"></i>
        </a>
      </div>
      <button onClick={showTag} className="tag-btn">
        Resume
      </button>
    </div>
  );
};

export default Tag;
