import React from "react";
import { Button, Card, Accordion } from "react-bootstrap";

interface ProjectProps {
  projectItem: any;
}

export const Project = ({ projectItem }: ProjectProps) => {
  const handleDemoRedirect = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    window.open(projectItem.link, "_blank")?.focus();
  };
  const handleGitHubRedirect = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();

    window.open(projectItem.repo, "_blank")?.focus();
  };

  return (
    <Card
      style={{
        position: "static",
        backgroundColor: "rgba(40, 44, 52, 0.7)",
        marginBottom: "1%",
      }}
    >
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

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="d-flex justify-content-between">
              Description
            </Accordion.Header>
            <Accordion.Body>{projectItem.description}</Accordion.Body>
          </Accordion.Item>
        </Accordion>

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
