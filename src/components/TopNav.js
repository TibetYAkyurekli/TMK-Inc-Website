import Nav from "react-bootstrap/Nav";
import "../App.css";

function TopNav() {
  return (
    <div className="sticky">
      <Nav className="topNav" activeKey="/home">
        <Nav.Item>
          <Nav.Link className="btn" href="#contact-us">
            Book a Free Quote
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default TopNav;
