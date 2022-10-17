import Head from 'next/head'
import Hero from "../components/Hero";

import 'dracula-ui/styles/dracula-ui.css'

export default function Home() {
  return (
    <div className="drac-black-secondary"> {/*className={styles.container} */}
      <Head>
        <title>Hector Cardona - Front-End Web Developer</title>
        <meta
          name="description"
          content="Hector Cardona - Front-End Web Developer"
        />
        <link rel="icon" href="/chicano-flame.png" />
      </Head>
      <Hero />

    </div>
  )
}
