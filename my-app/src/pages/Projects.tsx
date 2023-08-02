import { Project } from "../components/Project";

export const Projects = () => {
  const projectList = require("../components/projectList.json");
  return (
    <>
      <h2 className="page-container" id="projects">
        Projects
      </h2>
      <div className="page-container">
        {projectList.map((projectItem: any, index: number) => {
          return <Project projectItem={projectItem} key={index.toString()} />;
        })}
      </div>
    </>
  );
};
