import React from 'react';
import './Question.css';

const Question = (props) => {

  return (
    <React.Fragment>
      <div className="question">
        <p>I'm a Question</p>
        <p>Current Question: {props.currentQuestion.question}</p>
      </div>
    </React.Fragment>
  )

}

export default Question;
