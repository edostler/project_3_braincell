import React from 'react';
import './Answer.css';

const Answer = (props) => {

  return (
      <div dangerouslySetInnerHTML={{__html: props.answer}} id={props.answerIndex} onClick={() => {props.handleAnswer(props.answer)}} className="answer"></div>
  )

}

export default Answer;
