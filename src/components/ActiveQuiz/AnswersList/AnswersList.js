import React from "react";

import AnswerItem from "./AnswerItem/AnswerItem";
import classes from "./AnswersList.module.scss";

const AnswersList = (props) => (
  <ul className={classes.AnswersList}>
    {props
      .answers
      .map((answer, index) => {
        return <AnswerItem
          answer={answer}
          state={props.state
          ? props.state[answer.id]
          : null}
          key={index}
          onAnswerClick={props.onAnswerClick}/>;
      })}
  </ul>
);

export default AnswersList;
