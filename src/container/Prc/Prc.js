import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
// import { urlFor, client } from "../../client";
import "./Prc.scss";
import { prcData } from "../../db";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

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
            <h2 className="prc-title" style={{ marginTop: 20 }}>
              {prc.title}
            </h2>
            <p className="prc-desc-text" style={{ marginTop: 10 }}>
              {prc.description}
            </p>
            <a
              href={prc.link}
              target="_blank"
              rel="noreferrer"
              className="go-to-prc"
            >
              Go to PRC website{" "}
              <FaExternalLinkSquareAlt className="prc-ext-link" />
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Prc, "app__works"), "prc", "app__whitebg");
