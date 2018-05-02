import React from 'react';
import './Question.css';

const Question = (props) => {

  return (
    <div className="question">
      <p dangerouslySetInnerHTML={{__html: props.currentQuestion.question}} className="current-question"></p>
    </div>
  )

}

export default Question;
