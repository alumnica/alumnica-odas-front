import React from "react";
import { useHistory } from "react-router-dom";

import BasicCard from "../components/BasicCard.js";

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
          <BasicCard
            onClick={onClickHandler}
            extraInfo={formattedType}
            title={formattedName}
            eyeIcon
            mini
            clickable
          >
            {description}
          </BasicCard>
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
