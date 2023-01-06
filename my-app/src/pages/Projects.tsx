import { Project } from "../components/Project";

export const Projects = () => {
  const projectList = require("../components/projectList.json");
  return (
    <>
      <div
        className="page-container"
        style={{
          backgroundColor: "#282c34",
        }}
        id="projects"
      >
        <h2>Projects</h2>
        {projectList.map((projectItem: any, index: number) => {
          return <Project projectItem={projectItem} key={index.toString()} />;
        })}
      </div>
    </>
  );
};
