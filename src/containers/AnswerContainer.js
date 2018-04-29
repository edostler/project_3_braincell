import React, { Component } from 'react';
import './AnswerContainer.css';
import Answer from '../components/Answer';

class AnswerContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      correctAnswer: [props.currentQuestion[1]],
      incorrectAnswers: [props.currentQuestion[2], props.currentQuestion[3], props.currentQuestion[4]],
      randomAnswers: []
    }
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleResult = props.handleResult;
    this.randomiseAnswers();
  }

  randomiseAnswers() {
    this.state.randomAnswers = this.state.incorrectAnswers;
    let randomNumber = Math.floor(Math.random() * 4);
    this.state.randomAnswers.splice(randomNumber,0,this.state.correctAnswer);
  }

  handleAnswer(givenAnswer) {
    if(givenAnswer === this.state.correctAnswer) {
      this.handleResult(true);
    }
    else {
      this.handleResult(false);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="answer-container">
          <p>I'm an Answer Container</p>
          <Answer
            answerIndex="one"
            answer={this.state.randomAnswers[0]}
            handleAnswer={this.handleAnswer}
          />
          <Answer
            answerIndex="two"
            answer={this.state.randomAnswers[1]}
            handleAnswer={this.handleAnswer}
          />
          <Answer
            answerIndex="three"
            answer={this.state.randomAnswers[2]}
            handleAnswer={this.handleAnswer}
          />
          <Answer
            answerIndex="four"
            answer={this.state.randomAnswers[3]}
            handleAnswer={this.handleAnswer}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default AnswerContainer;
