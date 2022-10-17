import { Heading } from "dracula-ui";
import MediaLinks from "./SocialLinks";

const Hero = () => {
  return (
    <section className="text-white">
      <div
        className="mx-auto max-w-screen-2xl px-4 py-32 flex h-screen items-center"
      >
        <div className="mx-auto max-w-3xl text-center">
          <Heading as="h1" size="2xl" color="pinkPurple">
            Portfolio v2.0.0
            Coming Soon
         </Heading>
          <MediaLinks />
        </div>
      </div>
    </section>
    )
}
export default Hero