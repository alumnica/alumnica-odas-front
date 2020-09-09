import React from "react";
import { useParams } from "react-router-dom";
import Content from "../components/Content.js";

const fakeData = [
  {
    id: 1,
    name: "IMC_A10",
    type: "h5p",
    url_moment: "https://h5p.org/h5p/embed/732604",
    orden: 2,
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

const ODAScreen = () => {
  let { id } = useParams();
  return (
    <div className="screen">
    <Content[Video]/>
      <h2 className="title">Soy la ODA con id: {id}</h2>
    </div>
  );
};

export default ODAScreen;
