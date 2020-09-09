import React from "react";

const H5P = ({ src }) => {
  return (
    <iframe
      src={src}
      width="1090"
      height="783"
      frameborder="0"
      allowfullscreen="allowfullscreen"
    />
  );
};

export default H5P;
