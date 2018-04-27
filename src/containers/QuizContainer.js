import React, { Component } from 'react';
import './QuizContainer.css';
import Question from '../components/Question';
import AnswerContainer from './AnswerContainer';

class QuizContainer extends Component {

  render(){
    return (
      <React.Fragment>
        <p>I'm a Quiz Container</p>
        <Question/>
        <AnswerContainer/>
      </React.Fragment>
    )
  }

}

export default QuizContainer;
