import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Hero from "../components/Hero.js";
import Container from "react-bootstrap/Container";
import DescriptionCard from "../components/DescriptionCard.js";
import ODAInfoCard from "../components/ODAInfoCard.js";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ODAScreen = () => {
  let { id } = useParams();
  let history = useHistory();

  const onClick = () => {
    history.push(`/${id}/idMOMENTO`);
  };
  return (
    <>
      <div onClick={onClick} className="screen-container">
        <Hero>
          <h2 className="title">Soy la ODA con id: {id}</h2>
        </Hero>
      </div>
      <Container>
        <ODAInfoCard
          name="nombre"
          objective="propósito de aprendizaje"
          subject="materia"
        />
        <Row>
          <Col md="6">
            <DescriptionCard title="SOY EL TITULO">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </DescriptionCard>
          </Col>
          <Col md="6">
            <DescriptionCard title="SOY EL TITULO">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </DescriptionCard>
          </Col>
          <Col md="6">
            <DescriptionCard title="SOY EL TITULO">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </DescriptionCard>
          </Col>
          <Col md="6">
            <DescriptionCard title="SOY EL TITULO">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </DescriptionCard>
          </Col>
          <Col md="6">
            <DescriptionCard mini title="SOY EL TITULO">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </DescriptionCard>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ overflowWrap: "anywhere" }}>
              <h3>Fuentes de Consulta</h3>
              <p>
                Hillgruber, A. (1995). La Segunda Guerra Mundial. Objetivos de
                guerra y estrategias de las grandes potencias.Madrid Alianza
                Editorial. Lozano, Á. (2011). La Alemania nazi 1933-1945.
                Madrid, España: Marcial Pons, Ediciones de Historia, S.A.
                Parker, R.,(1978). El siglo XX. Europa, 1918-1945. México: Siglo
                XXI. Hitler, A. (19 de julio, 1940). Discurso ante el Reichstag.
                SolNegro88 10 de julio 2020, Adoll Hitler Discurso 19 de julio
                1940. [Archivo de video]. Recuperado de
                https://loveotv.com/watch/adoll-hitler-discurso-19-de-julio-1940_jsSjn5a81IGrZsW.html
                Churchill,W. (18 de junio 1940). Their Finest Hour. [Web]
                Recuperado de
                https://winstonchurchill.org/resources/speeches/1940-the-finest-hour/their-finest-hour/)
                Hitler, A. (2003), Mi Lucha, Chile: Juego, p. 382-384.
                Recuperado de
                http://der-stuermer.org/spanish/Adolf%20Hitler-Mi%20Lucha.pdf
                Hitler´s Table Talk 1941-1944: Secret conversations. (2000) Es.
                H. R. Trevor-Roper, Enigma Books Artola, M. y Pérez Ledesma, M.
                (2005). Contemporánea. La Historia desde 1776. Madrid: Alianza
                Editorial. Comellas, J. (1998) Historia breve del mundo
                contemporáneo (1776-1945). Madrid: Ediciones Rialp. Evans, M. y
                Morgan, D. (1993( The Battle for Britain. citizenship an
                Ideology in the Secon World War. New York: Routledge. Bourke, J.
                (2001) The Second World War. a People's History. Oxford: Oxford
                University Press.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ODAScreen;
