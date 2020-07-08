import React from "react";

import AnswersList from "./AnswersList/AnswersList";
import classes from "./ActiveQuiz.module.scss";

const ActiveQuiz = (props) => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>{props.answerNumber}.</strong>
          &nbsp; {props.question}
        </span>
        <small>{props.answerNumber}&nbsp;из&nbsp;{props.quizLength}</small>
      </p>

      <AnswersList
        state={props.state}
        onAnswerClick={props.onAnswerClick}
        answers={props.answers}/>
    </div>
  );
};

export default ActiveQuiz;
