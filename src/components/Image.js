import React from "react";

const Image = ({ src, name }) => {
  return (
    <div className="content-container">
      <img className="" src={src} alt={name} />
    </div>
  );
};

export default Image;
