import { supabase } from "../utils/supabase";

export const getStaticProps = async () => {
  const { data: projects } = await supabase.from("projects").select("*");

  return {
    props: {
      projects,
    },
  };
};

const ProjectCard = ({ projects }) => {
  console.log({ projects });
  return (
    <>
      <pre className="text-gray-500">[{JSON.stringify(projects)}]</pre>
      <a href="#" className="block overflow-hidden rounded-lg">
        <img
          alt="Office"
          src="Compound-Solutions.jpg"
          className="h-56 w-full object-cover object-top"
        />

        <div className="p-4 charcoal-clear">
          <p className="text-xs text-gray-500">
            chicano.dev <span></span>
          </p>

          <h3 className="text-sm text-white">This website!</h3>

          <p className="mt-1 text-xs text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            nobis aliquid accusamus? Sint, sequi voluptas.
          </p>
        </div>
      </a>
    </>
  );
};

export default ProjectCard;
