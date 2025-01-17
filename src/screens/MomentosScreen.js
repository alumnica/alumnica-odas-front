import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchContenido, contenidoSelector } from "../slices/contenido";
import _ from "lodash";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Twine from "../components/Twine.js";
import Agamotto from "../components/Agamotto.js";
import Test from "../components/Test.js";

import BasicCard from "../components/BasicCard.js";
import Content from "../components/Content.js";
import "./MomentoScreen.scss";

const fakeData = [
  {
    id: 1,
    name: "IMC_A10",
    type: "h5p",
    url_moment: "https://h5p.org/h5p/embed/732604",
    default_position: 2,
  },
  {
    id: 4,
    name: "IMC_A10",
    type: "text",
    text:
      "Esto va al final y es un prueba de texto.Esto va al final y es un prueba de texto.Esto va al final y es un prueba de texto.Esto va al final y es un prueba de texto.Esto va al final y es un prueba de texto.Esto va al final y es un prueba de texto.Esto va al final y es un prueba de texto.Esto va al final y es un prueba de texto.Esto va al final y es un prueba de texto.Esto va al final y es un prueba de texto.",
    default_position: 4,
  },
  {
    id: 2,
    name: "IMC_A12",
    type: "mp4",
    url_moment:
      "https://alumnica-studio-dev.s3-us-west-1.amazonaws.com/moment_files/1LF-C-PC-Cr1_corregido.mp4",
    default_position: 1,
  },

  {
    id: 3,
    name: "IMC_A11",
    type: "img",
    url_moment:
      "https://alumnica-studio-dev.s3-us-west-1.amazonaws.com/moment_files/7.png",
    default_position: 3,
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
    let orderedData = _.sortBy(rawData, "default_position");
    return orderedData.map((content) => {
      let { type } = content;
      let contentComponent;
      if (type === "H5p") {
        contentComponent = (
          <Content.H5P
            key={content.id}
            src={content.content.url_h5p}
            name={content.name}
          />
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

  return (
    <div className="screen-container">
      <Container>
        <Row className="justify-content-center">
          <BasicCard
            center
            title="Este es el título"
            extraInfo={`conectar ${momento_id}`}
          />
          {renderContents(fakeData)}

          <Col sm="10" className="block justify-content-center mx-auto">
            <Agamotto />
          </Col>

          <Col sm="10" className="block justify-content-center mx-auto">
            <Test />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MomentosScreen;
