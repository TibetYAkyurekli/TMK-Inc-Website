import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Image from "react-bootstrap/Image";

import "./serviceCard.css";
import "../../App.css";

function ServiceCard({ image, name, body, id }) {
  return (
    <div className="cardContainer" key={id}>
      <Image className="serviceImage" fluid="true" src={image} />
      <div className="serviceBodyContainer">
        <h3 className="serviceTitle">{name}</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p className="serviceText">{body}</p>
          <Button className="serviceButton">Get a Quote</Button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
