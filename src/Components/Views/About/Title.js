import React from "react";
import images from "../../../assets/images";
import styled from "styled-components";

const Img = styled.img`
  with: 200px;
  height: 200px;
`;

const Title = () => {
  return (
    <>
      <div className="title animate__fadeInUp" i>
        <h1>Hello, I'm Marcos</h1>
        <p>
          I am a Computer sciences student and a frontend developer from
          Argentina
        </p>
      </div>
    </>
  );
};

export default Title;
