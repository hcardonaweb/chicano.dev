import Head from "next/head";
import Hero from "../components/Hero";

import "dracula-ui/styles/dracula-ui.css";

export default function Home() {
  return (
    <div className="drac-black-secondary">
      {" "}
      {/*className={styles.container} */}
      <Head>
        <title>Hector Cardona - Front-End Web Developer</title>
        <meta
          name="title"
          content="Hector Cardona - Front-End Web Developer"
        ></meta>
        <meta
          name="description"
          content="Hi I'm Hector a Front-End Web Developer based out of San Diego, CA."
        ></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://metatags.io/"></meta>
        <meta
          property="og:title"
          content="Hector Cardona - Front-End Web Developer"
        ></meta>
        <meta
          property="og:description"
          content="Hi I'm Hector a Front-End Web Developer based out of San Diego, CA."
        ></meta>
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        ></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://metatags.io/"></meta>
        <meta
          property="twitter:title"
          content="Hector Cardona - Front-End Web Developer"
        ></meta>
        <meta
          property="twitter:description"
          content="Hi I'm Hector a Front-End Web Developer based out of San Diego, CA."
        ></meta>
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        ></meta>

        <link rel="icon" href="/chicano-flame.png" />
      </Head>
      <Hero />
    </div>
  );
}
