import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../assets/acento_gris.svg";

const Footer = () => {
  const history = useHistory();

  return (
    <div className="container force-fluid-md">
      <div className="row footer align-content-center justify-content-center">
        <div className="col-12">
          <ul className="footer-nav nav flex-row justify-content-center">
            <li className="nav-item">
              <a
                className="text-center nav-link"
                href="https://www.facebook.com/alumnica/"
              >
                facebook
              </a>
            </li>
            <li className="nav-item">
              <a
                className="text-center nav-link"
                href="https://www.instagram.com/alumnica_edu/"
              >
                instagram
              </a>
            </li>
            <li className="nav-item">
              <a
                className="text-center nav-link"
                href="https://twitter.com/alumnica_edu"
              >
                twitter
              </a>
            </li>
            <div
              onClick={() => {
                history.push("/");
              }}
            >
              <li className="nav-item">
                <a className="text-center nav-link">contenidos</a>
              </li>
            </div>
          </ul>
        </div>
        <div className="col-12 text-center">
          <div className="copy-rigth">
            <p>alúmnica</p>
            <p className="point8em">&#169;</p>
            <p className="point8em">2019</p>{" "}
            <img className="acento-footer" src={logo} alt="imagotipo" />{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="docs/Aviso Privacidad Integral v 01-1 - Interesados.pdf"
            >
              aviso de privacidad
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
