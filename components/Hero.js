import { Heading } from "dracula-ui";
import MediaLinks from "./SocialLinks";

const Hero = () => {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-screen-2xl px-4 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Heading as="h1" size="2xl" className="drop-shadow-lg">
            Portfolio v2.0.0 Coming Soon
          </Heading>
          <MediaLinks />
        </div>
      </div>
    </section>
  );
};
export default Hero;
