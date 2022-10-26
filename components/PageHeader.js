import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <section>
      <h1>{slug}</h1>
      <h2>Page description</h2>
    </section>
  );
};

export default Header;
