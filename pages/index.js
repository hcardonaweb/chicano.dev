import Head from "next/head";
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
        <p>
          <i>front-end web developer</i> focused on javascript, html &amp; css
        </p>
      </div>
      <div className="py-4">
        <div className="py-12">
          <h3 className="pearl dark:onyx font-medium">Hi there!</h3>
          <p className="pearl dark:onyx mt-2 text-sm">
            We are currenlty under construction. Come back Soon!
          </p>
        </div>
      </div>
    </div>
  );
}
