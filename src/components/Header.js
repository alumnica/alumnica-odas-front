import Navbar from "react-bootstrap/Navbar";
import React from "react";
import logo from "../assets/alumnica_negro.png"


const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top header-brand"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
