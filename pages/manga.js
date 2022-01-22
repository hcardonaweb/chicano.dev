import Head from 'next/head'
import MangaCard from '../components/MangaCard'
import Kakegurui from '../public/kakegurui.jpg'

const Manga = () => {
  return (
    <>
      <Head>
        <title>Hector Cardona - Manga</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="page-header">
        <h1>
          Manga
        </h1>
        <p className="text-slate-500 font-medium">
          here is a shortlist of some of my favorite manga
        </p>
      </div>
      <div className="my-10">
        <MangaCard />
      </div>
    </>
  )
}

export default Manga