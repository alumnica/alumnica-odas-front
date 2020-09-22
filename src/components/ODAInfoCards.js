import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BasicCard from "../components/BasicCard.js";

const ODAInfoCards = ({ objective, subject, description }) => {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col sm="10" className="my-4">
          <BasicCard title={"descripción"} extraInfo={subject && subject.toLowerCase()}>
            {description}
          </BasicCard>
          <BasicCard title={"propósito de aprendizaje"}>
            {objective}
          </BasicCard>
        </Col>
      </Row>
    </>
  );
};

export default ODAInfoCards;
