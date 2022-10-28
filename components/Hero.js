const Hero = () => {
  return (
    <section class="mx-auto max-w-screen-xl mb-10 flex items-center hero">
      <div class="m-auto text-center">
        <h1 class="lg:max-w-2xl m-auto text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
          Hello! I'm Hector a
          <span class="text-blue-600"> front-end developer</span>.
        </h1>
        <div>
          <a
            class="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            href="#projects"
            role="button"
          >
            Projects
          </a>
          <a
            class="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            href="#!"
            role="button"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
