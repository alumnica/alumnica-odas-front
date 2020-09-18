import React from "react";

import DescriptionCard from "../components/DescriptionCard.js";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ODAInfoCard = ({ name, objective, subject, description }) => {
  return (
    <Row className="justify-content-md-center">
      <Col sm="10" className="my-4">
        <DescriptionCard title={name} extraInfo={subject}>
          {description}
        </DescriptionCard>
        <DescriptionCard title={objective}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </DescriptionCard>
      </Col>
    </Row>
  );
};

export default ODAInfoCard;
