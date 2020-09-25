import React, { useState } from "react";
import _ from "lodash";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Question.scss";

const Question = ({ text }) => {
  const fakeData = {
    question:
      "¿Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident?",
    answers: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "answer2",
      "answer3",
      "answer4",
    ],
    correct_answer: 0,
    positive_retro:
      "Positiva Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    negative_retro:
      "Negativa Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  const [selected, setSelected] = useState(null);

  const selectHandler = (i) => {
    setSelected(i);
  };

  const _renderAnswers = () => {
    return fakeData.answers.map((answer, i) => {
      let styles;
      if (i === selected) {
        if (i === fakeData.correct_answer) {
          styles = "correct";
        } else {
          styles = "incorrect";
        }
      }

      return (
        <div
          onClick={() => {
            selectHandler(i);
          }}
          className={`${styles} answer`}
        >
          <p>{answer}</p>
        </div>
      );
    });
  };

  const _renderRetro = () => {
    if (selected !== null) {
      let result =
        selected === fakeData.correct_answer ? "positive" : "negative";

      return (
        fakeData[`${result}_retro`] && (
          <div className={`${result} retro`}>
            <p>{fakeData[`${result}_retro`]}</p>
          </div>
        )
      );
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col sm="12">
          <p className="question">{fakeData.question}</p>
          {_renderAnswers()}
          {_renderRetro()}
          <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1QZCAehGLdUqwwRK6cuVkiQW5vWlp67b6hj374VSXL14&font=Default&lang=es&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
        </Col>
      </Row>
    </div>
  );
};

export default Question;
