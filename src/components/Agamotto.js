import React from "react";
import "./Agamotto.scss";
import Slider from "react-slick";
import img1 from "../assets/2HU_PEG_AD_Mr3b-1.png";
import img2 from "../assets/2HU_PEG_AD_Mr3b-2.png";
import img3 from "../assets/2HU_PEG_AD_Mr3b-3.png";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Content from "../components/Content.js";

const Agamotto = ({ data, instruction }) => {
  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 1000,
    centerMode: true,
    arrows: false,
  };

  const fakeData = [img1, img2, img3];

  const renderImages = (data) => {
    return data.map((src) => {
      return <Content.Image src={src} name={"hola"} />;
    });
  };

  return (
    <>
      <Content.Text
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />
      <Slider {...settings}>{renderImages(fakeData)}</Slider>
    </>
  );
};

export default Agamotto;
