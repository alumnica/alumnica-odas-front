import React from "react";

const H5P = ({ src, name }) => {
  return (
    <iframe
      src={src}
      width="1090"
      height="783"
      frameBorder="0"
      allowFullScreen="allowfullscreen"
      title={name}
    />
  );
};

export default H5P;
