import React from "react";
import { Link } from "react-router-dom";
import TopNav from "../../components/TopNav/TopNav";
import Header from "../../components/Nav/Nav";
import Footer from "../../components/Footer";

function FourOhFour() {
  return (
    <>
      <TopNav />
      <Header />
      <div>
        <h1>404</h1>
      </div>
      <Footer />
    </>
  );
}

export default FourOhFour;
