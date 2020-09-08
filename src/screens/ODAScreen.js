import React from "react";
import { useParams } from "react-router-dom";

const ODAScreen = () => {
  let { id } = useParams();
  return (
    <div className="screen">
      <h2 className="title">Soy la ODA con id: {id}</h2>
    </div>
  );
};

export default ODAScreen;
