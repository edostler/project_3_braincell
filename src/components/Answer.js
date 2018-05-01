import React from 'react';
import './Answer.css';

const Answer = (props) => {

  return (
      <div id={props.answerIndex} onClick={() => {props.handleAnswer(props.answer)}} className="answer">
        {props.answer}
      </div>
  )

}

export default Answer;
