import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMomentos, momentosSelector } from "../slices/momentos";
import { fetchOda } from "../slices/odas";
import { odaIdSelector } from "../slices/odas";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Hero from "../components/Hero.js";
import BasicCard from "../components/BasicCard.js";
import ODAInfoCards from "../components/ODAInfoCards.js";
import MomentosInfoCards from "../components/MomentosInfoCards.js";

const ODAScreen = () => {
  let { oda_id } = useParams();
  let history = useHistory();

  const dispatch = useDispatch();
  const { momentos } = useSelector(momentosSelector);
  const oda = useSelector((state) => {
    return odaIdSelector(state, oda_id);
  });

  useEffect(() => {
    dispatch(fetchMomentos(oda_id));
    if (!oda) {
      dispatch(fetchOda(oda_id));
    }
  }, [dispatch, oda_id, oda, fetchOda, fetchMomentos]);

  return (
    <div className="screen-container">
      <Hero
        title={oda && oda.name}
        imgSrc={oda && oda.img_portada && oda.img_portada.file}
      />

      <Container>
        <ODAInfoCards
          name={oda && oda.name}
          description={oda && oda.description}
          objective={oda && oda.learning_objective}
          subject={oda && oda.subject.name}
        />
        <MomentosInfoCards momentos={momentos} oda_id={oda_id} />
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
    </div>
  );
};

export default ODAScreen;
