import React, { useState } from "react";
import _ from "lodash";
import { setSelectedAnswer, questionSelector } from "../slices/test";
import { useDispatch, useSelector } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Question.scss";

const Question = ({ testID, questionID, index }) => {
  const dispatch = useDispatch();
  const question = useSelector((state) => {
    return questionSelector(state, testID, questionID);
  });
  const [selected, setSelected] = useState(question.selected);

  const selectHandler = (i) => {
    dispatch(
      setSelectedAnswer({
        questionID: questionID,
        answerIndex: i,
        testID: testID,
      })
    );
    setSelected(i);
  };

  const _renderAnswers = () => {
    return question.answers.map((answer, i) => {
      let styles;
      if (i === selected) {
        if (i === question.correct_answer) {
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
        selected === question.correct_answer ? "positive" : "negative";

      return (
        question[`${result}_retro`] && (
          <div className={`${result} retro`}>
            <p>{question[`${result}_retro`]}</p>
          </div>
        )
      );
    }
  };

  return (
    <div>
      <Row className="question-container justify-content-center">
        <Col sm="12">
          <p className="question">{`${index && `${index}. `}${
            question.question
          }`}</p>
          {_renderAnswers()}
          {_renderRetro()}
        </Col>
      </Row>
    </div>
  );
};

export default Question;
