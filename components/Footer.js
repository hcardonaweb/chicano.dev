import Socials from "./Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer conatiner xs:flex-wrap mb-8 flex justify-between lg:flex-nowrap">
      <div className="copyright">
        <p className="leading-0 flex align-middle text-sm">
          Built with{" "}
          <FontAwesomeIcon className="px-1" icon={["fab", "react"]} /> and
          proudly hosted on Vercel ▲
        </p>
      </div>
      <div className="socials flex items-center space-x-2">    
        <Socials />
      </div>
    </div>
  );
};

export default Footer;
