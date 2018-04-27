import React, { Component } from 'react';
import './AnswerContainer.css';
import Answer from '../components/Answer';

class AnswerContainer extends Component {

  render(){
    return (
      <React.Fragment>
        <p>I'm an Answer Container</p>
        <Answer/>
        <Answer/>
        <Answer/>
        <Answer/>
      </React.Fragment>
    )
  }

}

export default AnswerContainer;
