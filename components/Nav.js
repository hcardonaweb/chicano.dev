import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav
      aria-label="Site Nav"
      class="max-w-custom container mx-auto flex items-center justify-between my-4 p-4"
    >
      <a className="inline-flex h-10 w-10 items-center justify-center" href="/">
        <Image
          src="/avatar.png"
          alt="Picture of the author"
          width={35}
          height={50}
        />
      </a>
      <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
        <li>
          <Link className="rounded-lg px-3 py-2" href="about">
            About
          </Link>
        </li>

        <li>
          <Link className="rounded-lg px-3 py-2" href="projects">
            Projects
          </Link>
        </li>

        <li>
          <Link className="rounded-lg px-3 py-2" href="faqs">
            u_u
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
