import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TechData from "../data/TechData.json"

const Technologies = () => {
  return (
    <>
      <div className="md:ml-6 grid grid-cols-3 gap-2 h-full">
        {TechData.map((tech) => (
            <FontAwesomeIcon
              key={tech.id}
              className="m-auto h-10"
              icon={["fab", tech.icon]}
            />
        ))}
      </div>
    </>
  );
};

export default Technologies;
