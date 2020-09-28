import React, { useState } from "react";
import _ from "lodash";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Question.scss";

const Question = ({ questionData,index }) => {
  const [selected, setSelected] = useState(null);

  const selectHandler = (i) => {
    setSelected(i);
  };

  const _renderAnswers = () => {
    return questionData.answers.map((answer, i) => {
      let styles;
      if (i === selected) {
        if (i === questionData.correct_answer) {
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
        selected === questionData.correct_answer ? "positive" : "negative";

      return (
        questionData[`${result}_retro`] && (
          <div className={`${result} retro`}>
            <p>{questionData[`${result}_retro`]}</p>
          </div>
        )
      );
    }
  };

  return (
    <div>
      <Row className="question-container justify-content-center">
        <Col sm="12">
          <p className="question">{`${index && `${index}. ` }${questionData.question}`}</p>
          {_renderAnswers()}
          {_renderRetro()}
        </Col>
      </Row>
    </div>
  );
};

export default Question;
