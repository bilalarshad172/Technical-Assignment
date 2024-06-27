import microsoft from "../assets/microsoft.png";
import coke from "../assets/coke.png";
import twitter from "../assets/twitter.png";
import shop from "../assets/shop.png";
import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight} from "react-icons/fa";

const logos = [microsoft, coke, twitter, shop];
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % logos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + logos.length) % logos.length);
  };
  useEffect(() => {
    // Preload images
    logos.forEach((logo) => {
      const img = new Image();
      img.src = logo;
    });
  }, []);
  const getDisplayedLogos = () => {
    const nextIndex = (currentIndex + 1) % logos.length;
    const prevIndex = (currentIndex - 1 + logos.length) % logos.length;
    return [logos[prevIndex], logos[currentIndex], logos[nextIndex]];
  };

  const displayedLogos = getDisplayedLogos();
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="heading-trusted w-max mx-auto relative text-3xl font-bold">
          Trusted by
        </h1>
        <p className="text-[#515151] my-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <br /> Ut illo aliquid mollitia distinctio consectetur ad!
        </p>
      </div>

      <div className="mt-10 px-4 md:px-0">
        <div className="slider relative overflow-hidden">
          <button
            onClick={prevSlide}
            className="slider-button left-0 md:left-4"
            aria-label="previous"
          >
            <FaAngleLeft className="text-[#46B0E6] w-6 h-6" />
          </button>
          <div className="slider-content flex w-4/5 md:gap-8 overflow-x-auto">
            {displayedLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${currentIndex + index + 1}`}
                className="slider-logo max-w-xs md:max-w-none"
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="slider-button right-0 md:right-4"
            aria-label="next"
          >
            <FaAngleRight className="text-[#46B0E6] w-6 h-6 " />
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
