import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

const SocialMedia = () => (
  <div className="app__social">
    {/* <div>
      <BsTwitter />
    </div> */}
    <div>
      <a
        href="https://web.facebook.com/PEBacads"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
    </div>
    <div className="location-icon-wrap">
      <a
        href="https://www.google.com/maps/dir/10.3043304,123.9192443/10.68498,122.98469/@10.5132592,122.8654893,9z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0"
        target="_blank"
        rel="noreferrer"
        className="map"
      >
        <SiGooglemaps className="location-icon" />
      </a>
    </div>
    {/* <div>
      <BsInstagram />
    </div> */}
  </div>
);

export default SocialMedia;
