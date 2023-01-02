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
    window.location.href = projectItem.github;
  };
  const descriptionShort = (description: string): string => {
    let shortDescription = "";
    description.split("").forEach((char: string, index: number) => {
      if (index < 47) {
        shortDescription = shortDescription.concat(char);
      }
    });
    shortDescription = shortDescription.concat("...");
    return shortDescription;
  };

  return (
    <Card style={{ position: "static", backgroundColor: "#282c34" }}>
      {/* <Card.Header as="h5">Project One</Card.Header> */}
      <Card.Body>
        <Card.Title className="text-color">{projectItem.name}</Card.Title>
        <Card.Img variant="top" src={projectItem.image} />
        {projectItem.description.length > 100 ? (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header
                className="d-flex justify-content-between"
              >
                Description
              </Accordion.Header>
              <Accordion.Body>{projectItem.description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ) : (
          <Card.Text>{projectItem.description}</Card.Text>
        )}
        <Button variant="primary" onClick={(e) => handleDemoRedirect(e)}>
          Demo
        </Button>
        <Button variant="primary" onClick={(e) => handleGitHubRedirect(e)}>
          Github
        </Button>
      </Card.Body>
    </Card>
  );
};
