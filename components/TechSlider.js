// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

import TechData from "../data/TechData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TechSlider = () => {
  SwiperCore.use([Autoplay]);
  return (
    <section className="techStack">
      <Swiper
        // install Swiper modules
        modules={[Autoplay]}
        spaceBetween={25}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {TechData.map((tech) => (
          <>
            <SwiperSlide key={tech.id}>
              <FontAwesomeIcon
                className="px-1 m-auto techIcon h-7"
                icon={["fab", `${tech.icon}`]}
              />
          
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </section>
  );
};

export default TechSlider;