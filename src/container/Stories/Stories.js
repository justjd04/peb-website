import { useState, useEffect, useRef } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./Stories.scss";
import { BsArrowRight } from "react-icons/bs";
// import { FcPrevious, FcNext } from "react-icons/fc";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { GrFacebookOption } from "react-icons/gr";

// import { urlFor, client } from "../../client";

import iframes from "./iframes";
import fb from "../../assets/fb.svg";
import { storiesData } from "../../db";

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    scale: 0.8,
    rotate: -5,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Stories = () => {
  // const [stories, setStories] = useState([]);

  // const [width, setWidth] = useState(0);
  const constraintsRef = useRef();

  // const sortedStories = storiesData.sort(
  //   (a, b) => new Date(b.date) - new Date(a.date)
  // );
  // const sortedStories = stories.sort((a, b) => a.date - b.date);
  // console.log("stories:", stories);
  // console.log("sortedStories:", sortedStories);

  // console.log("hey:", stories.length);
  // const test = stories.length * 350 + stories.length * 20;
  // console.log("test", test);

  // console.log("w1:", constraintsRef.current.scrollWidth);
  // console.log("w2:", constraintsRef.current.offsetWidth);

  // const width = constraintsRef.current.scrollWidth - constraintsRef.current.offsetWidth;

  // useEffect(() => {
  //   console.log(
  //     "dragWidth:",
  //     constraintsRef.current.scrollWidth - constraintsRef.current.offsetWidth
  //   );

  //   console.log("w1:", constraintsRef.current.scrollWidth);
  //   console.log("w2:", constraintsRef.current.offsetWidth);
  //   setWidth();
  //   // constraintsRef.current.scrollWidth - constraintsRef.current.offsetWidth
  //   setWidth(constraintsRef.current.scrollWidth);
  // }, []);

  // useEffect(() => {
  //   const query = '*[_type == "stories"]';

  //   client.fetch(query).then((data) => {
  //     setStories(data);
  //   });
  // }, []);

  return (
    <>
      <div className="stories">
        <div className="stories-container">
          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            ref={constraintsRef}
            className="stories-carousel"
          >
            <div className="carousel-wrap">
              <motion.div
                drag="x"
                whileInView={{ x: [-700, 0], opacity: [0, 1] }}
                transition={{ duration: 2 }}
                // drag
                // dragConstraints={{ right: 0, left: -width }}
                // dragConstraints={{ right: 0, left: -test }}
                dragConstraints={constraintsRef}
                // dragConstraints={{ right: 0 }}
                className="stories-inner-carousel"
                ref={constraintsRef}
              >
                {storiesData.map((storiesData, index) => {
                  return (
                    <motion.div
                      // initial={{ opacity: 0, scale: 0.8 }}
                      // whileInView={{ opacity: 1 }}
                      whileHover={{ scale: 0.85 }}
                      whileTap={{ scale: 0.85 }}
                      variants={cardVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                      // viewport={{ once: true }}
                      key={index}
                      className="stories-item"
                    >
                      <Iframe
                        iframe={storiesData.post}
                        allow="autoplay"
                        className="stories-item-iframe"
                      />

                      <a
                        href={storiesData.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GrFacebookOption className="stories-item-icon" />
                      </a>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* {stories.map((stories, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div className="container">
                <div>
                  <Iframe iframe={stories.post} />, ,
                </div>
              </div>
            )}
          </div>
        );
      })} */}
      {/* <div className="slider">
      <MdNavigateBefore className="arrow prev" onClick={prevSlide} />
      <MdNavigateNext className="arrow next" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div className="container">
                <img src={urlFor(slide.image)} alt="slide" className="image" />
                <div>{slide.post}</div>
              </div>
            )}
          </div>
        );
      })}
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Stories, "app__testimonial"),
  "stories",
  "app__primarybg"
);
