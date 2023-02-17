import React from "react";
import { Link } from "react-router-dom";

function HeroBanner() {
  return (
    <div className="hero-banner">
      <h1 className="hero-title">TMK Tree and Hedge Inc.</h1>
      <div className="heroBodyContainer">
        <h2 className="hero-body">Reliable</h2>
        <h2 className="hero-body">Experienced</h2>
        <h2 className="hero-body">Comprehensive</h2>
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
