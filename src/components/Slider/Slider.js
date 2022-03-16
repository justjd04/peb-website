import { useState, useEffect } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./Slider.scss";
import { BsArrowRight } from "react-icons/bs";
// import { FcPrevious, FcNext } from "react-icons/fc";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { motion } from "framer-motion";
import { sliderData } from "../../db";

// import { urlFor, client } from "../../client";

const Slider = () => {
  // const [slides, setSlides] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "slides"]';

  //   client.fetch(query).then((data) => {
  //     setSlides(data);
  //   });
  // }, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  // const slideLength = sliderData.length;
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 8000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <MdNavigateBefore className="arrow prev" onClick={prevSlide} />
      <MdNavigateNext className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div className="container">
                <motion.img
                  // initial={{ opacity: 0 }}
                  whileInView={{
                    // x: [-10, 0],
                    // opacity: [0, 1],
                    scale: [1.1, 1],
                  }}
                  transition={{ duration: 8 }}
                  // animate={{ opacity: 1 }}
                  // exit={{
                  //   scale: [1, 1.01, 1, 0.9, 1],
                  //   rotate: [0, 1, 0, -1, 0],
                  //   delay: 3,
                  // }}
                  // exit={{ opacity: 0.5 }}
                  src={slide.image}
                  alt="slide"
                  className="slider-image"
                />
                <motion.div
                  whileInView={{ y: [100, 0], opacity: [0, 1] }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="content"
                >
                  <div className="slide-heading">{slide.heading}</div>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="slide-desc"
                  >
                    {slide.description}
                  </motion.div>
                  {/* <a href={slide.link} target="_blank" rel="noreferrer"> */}

                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="btn-container"
                  >
                    <a href={slide.link} className="slide-link">
                      <motion.span
                        whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="circle-btn"
                      />
                      <motion.span
                        whileInView={{ x: [-10, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.85, delay: 2.25 }}
                        className="arrow-btn-container"
                      >
                        <BsArrowRight className="arrow-btn" />
                      </motion.span>
                      <motion.span
                        whileInView={{ x: [-10, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5, delay: 3 }}
                        className="btn-text"
                      >
                        {slide.action}
                      </motion.span>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
