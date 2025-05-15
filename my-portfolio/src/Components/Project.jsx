import projectsData from "../data/projectsData";
import LeftTemplate from "./Work/LeftTemplate";
import RightTemplate from "./Work/RightTemplate";


const Projects = () => {
  return (
    <div id="work" className="flex flex-col gap-20">
      {projectsData.map((project, index) =>
        index % 2 === 0 ? (
          <LeftTemplate
            key={index}
            course={project.course}
            name={project.name}
            desc={project.desc}
            img={project.img}
          />
        ) : (
          <RightTemplate
            key={index}
            course={project.course}
            name={project.name}
            desc={project.desc}
            img={project.img}
          />
        )
      )}
    </div>
  );
};

export default Projects;
