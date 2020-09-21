import React from "react";
import { useHistory } from "react-router-dom";

import DescriptionCard from "../components/DescriptionCard.js";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ODAInfoCard = ({ momentos, oda_id }) => {
  let history = useHistory();

  const formatName = (name) => {
    return name.split("_oda_")[0];
  };

  const formatType = (type) => {
    let new_type;
    switch (type) {
      case "sensitization":
        new_type = "conectar";
        break;
      case "application":
        new_type = "integrar";
        break;
      case "formalization":
        new_type = "modelar";
        break;
      case "activation":
        new_type = "aplicar";
        break;
      case "exemplification":
        new_type = "explorar";
        break;
      default:
        return (new_type = "");
    }
    return new_type;
  };

  const renderMomentoCards = (momentos) => {
    return momentos.map(({ name, type, description, id }) => {
      let formattedType = formatType(type.name);
      let formattedName = formatName(name);
      const onClickHandler = () => {
        history.push(`/${oda_id}/momento/${id}`);
      };
      return (
        <Col
          className={formattedType === "integrar" && "order-12"}
          key={id}
          md="6"
        >
          <DescriptionCard
            onClick={onClickHandler}
            extraInfo={formattedType}
            title={formattedName}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </DescriptionCard>
        </Col>
      );
    });
  };

  return (
    <>
      <hr />
      <Row>{renderMomentoCards(momentos)}</Row>
      <hr />
    </>
  );
};

export default ODAInfoCard;
