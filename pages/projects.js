import ProjectCard from "../components/ProjectCard";

const Projects = ({ projects }) => {
  return (
    <div id="projects">
      <ProjectCard projects={projects} />
    </div>
  );
};

export default Projects;
