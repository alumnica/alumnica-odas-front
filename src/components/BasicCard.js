import React from "react";
import "./BasicCard.scss";

const BasicCard = ({
  children,
  onClick,
  title,
  extraInfo,
  mini,
  center,
  clickable,
  eyeIcon,
}) => {
  const handleOnClick = () => {
    return onClick ? onClick() : null;
  };

  return (
    <div
      onClick={() => handleOnClick()}
      className={`${clickable && "clickable-card"} description-card ${
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
      {eyeIcon && (
        <p className="eye">
          Ver <i className="far fa-eye" />
        </p>
      )}
    </div>
  );
};

export default BasicCard;
