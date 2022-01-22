import Head from 'next/head'
import '../src/fontawesome/fontawesome';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hector Cardona - Front-End Web Developer</title>
        <meta name="description" content="Hector Cardona - Front-End Web Developer" />
        <link rel="icon" href="/favicon.png" />
        <link
            rel="preload"
            href="/public/fonts/JetBrainsMono-Regualr.ttf"
            as="font"
            crossOrigin=""
          />
      </Head>
      <div className="page-header">
        <h1>hector</h1>
        <p>friendly neighborhood mexican &amp;</p>
        <p><i>front-end web developer</i> from southern california</p>
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
  )
}
