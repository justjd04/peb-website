import React, { useState } from "react";

// import { images } from "../../constants";
import emails from "../../assets/emails.png";
import mobile from "../../assets/mobile.png";
import { AppWrap, MotionWrap } from "../../wrapper";
// import { client } from "../../client";
import "./Footer.scss";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    // const contact = {
    //   _type: "contact",
    //   name: formData.username,
    //   email: formData.email,
    //   message: formData.message,
    // };

    setLoading(false);
    setIsFormSubmitted(true);
  };

  return (
    <>
      <h2 className="head-text">Contact Us</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={emails} alt="email" />
          <a href="mailto:peb.acads@gmail.com" className="p-text">
            peb.acads@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">
            0923-575-1844
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}

      <div className="footer-info">
        <div className="peb-footer">PEB Review and Training</div>
        <div>peb.acads@gmail.com</div>
        <div>0923-575-1844</div>
        <div>
          <a
            href="https://www.google.com/maps/dir/10.3043304,123.9192443/10.68498,122.98469/@10.5132592,122.8654893,9z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0"
            target="_blank"
            rel="noreferrer"
            className="map"
          >
            Bacolod City
          </a>
        </div>
        <div>
          <span>
            <a
              href="https://web.facebook.com/PEBacads"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
          </span>

          <span>
            <a
              href="https://www.google.com/maps/dir/10.3043304,123.9192443/10.68498,122.98469/@10.5132592,122.8654893,9z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0"
              target="_blank"
              rel="noreferrer"
              className="map"
            >
              <SiGooglemaps className="footer-location-icon" />
            </a>
          </span>

          {/* <span>
            <BsTwitter />
          </span>
          <span>
            <BsInstagram />
          </span> */}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
