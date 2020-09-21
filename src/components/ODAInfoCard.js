import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DescriptionCard from "../components/DescriptionCard.js";

const ODAInfoCard = ({ objective, subject, description }) => {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col sm="10" className="my-4">
          <DescriptionCard title={"descripción"} extraInfo={subject}>
            {description}
          </DescriptionCard>
          <DescriptionCard title={"propósito de aprendizaje"}>
            {objective}
          </DescriptionCard>
        </Col>
      </Row>
    </>
  );
};

export default ODAInfoCard;
