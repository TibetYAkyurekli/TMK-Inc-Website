import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../../App.css";
import "./topNav.css";

function TopNav() {
  return (
    <div className="sticky">
      <Nav className="topNav" activeKey="/home">
        <Nav.Item>
          <Link className="topNavBtn" to="/contact-us">
            Book a Free Quote
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default TopNav;
