import React, { useState } from "react";

const ItemSKill = (props) => {
  return (
    <div className="skill">
      <img src={props.image} alt={props.alt}></img>

      <div className="span">
        <span>{props.description}</span>
      </div>
    </div>
  );
};

/*const ItemSKill = (props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="skill"
    >
      <img src={props.image} alt={props.alt}></img>
      {isHover ? (
        <div className="span">
          <span>{props.description}</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};*/

export default ItemSKill;
