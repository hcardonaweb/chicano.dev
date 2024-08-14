import { useEffect } from "react";
import party from "party-js";

import PortfolioCard from "./PortfolioCard";
const ProjectCard = ({ projects }) => {
  useEffect(() => {
    // Function to handle intersection changes
    function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Div is now in the viewport!");
          // Add your custom logic here
          setTimeout(() => {
            document.querySelectorAll(".party-trigger").forEach((element) => {
              party.confetti(element, {
                count: party.variation.range(20, 60),
              });
            });
            console.log("Delayed for 1 second.");
          }, 500);

          window.addEventListener("load", (event) => {
            console.log("page is fully loaded");
          });

          // Optionally, stop observing after the first intersection
          // observer.unobserve(entry.target);
        }
      });
    }

    // Create an Intersection Observer
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.1, // Trigger when at least 10% of the target is visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Start observing the target div
    const targetDiv = document.querySelector("#yourDivId");
    observer.observe(targetDiv);
  });

  return (
    <section id="projects" className="mx-auto scroll-mt-10">
      <div className="container featured-project">
        <div className="relative">
          <p class="absolute top-2 right-1 inline-flex items-center mb-2 py-1 px-3 mr-2 text-sm capitalize font-bold rounded  bg-zinc-900 ">
            New!
          </p>
          <div className="abosolute top-2 right-1 flex justify-between">
            <span className="party-trigger"></span>
            <span className="party-trigger"></span>
            <span className="party-trigger"></span>
            <span className="party-trigger"></span>
            <span className="party-trigger"></span>
            <span className="party-trigger"></span>
          </div>
        </div>
        <a
          href="https://sneakerverse-d55d70.webflow.io/"
          target="_blank"
          class="block mb-6 overflow-hidden rounded-lg shadow-[0_-20px_50px_rgba(8,_112,_184,_0.7)]"
        >
          <img
            alt="Chicano Dev"
            src="https://kdmitljkulczzntmmcbn.supabase.co/storage/v1/object/public/portfolio-content/assets/mockups/Sneakerverse.png"
            class="h-60 lg:h-[450px] w-full object-cover object-top"
          />
          <div id="yourDivId" class="p-4 charcoal-clear">
            <p class="inline-flex items-center mb-2 py-1 px-2 mr-2 text-xs capitalize font-bold webflow rounded">
              Webflow
            </p>
            <p class="inline-flex items-center mb-2 py-1 px-2 mr-2 text-xs capitalize font-bold relume rounded">
              Relume
            </p>
            <p class="inline-flex items-center mb-2 py-1 px-2 mr-2 text-xs capitalize font-bold figma rounded">
              Figma
            </p>
            <h3 class="text-md text-white">SneakerVerse</h3>
            <p class="mt-1 text-sm text-gray-400 h-full">
              This demo site is The Real MVP (Minimum Viable Product)! The
              purpose of this site is to showcase a fundamental understanding of
              Webflow, Relume, & Figma. Experience the Sneakerverse! And maybe
              buy some sneakers after? 🤷
            </p>
          </div>
        </a>
      </div>
      <br />
      <div className="grid grid-cols md:grid-cols-2 gap-6">
        <PortfolioCard />
        {projects.map((project) => (
          // add loading state for the card
          <a
            href={project.project_domain}
            target="_blank"
            className="block overflow-hidden rounded-lg"
          >
            <img
              alt={project.title}
              src={project.project_img_url}
              className="h-60 w-full object-cover object-top"
            />

            <div className="p-4 charcoal-clear h-full">
              {/* <p className="inline-flex items-center mb-2 py-1 px-2 text-xs capitalize font-medium text-sky-600 bg-sky-100 rounded"> */}
              <p
                className={`inline-flex items-center mb-2 py-1 px-2 text-xs capitalize font-bold bg-sky-100 ${project.project_type}  rounded`}
              >
                {project.project_type}
              </p>
              <h3 className="text-md text-white">{project.title}</h3>
              <p className="mt-1 text-sm text-gray-400">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
