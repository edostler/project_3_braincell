import React, { Component } from 'react';
import './Answer.css';

const Answer = (props) => {

  return (
    <React.Fragment>
      <div className="answer">
        <p>I'm an Answer</p>
        <p>{props.answer}</p>
      </div>
    </React.Fragment>
  )

}

export default Answer;
