import React from 'react';
import './QuizContainer.css';
import Question from '../components/Question';
import AnswerContainer from './AnswerContainer';

const QuizContainer = (props) => {

    return (
      <React.Fragment>
        <div className="quiz-container">
          <p>I'm a Quiz Container</p>
          <p>Player: {props.playerName}</p>
          <Question
            currentQuestion={props.currentQuestion}/>
          <AnswerContainer
            currentQuestion={props.currentQuestion}
            handleResult={props.handleResult}
          />
        </div>
      </React.Fragment>
    )

}

export default QuizContainer;
