import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

import "./serviceCard.css";
import "../../App.css";

function ServiceCard({ image, name, body, id }) {
  return (
    <div className="cardContainer" key={id}>
      <Image className="serviceImage" fluid="true" src={image} />
      <div className="serviceBodyContainer">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h3 className="serviceTitle">{name}</h3>
          <p className="serviceText">{body}</p>
        </div>
        {/* <Button className="serviceButton"> */}
        <Link
          style={{ textDecoration: "none", color: "white" }}
          className="serviceButton"
          to="/contact-us"
        >
          Get a Quote
        </Link>
        {/* </Button> */}
      </div>
    </div>
  );
}

export default ServiceCard;
