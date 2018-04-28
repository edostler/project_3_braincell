import React from 'react';
import './MiddleContainer.css';
import Start from '../components/Start';
import QuizContainer from './QuizContainer';
import CategoryContainer from './CategoryContainer';
import End from '../components/End';

const MiddleContainer = (props) => {

    if(!props.allCategories || !props.playerCategories){
      return null;
    }

    return (
      <React.Fragment>
        <p>I'm a Middle Container</p>
        <Start
          playerName={props.playerName}
        />
        <CategoryContainer
          playerName={props.playerName}
          playerCategories={props.playerCategories}
        />
        <QuizContainer
          playerName={props.playerName}
          currentQuestion={props.currentQuestion}
        />
        <End
          playerName={props.playerName}
        />
      </React.Fragment>
    )


}

export default MiddleContainer;
