import SocialsData from '../data/Socials'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials = () => {
  return (
    <div className="socials flex items-center space-x-2">
      {SocialsData.map((socials) => (
        <>
          <a href={socials.url} target="_blank">
            <FontAwesomeIcon
              className="px-1"
              icon={["fab", `${socials.type}`]}
              href="`${socials.url}`"
            />
          </a>
        </>
      ))}
    </div>
  );
}

export default Socials;