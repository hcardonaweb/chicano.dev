import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faReact,
  faJsSquare,
  faPhp,
  faWordpressSimple,
  faShopify,
  faNpm,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { SiTailwindcss, SiTypescript, SiVercel, SiFastapi } from "react-icons/si";

const ICONS = [
  <FontAwesomeIcon icon={faHtml5} />,
  <FontAwesomeIcon icon={faCss3Alt} />,
  <FontAwesomeIcon icon={faJsSquare} />,
  <SiTypescript />,
  <FontAwesomeIcon icon={faSass} />,
  <SiTailwindcss />,
  <SiFastapi />,
  <FontAwesomeIcon icon={faReact} />,
  <SiVercel />,
  <FontAwesomeIcon icon={faNpm} />,
  <FontAwesomeIcon icon={faPython} />,
  <FontAwesomeIcon icon={faWordpressSimple} />,
  <FontAwesomeIcon icon={faPhp} />,
  <FontAwesomeIcon icon={faShopify} />,
  
  
];

const About = () => {
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(null);
  
  const MOBILE_BREAKPOINT = 768;
  
  useEffect(() => {
    const el = carouselRef.current;
    const track = trackRef.current;
    if (!el || !track) return;
  
    const update = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        // measure the natural width of one copy of the track
        setSlideWidth(track.scrollWidth);
      } else {
        setSlideWidth(el.offsetWidth);
      }
    };
  
    const ro = new ResizeObserver(update);
    ro.observe(el);
    update();
    return () => ro.disconnect();
  }, []);
  
  return (
    <>
      <div className=" grid gap-4">
        <div className="flex justify-center items-center overflow-hidden mb-10 md:mb-auto shadow-blue-500/50">
          <div className="font-serif">

            {/* Header */}
            <div className="flex items-baseline gap-3 mb-1">
              <h2 className="text-4xl font-medium tracking-wider">Hector</h2>
              <span className="text-xs text-gray-400 font-sans">1 of 1</span>
            </div>

            {/* Part of speech + pronunciation */}
            <div className="flex items-center gap-3 mb-1">
              <span className="font-sans text-xs text-gray-400 border border-gray-200 dark:border-gray-700 rounded-full px-2 py-0.5">
                noun
              </span>
              <span className="font-sans text-sm text-gray-400 tracking-wide">
                hek · tor
              </span>
            </div>

            {/* Alternate forms */}
            <p className="font-sans text-xs text-gray-400 mb-5">
              also: <em>hek·tor·i·to</em> &nbsp;|&nbsp; plural:{" "}
              <em>side projects (infinite)</em>
            </p>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-5">
              <p className="font-sans text-xs text-gray-400 mb-4">
                <strong className="font-medium">transitive &amp; intransitive</strong>
              </p>

              {/* Definition 1 */}
              <div className="mb-4">
                <span className="font-sans mt-[2px] text-xs font-medium text-gray-400">1</span>
                
                  <p className="text-base text-gray-300 ml-4 mb-1.5 leading-[140%]">
                    : a front-end engineer who curates the web with logic and style.
                  </p>
                  <p className="font-sans text-xs text-gray-400 italic ml-4">
                    "If it lives in a browser, he probably has opinions about it."
                  </p>
                
              </div>

              {/* Definition 2 */}
              <div className="mb-4">
                <span className="font-sans text-xs font-medium text-gray-400">2</span>
                <p className="text-base text-gray-300 ml-4 mt-1 leading-relaxed">
                  : one who accumulates side projects at a rate that defies both
                  time and physics.
                </p>
              </div>

              {/* Definition 3 */}
              <div className="mb-4">
                <span className="font-sans text-xs font-medium text-gray-400">3</span>
                <p className="text-base text-gray-300 ml-4 mt-1 mb-1.5 leading-relaxed">
                  : baseball savant — fluent in <a className="underline" href="https://baseballsavant.mlb.com/" target="_blank">advanced metrics</a>,
                  Dodger Blue, and the quiet religion of a well-turned double
                  play.
                </p>
                <p className="font-sans text-xs text-gray-400 italic ml-4">
                  "He will pause any conversation to explain why WAR is being
                  misused."
                </p>
              </div>

              {/* Definition 4 */}
              <div className="mb-0">
                <span className="font-sans text-xs font-medium text-gray-400">4</span>
                <p className="text-base text-gray-300 ml-4 mt-1 leading-relaxed">
                  : can be found surfing, deep
                  in a TV binge, or standing over a grill with strong carne
                  asada convictions
                </p>
              </div>
            </div>

            {/* Synonyms */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-4">
              <p className="font-sans text-xs font-medium uppercase tracking-widest text-gray-500 mb-2">
                synonyms
              </p>
              <p className="font-sans text-sm text-gray-400 leading-loose">
                <em>craftsman</em> &nbsp;·&nbsp; <em>builder</em> &nbsp;·&nbsp;{" "}
                <em>pixel pusher</em> &nbsp;·&nbsp; <em>cleanup hitter</em>{" "}
                &nbsp;·&nbsp; <em>grill master</em>
              </p>
            </div>

            {/* Derived forms */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-4">
              <p className="font-sans text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
                derived forms
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2 items-baseline">
                  <span className="font-sans text-sm text-gray-300">hec·tor·ing</span>
                  <span className="font-sans text-xs text-gray-500">verb</span>
                  <span className="font-sans text-xs text-gray-400">
                    — actively refactoring something that was already working fine
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 items-baseline">
                  <span className="font-sans text-sm text-gray-300">hec·tored</span>
                  <span className="font-sans text-xs text-gray-500">adjective</span>
                  <span className="font-sans text-xs text-gray-400">
                    — the state of a codebase after 2am inspiration strikes
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <p className="font-sans text-xs text-gray-500 italic">
                Want to collaborate on something worth building? —
                <a className="underline" href="/contact"> reach out</a>.
              </p>
            </div>

          </div>
        </div>

        
        {/* Tech stack carousel */}
        <div ref={carouselRef} className="overflow-hidden my-5 md:my-10 text-gray-500">
          <div
            className={`flex${slideWidth ? " tech-stack-track" : ""}`}
            style={slideWidth ? { "--slide-width": `${slideWidth}px` } : undefined}
          >
            {[0, 1].map((copy) => (
              <div
                key={copy}
                ref={copy === 0 ? trackRef : null}
                aria-hidden={copy === 1 || undefined}
                className="flex gap-8 md:gap-0 md:justify-around tech-stack flex-shrink-0 pr-8 md:pr-0"
                style={{ width: slideWidth ?? "auto" }}
              >
                {ICONS.map((icon, i) => (
                  <div key={i} className="flex items-center justify-center">
                    {icon}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default About;