import React from "react";
import { Button, Card, Accordion } from "react-bootstrap";

interface ProjectProps {
  projectItem: any;
}

export const Project = ({ projectItem }: ProjectProps) => {
  const handleDemoRedirect = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    window.location.href = projectItem.link;
  };
  const handleGitHubRedirect = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    window.location.href = projectItem.repo;
  };

  return (
    <Card
      style={{
        position: "static",
        backgroundColor: "#282c34",
      }}
    >
      {/* <Card.Header as="h5">Project One</Card.Header> */}
      <Card.Body>
        <Card.Title className="text-color">{projectItem.name}</Card.Title>
        <Card.Img
          variant="top"
          src={projectItem.image}
          style={{
            borderColor: "#eec262",
            border: "0.1vw solid #eec262",
          }}
        />
        {projectItem.description.length > 100 ? (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="d-flex justify-content-between">
                Description
              </Accordion.Header>
              <Accordion.Body>{projectItem.description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ) : (
          <Card.Text>{projectItem.description}</Card.Text>
        )}
        <div className="project-button-container">
          <Button
            variant="primary"
            style={{}}
            onClick={(e) => handleDemoRedirect(e)}
          >
            Demo
          </Button>
          <Button variant="primary" onClick={(e) => handleGitHubRedirect(e)}>
            Github
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
