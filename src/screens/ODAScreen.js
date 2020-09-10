import React from "react";
import { useHistory, useParams } from "react-router-dom";

const ODAScreen = () => {
  let { id } = useParams();
  let history = useHistory();

  const onClick = () => {
    history.push(`/${id}/idMOMENTO`);
  };
  return (
    <div className="screen" onClick={onClick}>
      <h2 className="title">Soy la ODA con id: {id}</h2>
    </div>
  );
};

export default ODAScreen;
