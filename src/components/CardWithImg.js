import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useHistory } from "react-router-dom";
import BasicCard from "./BasicCard.js";

const ODACard = ({
  extraInfo,
  name,
  description,
  imgSrc,
  children,
  clickable,
  onClick
}) => {
  const handleOnClick = () => {
    return onClick ? onClick() : null;
  };

  return (
    <Col
      className={`${clickable && "clickable-card"}`}
      xs="12"
      sm="10"
      lg="6"
    >
      <div onClick={handleOnClick}>
        <Row className="justify-content-center mt-5">
          <Col className="mb-3" xs="8" sm="4">
            {imgSrc && (
              <img
                className="img-fluid shadow-lg rounded-circle"
                src={imgSrc}
                alt={name}
              />
            )}
          </Col>
          <Col xs="12" sm="8">
            <BasicCard eyeIcon extraInfo={extraInfo} title={name}>
              {children}
            </BasicCard>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default ODACard;
