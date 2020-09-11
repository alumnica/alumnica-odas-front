import React from "react";

const H5P = ({ src, name }) => {
  return (
    <iframe
      src={src}
      width="1090"
      height="783"
      frameborder="0"
      allowfullscreen="allowfullscreen"
      title={name}
    />
  );
};

export default H5P;
