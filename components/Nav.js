import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav
      aria-label="Site Nav"
      className="max-w-custom container mx-auto flex items-center justify-between my-4 p-4"
    >
      <a className="inline-flex h-10 w-10 items-center justify-center" href="/">
        <Image
          src="https://mrqexlsyjusnkvogusgj.supabase.co/storage/v1/object/public/chicanodev/assets/img/avatar.png"
          alt="Picture of the author"
          width={35}
          height={50}
        />
      </a>
      <ul className="flex items-center gap-4 text-md font-medium text-gray-500">
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
            ⚡️
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
