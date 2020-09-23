import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOdas, odasSelector } from "../slices/odas";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardWithImg from "../components/CardWithImg.js";

import { useHistory } from "react-router-dom";

const ODAsScreen = () => {
  const dispatch = useDispatch();
  const { odas } = useSelector(odasSelector);
  let history = useHistory();

  const renderODACards = (data) => {
    return data.map(({ id, name, description, img_oda, subject,img_portada }) => {

      const onClick = () => history.push(`/${id}`);

      return (
        <CardWithImg
          clickable
          onClick={onClick}
          extraInfo={subject.name.toLowerCase()}
          name={name}
          key={id}
          imgSrc={img_oda.file}
        >
          {description}
        </CardWithImg>
      );
    });
  };

  useEffect(() => {
    dispatch(fetchOdas());
  }, [dispatch]);

  return (
    <div className="screen-container">
      <Container className="header-padding">
        <Row>{renderODACards(odas)}</Row>
      </Container>
    </div>
  );
};

export default ODAsScreen;
