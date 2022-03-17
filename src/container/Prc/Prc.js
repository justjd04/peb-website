import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
// import { urlFor, client } from "../../client";
import "./Prc.scss";
import { prcData } from "../../db";

const Prc = () => {
  return (
    <>
      <h2 className="head-text">
        <span>PRC Licensure Exam</span>
      </h2>

      <div className="app__profiles">
        {prcData.map((prc, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={prc.title + index}
          >
            <img src={prc.image} alt={prc.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {prc.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {prc.description}
            </p>
            <a href={prcData.link} target="_blank" rel="noreferrer">
              Go to PRC website
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Prc, "app__works"), "prc", "app__whitebg");
