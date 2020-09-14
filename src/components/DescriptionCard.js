import React from "react";
import "./DescriptionCard.scss";

const DescriptionCard = ({ children, title, extraInfo, mini, center }) => {

  return (
    <div className={`description-card clickable-card ${center && "text-center"}`}>
      {extraInfo && <h4 className="extra-info">{extraInfo}</h4>}
      {title && <h2 style={mini && {fontSize: "1.2rem"}} className="title">{title}</h2>}
      <p className="content">{children}</p>
    </div>
  );
};

export default DescriptionCard;
