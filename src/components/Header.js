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
    <div className="header-bottom-margin">
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
              <li className="nav-item">
                <a
                  className="nav-link header-link"
                  href="https://app.alumnica.org/users/login/"
                >
                  plataforma
                </a>
              </li>
              <li
                onClick={() => {
                  history.push("/");
                }}
                className="nav-item"
              >
                <a role="button" className="nav-link header-link">
                  contenidos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link header-link"
                  href="https://www.alumnica.org/escuelas#contacto"
                >
                  contacto
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link header-link"
                  href="https://www.alumnica.org/escuelas"
                >
                  escuelas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
