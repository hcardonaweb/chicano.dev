const Projects = () => {
  return (
    <div className="page-header mt-8">
      <h1>Projects</h1>
      <p>past projects and works-in-progress</p>
      <div className="my-12 grid grid-cols-2 gap-6">
        <div className="project">
          <a href="#" class="block rounded-lg border p-6 hover:shadow-md">
            <h5 class="mb-2 text-2xl">
              kanye.direct
              {/* Add External FA Icon Here */}
            </h5>
            <p>
              Need to hear some facts. Learn from none other than the man
              himself, Ye 🌎.
            </p>
          </a>
        </div>
        <div className="project">
          <a href="#" class="block rounded-lg border p-6 hover:shadow-md">
            <h5 class="mb-2 text-2xl">
              Random Password Generator
              {/* Add External FA Icon Here */}
            </h5>
            <p>
              Don't know what your next password should be? Try this.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
