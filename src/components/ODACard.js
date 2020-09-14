import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useHistory } from "react-router-dom";

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
            <h2>{name}</h2>
            <p>{description}</p>
            <Link to={`/${id}`}>
              Ver <i className="far fa-eye"/>
            </Link>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default ODACard;
