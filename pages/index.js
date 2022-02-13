import Head from "next/head";
import Technologies from "../components/Technologies";
import "../src/fontawesome/fontawesome";

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
        <div className="grid-gap-2 my-2 grid md:grid-cols-2">
          <div className="mb-8">
            <p className="mb-4 text-md">
              A <i>front-end web developer</i> focused on Html, Css &amp;
              JavaScript. By day I am a Web Developer at TM5150. By night I am
              just like you, trying to get better at my craft one line of code
              at a time. If I’m not reading a book/manga then I’m probably
              binging a Netflix series whilst <i>slaying</i> some tacos. I
              occasionally write on my blog about what I’m learning or my
              current technical roadblock. If you feel like following a normal
              person on Twitter, click here. No threads, pinky promise.
            </p>
            <p className="text-sm">- Your Friendly Neighborhood Chicano</p>
          </div>
          <div>
            <Technologies />
          </div>
        </div>
      </div>
    </div>
  );
}
