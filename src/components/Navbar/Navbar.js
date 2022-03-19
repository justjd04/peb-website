import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

// import { images } from "../../constants";
import logo from "../../assets/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const setNavActive = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", setNavActive);

  return (
    <nav className={navbar ? "app__navbar active" : "app__navbar"}>
      <div className="app__navbar-logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "stories", "prc", "testimonial", "contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 className="menu-icon" onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            // whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="nav-menu"
          >
            <HiX className="menu-icon" onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about",
                "stories",
                "prc",
                "testimonial",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
