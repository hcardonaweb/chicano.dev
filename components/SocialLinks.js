import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="flex gap-6 text-gray-500 sm:mt-0">
      <a
        className="hover:opacity-75"
        href="https://github.com/hcardonaweb"
        target="_blank"
        rel="noreferrer"
      >
        <span className="sr-only"> GitHub </span>

        <FaGithub size={19} />
      </a>

      <a
        className="hover:opacity-75"
        href="https://www.instagram.com/chicanodev/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="sr-only"> Instagram </span>

        <FaInstagram size={19} />
      </a>

      <a
        className="hover:opacity-75"
        href="https://www.linkedin.com/in/hectorcardona/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="sr-only"> LinkedIn </span>

        <FaLinkedin size={19} />
      </a>

      <a
        className="hover:opacity-75"
        href="https://twitter.com/ChicanoDev"
        target="_blank"
        rel="noreferrer"
      >
        <span className="sr-only"> Twitter </span>

        <FaXTwitter size={19} />
      </a>
    </div>
  );
};

export default SocialLinks;
