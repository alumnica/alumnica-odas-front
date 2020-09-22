import React from "react";
import Col from "react-bootstrap/Col";
import "./Twine.scss";

const Twine = () => {
  return (
    <Col sm="10" className="block justify-content-center mx-auto">
      <div className="iframe-container">
        <iframe
          src="https://alumnica-studio-dev.s3-us-west-1.amazonaws.com/moment_files/prueba.html"
          frameborder="0"
        ></iframe>
      </div>
    </Col>
  );
};

export default Twine;
