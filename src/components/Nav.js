import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

function Header() {
  return (
    <Navbar className="navbar" variant="light" expand="lg">
      <Container>
        <Navbar.Brand className="navTitle" href="#home">
          TMK Tree and Hedge Inc.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navCollapse" id="basic-navbar-nav">
          <Nav>
            <Nav.Link className="navText" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navText" href="#services">
              Services
            </Nav.Link>
            <Nav.Link className="navText" href="#contact-us">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
