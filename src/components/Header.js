import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import logo from "../assets/alumnica_negro.png";

const Header = () => {
  return (
    <Navbar bg="white" collapseOnSelect expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="header-brand">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
