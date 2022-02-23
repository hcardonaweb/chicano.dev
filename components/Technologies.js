import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TechData from "../data/TechData.json"

const Technologies = () => {
  return (
    <>
      <div className="grid h-full grid-cols-3 gap-y-4 md:ml-6">
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
