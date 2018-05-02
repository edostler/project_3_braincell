import React from 'react';
import './QuizContainer.css';
import Question from '../components/Question';
import AnswerContainer from './AnswerContainer';

const QuizContainer = (props) => {

    return (
      <div className="quiz-container">
        <Question
          currentQuestion={props.currentQuestion}/>
        <AnswerContainer
          currentQuestion={props.currentQuestion}
          handleResult={props.handleResult}
        />
      </div>
    )

}

export default QuizContainer;
