import React from "react";
import { useParams } from "react-router-dom";
import Content from "../components/Content.js";
import _ from "lodash";

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
  let { id } = useParams();

  const renderContents = (rawData) => {
    let orderedData = _.sortBy(rawData, "orden");
    return orderedData.map((content) => {
      let { type } = content;
      if (type === "h5p") {
        return <Content.H5P src={content.url_moment} name={content.name}/>;
      } else if (type === "img") {
        return <Content.Image src={content.url_moment} name={content.name} />;
      } else if (type === "mp4") {
        return <Content.Video src={content.url_moment} />;
      } else if (type === "text") {
        return <Content.Text text={content.text} />;
      }
      return null;
    });
  };

  renderContents(fakeData);
  return (
    <div className="screen">
      <h2 className="title">Soy la ODA con id: {id}</h2>
      {renderContents(fakeData)}
    </div>
  );
};

export default MomentosScreen;
