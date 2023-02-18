import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

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
        <Button className="serviceButton" href="/contact-us">
          Get a Quote
        </Button>
      </div>
    </div>
  );
}

export default ServiceCard;
