import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
// import { urlFor, client } from "../../client";
import { aboutData } from "../../db";

const About = () => {
  // const [prc, setPrc] = useState([]);
  const [filterAbout, setFilterAbout] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setFilterAbout(aboutData);
  }, []);

  const handleAboutFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterAbout(aboutData);
      } else {
        setFilterAbout(
          aboutData.filter((aboutData) => aboutData.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        <span>Engineering, Math and Science Review</span>
      </h2>

      <div className="app__work-filter">
        {[
          "Chemical Engineering",
          "Mechanical Engineering",
          "Electrical Engineering",
          "Math and Science",
          "All",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleAboutFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="app__profiles">
        {filterAbout.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={index}
          >
            <img src={about.image} alt={about.name} />

            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
