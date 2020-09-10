import React from "react";
import "./DescriptionCard.scss";

const DescriptionCard = ({ children, tittle, extraInfo }) => {
  return (
    <div className="description-card">
      {extraInfo && <h4 className="extra-info">{extraInfo}</h4>}
      {tittle && <h3 className="titulo">{tittle}</h3>}
      <p className="content">{children}</p>
    </div>
  );
};

export default DescriptionCard;
