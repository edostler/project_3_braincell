import React from 'react';
import './QuizContainer.css';
import Question from '../components/Question';
import AnswerContainer from './AnswerContainer';

const QuizContainer = (props) => {

    return (
      <React.Fragment>
        <p>I'm a Quiz Container</p>
        <p>Player: {props.playerName}</p>
        <p>Current Question: {props.currentQuestion}</p>
        <Question/>
        <AnswerContainer/>
      </React.Fragment>
    )

}

export default QuizContainer;
