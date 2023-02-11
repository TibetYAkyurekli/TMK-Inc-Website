import Button from "react-bootstrap/Button";

function HeroBanner() {
  return (
    <div className="hero-banner">
      <h1 className="hero-title">TMK Tree and Hedge Inc.</h1>
      <div className="heroBodyContainer">
        <p className="hero-body">Reliable</p>
        <p className="hero-body">Experienced</p>
        <p className="hero-body">Comprehensive</p>
      </div>
      <Button className="btn"> Contact Us Now</Button>
    </div>
  );
}

export default HeroBanner;
