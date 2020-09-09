import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";

import odaImg from "../assets/notas_economia.png";
// <div
//   class="nota-card col-lg-6 col-12 col-sm-10"
//   style="cursor:pointer"
//   onclick="document.location='odas.html'"
// >
//   <div class="row justify-content-center mt-5">
//     <div class="col-8 col-sm-4 mb-3">
//       <img
//         src="./img/notas_intromedicion.png"
//         alt=""
//         class="img-fluid shadow-lg rounded-circle"
//       />
//     </div>
//     <div class="col-12 col-sm-8">
//       <div class="text-center text-sm-left mb-3">
//         <a class="nota-materia">leyes de la física</a>
//         <h3>Introducción a la medición</h3>
//         <p>
//           En este documento, explicamos qué es medición, qué es magnitud y
//           la diferencia entre propiedades cuantitativas y cualitativas.
//           Además, hacemos una reflexión sobre la complejidad y los alcances
//           de los procesos de medición.
//         </p>
//         <a
//           rel="noopener noreferrer"
//           target="_blank"
//           href="./docs/NT Introducción a la medición.pdf"
//           class="stretched-link"
//         >
//           Ver <i class="far fa-eye"></i>
//         </a>
//       </div>
//     </div>
//   </div>
// </div>

const ODACard = ({ children, id, subject, name, description, imgSrc }) => {
  let history = useHistory();

  const onClick = () => {
    history.push(`/${id}`);
  };

  return (
    <Col className="clickable-card" xs="12" sm="10" lg="6">
      <div onClick={onClick}>
        <Row className="justify-content-center mt-5">
          <Col className="mb-3" xs="8" sm="4">
            <img
              className="img-fluid shadow-lg rounded-circle"
              src={imgSrc}
              alt="BLA"
            />
          </Col>
          <Col xs="12" sm="8">
            <h4 className="nota-materia">{subject}</h4>
            <h3>{name}</h3>
            <p>{description}</p>
            <a>
              Ver <i className="far fa-eye"></i>
            </a>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default ODACard;
