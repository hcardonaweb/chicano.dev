import Link from "next/link";
import ToggleButton from "./ThemeToggle";

const Nav = () => {
  return (
    <div className="nav-wrap">
      <nav className="mt-8 flex items-center justify-between">
        <div className="flex space-x-5">
          <a className="logo">
            <Link href="/">&#8757;</Link>
          </a>
          <ul className="flex items-center space-x-3">
            <li className="text-sm">
              <Link href="projects">projects</Link>
            </li>
            <li className="text-sm">
              <Link href="uses">uses</Link>
            </li>
            <li className="text-sm">
              <Link href="manga">manga</Link>
            </li>
          </ul>
        </div>
        <ToggleButton />
      </nav>
    </div>
  );
};

export default Nav;
