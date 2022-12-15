import React from "react";
import styled from "styled-components";
import images from "../../../assets/images";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
  color: #fff;
  display: flex;
  flex-direction: column;
  border: aliceblue 2px solid;
`;

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
      <Container id="certificates">
        <Title>Certificates</Title>
        <div className="certificate">
          <img src={alkemy} className="certificate_img"></img>
          <div className="certificate_info">
            <h2>Alkemy Job Ready React.js </h2>
            <p>
              Sea et sea sea magna dolore consetetur sea at amet consequat amet
              dolor lorem diam rebum labore elitr velit sed liber eum est
              accusam justo consetetur diam stet at dolor sed praesent exerci
              placerat kasd illum dolor eros iriure lorem no nulla sanctus
              takimata vero tincidunt volutpat dolor laoreet consetetur et
            </p>
          </div>
        </div>
        <div className="certificate">
          <img src={iters} className="certificate_img"></img>
          <div className="certificate_info">
            <h2>Full stack Course (Iters)</h2>
            <p>
              Sea et sea sea magna dolore consetetur sea at amet consequat amet
              dolor lorem diam rebum labore elitr velit sed liber eum est
              accusam justo consetetur diam stet at dolor sed praesent exerci
              placerat kasd illum dolor eros iriure lorem no nulla sanctus
              takimata vero tincidunt volutpat dolor laoreet consetetur et
            </p>
          </div>
        </div>
        <div className="certificate">
          <img src={utn} className="certificate_img"></img>
          <div className="certificate_info">
            <h2>JavaScript Course (UTN)</h2>
            <p>
              Sea et sea sea magna dolore consetetur sea at amet consequat amet
              dolor lorem diam rebum labore elitr velit sed liber eum est
              accusam justo consetetur diam stet at dolor sed praesent exerci
              placerat kasd illum dolor eros iriure lorem no nulla sanctus
              takimata vero tincidunt volutpat dolor laoreet consetetur et
            </p>
          </div>
        </div>
        <div className="certificate">
          <img src={node} className="certificate_img"></img>
          <div className="certificate_info">
            <h2>Node.js (Udemy)</h2>
            <p>
              Sea et sea sea magna dolore consetetur sea at amet consequat amet
              dolor lorem diam rebum labore elitr velit sed liber eum est
              accusam justo consetetur diam stet at dolor sed praesent exerci
              placerat kasd illum dolor eros iriure lorem no nulla sanctus
              takimata vero tincidunt volutpat dolor laoreet consetetur et
            </p>
          </div>
        </div>
        <div className="certificate">
          <img src={udejs} className="certificate_img"></img>
          <div className="certificate_info">
            <h2>JavaScript Course (Udemy)</h2>
            <p>
              Sea et sea sea magna dolore consetetur sea at amet consequat amet
              dolor lorem diam rebum labore elitr velit sed liber eum est
              accusam justo consetetur diam stet at dolor sed praesent exerci
              placerat kasd illum dolor eros iriure lorem no nulla sanctus
              takimata vero tincidunt volutpat dolor laoreet consetetur et
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Certificates;
