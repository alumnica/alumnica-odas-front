import React from "react";

const Image = ({ src, name }) => {
  return (
    <div className="d-flex image-container justify-content-center">
      <img className="img-responsive center-block" src={src} alt={name} />
    </div>
  );
};

export default Image;
