import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav
      aria-label="Site Nav"
      className="container mx-auto flex items-center justify-between my-4 py-5"
    >
      <a className="inline-flex h-10 w-10 items-center justify-center" href="/">
        <Image
          src="https://kdmitljkulczzntmmcbn.supabase.co/storage/v1/object/public/portfolio-content/assets/img/avatar.png"
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
          <Link className="rounded-lg px-3 py-2" href="contact">
            Contact
          </Link>
        </li>

        <li>
          <Link className="rounded-lg px-3 py-2" href="manga">
            マンガ
          </Link>
        </li>

        <li>
          <a
            className="rounded-lg pl-3 py-2"
            href="https://open.spotify.com/playlist/5bDoXj0pzIyZ1hlnUlPxhc?si=87a8f1d74ed34e1b"
            target="_blank"
          >
            🎧
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
