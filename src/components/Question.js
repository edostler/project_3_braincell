import React from 'react';
import './Question.css';

const Question = (props) => {

  return (
    <div className="question">
      <p className="current-question"> {props.currentQuestion.question}</p>
    </div>
  )

}

export default Question;
