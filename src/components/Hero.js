import React from "react";
import { Link } from "react-router-dom";

function HeroBanner() {
  return (
    <div className="hero-banner">
      <h1 className="hero-title">TMK Tree and Hedge Inc.</h1>
      <div className="heroBodyContainer">
        <p className="hero-body">Reliable</p>
        <p className="hero-body">Experienced</p>
        <p className="hero-body">Comprehensive</p>
      </div>
      <div className="homeBodyBtnContainer">
        <button className="btn">
          <Link className="link" to="/contact-us">
            Contact Us Now
          </Link>
        </button>
      </div>
    </div>
  );
}

export default HeroBanner;
