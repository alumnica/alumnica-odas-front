import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../assets/alumnica_negro.png";

const Header = () => {
  const toggleHamburger = () => {
    setToggle(!toggle);
  };
  const [toggle, setToggle] = useState(false);

  let history = useHistory();

  return (
    <nav className="navbar navbar-expand-md navbar-bg fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="https://www.alumnica.org">
          <img src={logo} alt="Alúmnica" />
        </a>
        <button
          onClick={() => {
            toggleHamburger();
          }}
          className={`navbar-toggler hamburger hamburger--squeeze ${
            toggle && "is-active"
          }`}
          type="button"
          aria-controls="mobileMenu"
          aria-expanded="false"
          aria-label="Mobile Navigation Toggler"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div
          className={`navbar-collapse ${toggle ? null : "collapse"}`}
          id="mobileMenu"
        >
          <ul className="navbar-nav ml-auto text-center">
            <li class="nav-item">
              <a class="nav-link" href="https://app.alumnica.org/users/login/">
                plataforma
              </a>
            </li>
            <li
              onClick={() => {
                history.push("/");
              }}
              className="nav-item"
            >
              <a className="nav-link">contenidos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="escuelas#contacto">
                contacto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="escuelas">
                escuelas
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
