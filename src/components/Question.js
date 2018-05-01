import React from 'react';
import './Question.css';

const Question = (props) => {

  return (
    <React.Fragment>
      <div className="question">
        <p className="current-question"> {props.currentQuestion.question}</p>
      </div>
    </React.Fragment>
  )

}

export default Question;
