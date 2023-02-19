import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";

function HeroBanner() {
  return (
    <div className="heroBanner">
      <h1 className="heroTitle">TMK Tree and Hedge Inc.</h1>
      <div className="heroBodyContainer">
        <h2 className="heroBody">Reliable</h2>
        <h2 className="heroBody">Experienced</h2>
        <h2 className="heroBody">Comprehensive</h2>
      </div>
      <div className="homeBodyBtnContainer">
        <button className="heroBtn">
          <Link className="heroLink" to="/contact-us">
            Contact Us Now
          </Link>
        </button>
      </div>
    </div>
  );
}

export default HeroBanner;
