import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchContenido, contenidoSelector } from "../slices/contenido";
import _ from "lodash";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import DescriptionCard from "../components/DescriptionCard.js";
import Content from "../components/Content.js";
import "./MomentoScreen.scss";

const fakeData = [
  {
    id: 1,
    name: "IMC_A10",
    type: "h5p",
    url_moment: "https://h5p.org/h5p/embed/732604",
    orden: 2,
  },
  {
    id: 4,
    name: "IMC_A10",
    type: "text",
    text:
      "Esto va al final y es un prueba de texto.Esto va al final y es un prueba de texto.Esto va al final y es un prueba de texto.Esto va al final y es un prueba de texto.Esto va al final y es un prueba de texto.Esto va al final y es un prueba de texto.Esto va al final y es un prueba de texto.Esto va al final y es un prueba de texto.Esto va al final y es un prueba de texto.Esto va al final y es un prueba de texto.",
    orden: 4,
  },
  {
    id: 2,
    name: "IMC_A12",
    type: "mp4",
    url_moment:
      "https://alumnica-studio-dev.s3-us-west-1.amazonaws.com/moment_files/1LF-C-PC-Cr1_corregido.mp4",
    orden: 1,
  },

  {
    id: 3,
    name: "IMC_A11",
    type: "img",
    url_moment:
      "https://alumnica-studio-dev.s3-us-west-1.amazonaws.com/moment_files/7.png",
    orden: 3,
  },
];

const MomentosScreen = () => {
  let { momento_id } = useParams();

  const dispatch = useDispatch();
  const { contenido } = useSelector(contenidoSelector);

  useEffect(() => {
    dispatch(fetchContenido(momento_id));
  }, [dispatch, momento_id]);

  const renderContents = (rawData) => {
    let orderedData = _.sortBy(rawData, "orden");
    return orderedData.map((content) => {
      let { type } = content;
      let contentComponent;
      if (type === "h5p") {
        contentComponent = (
          <Content.H5P src={content.url_moment} name={content.name} />
        );
      } else if (type === "img") {
        contentComponent = (
          <Content.Image src={content.url_moment} name={content.name} />
        );
      } else if (type === "mp4") {
        contentComponent = <Content.Video src={content.url_moment} />;
      } else if (type === "text") {
        contentComponent = <Content.Text text={content.text} />;
      }
      return (
        <Col sm="10" className="block justify-content-center mx-auto">
          {contentComponent}
        </Col>
      );
    });
  };

  renderContents(fakeData);
  return (
    <div className="screen-container">
      <Container>
        <Row className="justify-content-center">
          <DescriptionCard
            center
            title="Este es el título"
            extraInfo={`conectar ${momento_id}`}
          />
          {renderContents(fakeData)}
        </Row>
      </Container>
    </div>
  );
};

export default MomentosScreen;
