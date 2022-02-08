import MangaData from "../data/MangaData.json";

const MangaCard = () => {
  return (
    <div className="grid gap-2">
      {MangaData.map((manga) => (
        <>
          <div
            key={manga.id}
            className="group relative my-4 flex h-40 flex-col rounded-lg transition duration-300 ease-in-out hover:shadow-lg md:h-48"
          >
            <div
              className="absolute h-full w-full rounded-lg opacity-100 transition duration-300 ease-in-out group-hover:opacity-25"
              style={{
                backgroundImage: `url('/${manga.image}.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="m-auto text-3xl opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
              <h2
                className="opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
              >
                {manga.title}
              </h2>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default MangaCard;
