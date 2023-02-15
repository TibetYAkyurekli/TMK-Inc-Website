import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ServiceCard({ image, name, body, id }) {
  return (
    <Card
      style={{ width: "18rem", marginTop: "1rem", flexBasis: "auto" }}
      key={id}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant="primary">Get a Quote</Button>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
