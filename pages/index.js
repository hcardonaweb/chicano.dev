import Head from "next/head";
import "../src/fontawesome/fontawesome";
import TechSlider from "../components/TechSlider";
import FeaturedProjects from "../components/FeaturedProjects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hector Cardona - Front-End Web Developer</title>
        <meta
          name="description"
          content="Hector Cardona - Front-End Web Developer"
        />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="preload"
          href="/public/fonts/JetBrainsMono-Regualr.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div className="page-header mt-8">
        <h1>Hi, I'm Hector!</h1>
        <p className="text-xl">💻 🎧 ☕️</p>
      </div>
      <div className="my-10">
        <div className="grid-gap-2 my-2">
          <div className="mb-8">
            <p className="text-md mb-4">
              A <i>front-end web developer</i> focused on Html, CSS &amp;
              JavaScript. By day I am a Front-End Web Developer. By night I am
              working on my never ending list of side projects. If you feel like
              following a normal person on Twitter, click here. No threads,
              pinky promise.
            </p>
            <p className="text-sm">- Your Friendly Neighborhood Chicano</p>
          </div>
        </div>
        <TechSlider />
        <FeaturedProjects />
      </div>
    </div>
  );
}
