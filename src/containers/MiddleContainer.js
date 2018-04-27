import React, { Component } from 'react';
import './MiddleContainer.css';
import Start from '../components/Start';
import QuizContainer from './QuizContainer';
import CategoryContainer from './CategoryContainer';
import End from '../components/End';

class MiddleContainer extends Component {

  render(){
    return (
      <React.Fragment>
        <p>I'm a Middle Container</p>
        <Start/>
        <CategoryContainer />
        <QuizContainer/>
        <End/>
      </React.Fragment>
    )
  }

}

export default MiddleContainer;
