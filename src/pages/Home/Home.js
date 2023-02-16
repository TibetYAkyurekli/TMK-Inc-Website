import React from "react";
import { Link } from "react-router-dom";
import TopNav from "../../components/TopNav";
import Header from "../../components/Nav";
import HeroBanner from "../../components/Hero";
import Footer from "../../components/Footer";
import "../Home/home.css";

function Home() {
  return (
    <>
      <TopNav />
      <Header />
      <HeroBanner />
      <div className="homeBodyContainer">
        <h2 className="homeBodyTitle">Who Are We?</h2>
        <p className="homeBodyText">
          We are a locally owned and operated tree service company providing
          services to the Ottawa and surrounding area.
        </p>
        <p className="homeBodyText">
          From small shrubs to large mature trees, TMK Inc staff have the
          knowledge, skill, and equipment to handle any tree related projects.
        </p>
        <div className="homeBodyBtnContainer">
          <Link className="link homeBodyBtn homeBodyBtnText" to="/services">
            See All Services Available
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
