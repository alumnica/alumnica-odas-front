import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NavDropdown from 'react-bootstrap/NavDropdown'
import React from "react";
import logo from "../assets/alumnica_negro.png";

// const Header = () => {
//   return (
//     <nav className="navbar navbar-expand-md navbar-bg fixed-top" id="mainNav">
//       <div className="container">
//         <a className="navbar-brand" href="/">
//           <img src={logo} alt="Alúmnica"/>
//         </a>
//         <button className="navbar-toggler hamburger hamburger--squeeze" type="button" aria-controls="mobileMenu" aria-expanded="false" aria-label="Mobile Navigation Toggler">
//           <span className="hamburger-box">
//             <span className="hamburger-inner"></span>
//           </span>
//         </button>
//         <div className="collapse navbar-collapse" id="mobileMenu">
//           <ul className="navbar-nav ml-auto text-center">
//             <li className="nav-item">
//               <a className="nav-link" href="https://app.alumnica.org/users/login/">plataforma</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="https://www.manuelmoreno.org/donaciones">donaciones</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="escuelas#contacto">contacto</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="escuelas">escuelas</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="#home" className="header-brand">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <ul className="navbar-nav ml-auto text-center">
        <li className="nav-item">
          <a className="nav-link" href="https://app.alumnica.org/users/login/">
            plataforma
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.manuelmoreno.org/donaciones">
            donaciones
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="escuelas#contacto">
            contacto
          </a>
        </li>
        <li className="nav-item">
          <a className="magic" href="escuelas">
            escuelas
          </a>
        </li>
      </ul>
    </Navbar>
  );
};

export default Header;
