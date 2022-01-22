import MangaData from "../data/MangaData.json"

const MangaCard = () => {
  // Figure out how to display MangCard json data as card component
  return (
    <div className="grid gap-2">
      {MangaData.map(manga =>
        <>
          <div key={manga.id} className="group flex flex-col relative my-4 h-40 md:h-48 rounded-lg transition duration-300 ease-in-out hover:shadow-lg">
            <div className="group-hover:opacity-25 opacity-100 absolute w-full h-full rounded-lg transition duration-300 ease-in-out"
              style={{
              backgroundImage:`url('/${manga.image}.jpg')`,
              backgroundSize:"cover",
              backgroundPosition:"center"
              }}
            >             
            </div>
            <div className="group-hover:opacity-100 opacity-0 m-auto transition duration-300 ease-in-out text-3xl">
              <h2 className="group-hover:opacity-100 opacity-0 transition duration-300 ease-in-out">{manga.title}</h2>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default MangaCard

