import React from "react";
import { Card, Button } from "react-bootstrap";

const ItemProject = ({ project }) => {
  return (
    <div className="projects-cards">
      <Card className="card h-100" style={{ width: "20rem" }}>
        <div className="img-container">
          <Card.Img className="img" variant="top" src={project.image} />
        </div>
        <Card.Body className="card-body">
          <Card.Title>{project.title}</Card.Title>
          <Card.Text className="card-description">
            {project.description}
          </Card.Text>
          <Button className="card-btn" variant="primary">
            <i className="fab fa-github"></i>
            <a href={project.url} target="_blank">
              Go to repo
            </a>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemProject;

//https://cdn.pixabay.com/photo/2021/03/14/11/14/fish-6093991_960_720.jpg
