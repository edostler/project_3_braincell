import React from 'react';
import './Answer.css';

const Answer = (props) => {

  return (
    <React.Fragment>
      <div className="answer">
        <p>I'm an Answer</p>
        <p id={props.answerIndex} onClick={() => {props.handleAnswer(props.answer)}}>{props.answer}</p>
      </div>
    </React.Fragment>
  )

}

export default Answer;
