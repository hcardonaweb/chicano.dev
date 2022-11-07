import PortfolioCard from "./PortfolioCard";
const ProjectCard = ({ projects }) => {
  return (
    <section id="projects" className="scroll-mt-10">
      <div className="grid grid-cols md:grid-cols-2 gap-6">
        <PortfolioCard />
        {projects.map((project) => (
          <a
            href={project.project_domain}
            target="_blank"
            className="block overflow-hidden rounded-lg"
          >
            <img
              alt={project.title}
              src={project.project_img_url}
              className="h-60 w-full object-cover object-top"
            />

            <div className="p-4 charcoal-clear">
              {/* <p className="inline-flex items-center mb-2 py-1 px-2 text-xs capitalize font-medium text-sky-600 bg-sky-100 rounded"> */}
              <p
                className={`inline-flex items-center mb-2 py-1 px-2 text-xs capitalize font-bold bg-sky-100 ${project.project_type}  rounded`}
              >
                {project.project_type}
              </p>
              <h3 className="text-md text-white">{project.title}</h3>
              <p className="mt-1 text-sm text-gray-400">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
