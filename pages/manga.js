import MangaCard from "../components/MangaCard";

const Manga = () => {
  return (
    <main className="mx-auto w-full font-medium text-gray-300">
      <h1 className="mb-2 text-4xl  tracking-wide tight">Manga</h1>
      <p className="mb-5 text-lg ">A collection of my favorite manga</p>
      <hr className="mb-8 bg-gray-300" />
      <section className="grid grid-cols grid-cols-1 md:grid-cols-2 gap-6 ">
        <MangaCard />
      </section>
    </main>
  );
};

export default Manga;
