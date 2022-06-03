const FeaturedProjects = () => { 
  return (
    <section>
      <h2>Featured Projects</h2>
      <div className="my-6 grid grid-cols-2 gap-6">
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
              This Website!
              {/* Add External FA Icon Here */}
            </h5>
            <p>
              The proof is in the pudding. Check out my repo to see how this Porfolio Site was made.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;