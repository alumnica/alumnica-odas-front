import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ODACard from "../components/ODACard.js";

const fakeData = [
  {
    id: 1,
    name: "Introducción la medición cientifica",
    description:
      "Se explica qué es medicion, qué es magnitud y la diferencia entre propiedades cuantitativas y cualitativas. Además, se inicia una reflexión sobre la complejidad y los alcances de los procesos de medición.",
    img_oda:
      "https://alumnica-studio-dev.s3-us-west-1.amazonaws.com/assets_odas/INTEGRAR/2HU_PEG_AD_Ir1.png",
  },
  {
    id: 2,
    name: "La paz después de la Gran Guerra III",
    description:
      "Identificarás la relación entre los acuerdos de paz que dieron fin a la Primera Guerra Mundial y los cambios en el orden político, económico y geográfico de Europa en el periodo de entre guerras (1919-1939) al final de Hitler de los 300 y de los templarios y los ilumunities",
    img_oda:
      "https://alumnica-studio-dev.s3-us-west-1.amazonaws.com/assets_odas/INTEGRAR/2HU_PEG_AD_Ir1.png",
  },
  {
    id: 3,
    name: "La paz después de la Gran Guerra III",
    description:
      "Identificarás la relación entre los acuerdos de paz que dieron fin a la Primera Guerra Mundial y los cambios en el orden político, económico y geográfico de Europa en el periodo de entre guerras (1919-1939) al final de Hitler de los 300 y de los templarios y los ilumunities",
    img_oda:
      "https://alumnica-studio-dev.s3-us-west-1.amazonaws.com/assets_odas/INTEGRAR/2HU_PEG_AD_Ir1.png",
  },
  {
    id: 4,
    name: "La paz después de la Gran Guerra III",
    description:
      "Identificarás la relación entre los acuerdos de paz que dieron fin a la Primera Guerra Mundial y los cambios en el orden político, económico y geográfico de Europa en el periodo de entre guerras (1919-1939) al final de Hitler de los 300 y de los templarios y los ilumunities",
    img_oda:
      "https://alumnica-studio-dev.s3-us-west-1.amazonaws.com/assets_odas/INTEGRAR/2HU_PEG_AD_Ir1.png",
  },
  {
    id: 5,
    name: "La paz después de la Gran Guerra III",
    description:
      "Identificarás la relación entre los acuerdos de paz que dieron fin a la Primera Guerra Mundial y los cambios en el orden político, económico y geográfico de Europa en el periodo de entre guerras (1919-1939) al final de Hitler de los 300 y de los templarios y los ilumunities",
    img_oda:
      "https://alumnica-studio-dev.s3-us-west-1.amazonaws.com/assets_odas/INTEGRAR/2HU_PEG_AD_Ir1.png",
  },
];

const renderODACards = () => {
  return fakeData.map(({ id, name, description, img_oda }) => {
    return (
      <ODACard name={name} id={id} description={description} imgSrc={img_oda} />
    );
  });
};

const ODAsScreen = () => {
  return (
    <Container className="screen-container">
      <Row>{renderODACards()}</Row>
    </Container>
  );
};

export default ODAsScreen;
