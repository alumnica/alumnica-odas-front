import React, { useState } from "react";
import _ from "lodash";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Question from "./Question.js";
import "./Question.scss";

import { testSelector } from "../slices/test";
import { useSelector } from "react-redux";

const Test = ({ text }) => {
  const test = useSelector((state) => {
    return testSelector(state, "1");
  });
  
  const _renderQuestions = () => {
    const questionsObj = test.questions;
    let number = 0;
    let questions = [];
    for (var key in questionsObj) {
      if (questionsObj.hasOwnProperty(key)) {
        number++;
        questions.push(
          <Question
            testID={test.id}
            questionID={questionsObj[key].id}
            index={number}
            questionData={questionsObj[key]}
          />
        );
      }
    }
    return questions;
    // return test.questions.map((question, i) => {
    //   return (
    //     <Question
    //       testID={test.id}
    //       questionID={question.id}
    //       index={i + 1}
    //       questionData={question}
    //     />
    //   );
    // });
  };

  return <div>{_renderQuestions()}</div>;
};

export default Test;
