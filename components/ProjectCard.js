const ProjectCard = () => {
  return (
    <>
      <a href="#" class="block overflow-hidden rounded-lg">
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          class="h-56 w-full object-cover"
        />

        <div class="p-4 charcoal-clear">
          <p class="text-xs text-gray-500">chicano.dev</p>

          <h3 class="text-sm text-white">This website!</h3>

          <p class="mt-1 text-xs text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            nobis aliquid accusamus? Sint, sequi voluptas.
          </p>
        </div>
      </a>
    </>
  );
};

export default ProjectCard;
