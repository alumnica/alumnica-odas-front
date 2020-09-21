import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Hero.scss";
import img from "../assets/portadas_ODA_EPEG.png";

const Hero = ({ children, title, imgSrc }) => {
  return (
    <>
      <Container className="hero-container force-fluid-md">
        <Row className="align-items-center justify-content-start h-100 text-left">
          <Col className="hero-title-container" sm={6} lg={7}>
            <h1 className="hero-title">
              Introducción a la medición científica
            </h1>
          </Col>
        </Row>
        <img className="hero-icon" src={img} />
      </Container>
      <Container className="sm-hero-info-container">
        <Row className="justify-content-md-center">
          <Col sm="10" className="my-4">
            <h1>Introducción a la medición científica</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
