import React from "react";
import Container from "react-bootstrap/Container";
import "./Hero.scss";

const Hero = ({ children }) => {
  return (
    <Container className="hero-container force-fluid-md" >
      <div className="hero header-padding">{children}</div>
    </Container>
  );
};

export default Hero;
