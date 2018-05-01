import React from 'react';
import './Answer.css';

const Answer = (props) => {

  return (
      <div id={props.answerIndex} onClick={() => {props.handleAnswer(props.answer)}} className="answer">
        <p className="answer-text">
          {props.answer}
        </p>
      </div>
  )

}

export default Answer;
