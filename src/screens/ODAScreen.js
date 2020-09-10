import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Hero from "../components/Hero.js";
import Container from "react-bootstrap/Container";
import DescriptionCard from "../components/DescriptionCard.js";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ODAScreen = () => {
  let { id } = useParams();
  let history = useHistory();

  const onClick = () => {
    history.push(`/${id}/idMOMENTO`);
  };
  return (
    <>
      <div onClick={onClick}>
        <Hero>
          <h2 className="title">Soy la ODA con id: {id}</h2>
        </Hero>
      </div>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm="10 mt-4">
            <DescriptionCard tittle="SOY EL TITULO" extraInfo="materia">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </DescriptionCard>
            <DescriptionCard tittle="SOY EL TITULO">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </DescriptionCard>
          </Col>
        </Row>
        <Row>
          <Col md="6" className="p-6 mt-4">
            <DescriptionCard tittle="SOY EL TITULO">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </DescriptionCard>
          </Col>
          <Col md="6" className="p-6 mt-4">
            <DescriptionCard tittle="SOY EL TITULO">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </DescriptionCard>
          </Col>
          <Col md="6" className="p-6 mt-4">
            <DescriptionCard tittle="SOY EL TITULO">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </DescriptionCard>
          </Col>
          <Col md="6" className="p-6 mt-4">
            <DescriptionCard tittle="SOY EL TITULO">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </DescriptionCard>
          </Col>
          <Col md="6" className="p-6 mt-4">
            <DescriptionCard tittle="SOY EL TITULO">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </DescriptionCard>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ODAScreen;
