import Link from "next/link";
const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <a className="inline-flex h-10 w-10 items-center justify-center" href="/">
        🔥
      </a>
      <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
        <li className="hidden lg:block">
          <Link className="rounded-lg px-3 py-2" href="projects">
            Projects
          </Link>
        </li>

        <li>
          <a
            className="inline-flex items-center rounded-lg px-3 py-2"
            href=""
            target="_blank"
          >
            External
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="ml-1.5 h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
