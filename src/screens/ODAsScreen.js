import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOdas, odasSelector } from "../slices/odas";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ODACard from "../components/ODACard.js";

const ODAsScreen = () => {
  const dispatch = useDispatch();
  const { odas } = useSelector(odasSelector);

  const renderODACards = (data) => {
    
    return data.map(({ id, name, description, img_oda }) => {
      return (
        <ODACard
          name={name}
          id={id}
          key={id}
          description={description}
          imgSrc={img_oda}
        />
      );
    });
  };

  useEffect(() => {
    dispatch(fetchOdas());
  }, [dispatch]);

  return (
    <Container className="header-padding">
      <Row>{renderODACards(odas)}</Row>
    </Container>
  );
};

export default ODAsScreen;
