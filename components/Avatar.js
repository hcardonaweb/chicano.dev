import Image from "next/image";
import Link from "next/link";

const Avatar = () => {
  return (
    <Link href="/">
      <Image src="/avatar.png" alt="Picture of the Me" width={31} height={45} />
    </Link>
  );
}

export default Avatar;