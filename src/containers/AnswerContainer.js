import React, { Component } from 'react';
import './AnswerContainer.css';
import Answer from '../components/Answer';

const AnswerContainer = (props) => {

  return (
    <React.Fragment>
      <div className="answer-container">
        <p>I'm an Answer Container</p>
        <Answer answer={props.currentQuestion[1]}/>
        <Answer answer={props.currentQuestion[2]}/>
        <Answer answer={props.currentQuestion[3]}/>
        <Answer answer={props.currentQuestion[4]}/>
      </div>
    </React.Fragment>
  )

}

export default AnswerContainer;
