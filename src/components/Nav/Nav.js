import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../App.css";
import "./nav.css";

function Header() {
  return (
    <Navbar className="navbar" variant="light" expand="lg">
      <Container>
        <Navbar.Brand className="navTitle" href="/">
          TMK Tree and Hedge Inc.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#146b51"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </Navbar.Toggle>
        <Navbar.Collapse className="navCollapse" id="basic-navbar-nav">
          <Nav>
            <Nav.Link>
              <Link className="navText" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navText" to="/services">
                Services
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navText" to="/contact-us">
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
