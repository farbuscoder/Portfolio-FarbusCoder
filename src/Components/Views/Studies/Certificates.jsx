import React from "react";
import images from "../../../assets/images";

import styled from "styled-components"

const Title = styled.h1`
  text-align: center;
  color: white;
  font-family: "Readex Pro", sans-serif;
  font-size: 62px;
`;

const Certificates = () => {
  const { alkemy, iters, utn, node, udejs } = images;

  return (
    <>
      <div id="certificates">
        <Title>Certificates</Title>
        <div class="grid-certificates">
          <div className="certificate">
            <h2>Alkemy Job Ready React.js </h2>
            <img src={alkemy} className="certificate_img" alt=""></img>
          </div>
          <div className="certificate">
            <h2>Full stack Course (Iters)</h2>
            <img src={iters} className="certificate_img" alt=""></img>
          </div>
          <div className="certificate">
            <h2>JavaScript Course (UTN)</h2>
            <img src={utn} className="certificate_img" alt=""></img>
          </div>
          <div className="certificate">
            <h2>Node.js (Udemy)</h2>
            <img src={node} className="certificate_img" alt=""></img>
          </div>
          <div className="certificate">
            <h2>JavaScript Course (Udemy)</h2>
            <img src={udejs} className="certificate_img" alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
