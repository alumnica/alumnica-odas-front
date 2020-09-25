import React from "react";

const Image = ({ src, name }) => {
  return (
    <div className="d-flex image-container justify-content-center">
      <img style={{maxWidth:"100%", height:"auto"}} className="center-block" src={src} alt={name} />
    </div>
  );
};

export default Image;
