import Nav from "react-bootstrap/Nav";
import "../App.css";

function TopNav() {
  return (
    <div className="sticky">
      <Nav
        className="topNav"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link className="topNavBtn" href="/home">
            Book a Free Quote
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default TopNav;
