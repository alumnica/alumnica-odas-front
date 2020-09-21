import React from "react";
import "./DescriptionCard.scss";

const DescriptionCard = ({
  children,
  onClick,
  title,
  extraInfo,
  mini,
  center,
}) => {
  return (
    <div
      onClick={() => onClick()}
      className={`${onClick && "clickable-card"} description-card ${
        center && "text-center"
      }`}
    >
      {extraInfo && <h4 className="extra-info">{extraInfo}</h4>}
      {title && (
        <h2 style={mini && { fontSize: "1.2rem" }} className="title">
          {title}
        </h2>
      )}
      <p className="content">{children}</p>
      {onClick && (
        <p className="eye">
          Ver <i className="far fa-eye" />
        </p>
      )}
    </div>
  );
};

export default DescriptionCard;
