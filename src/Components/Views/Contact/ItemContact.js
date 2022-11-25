import React from "react";

const ItemContact = (props) => {
  const { icon, url } = props;
  return (
    <>
      <div className="item-contact">
        <a href={url} target="_blank">
          <i className={icon}></i>
        </a>
      </div>
    </>
  );
};

export default ItemContact;
