import React from 'react';
import './MiddleContainer.css';
import Start from '../components/Start';
import Category from '../components/Category';
import QuizContainer from './QuizContainer';
import End from '../components/End';

const MiddleContainer = (props) => {

    // If any of the props are not yet populated (async stuff) then return null;
    if(!props.playerCategories){
      return null;
    }

    return (
      <React.Fragment>
        <p>I'm a Middle Container</p>
        <Start
          playerName={props.playerName}
          gameStatus={props.gameStatus}
          handlePlayerNameKeyUp={props.handlePlayerNameKeyUp}
          handlePlayerNameSubmit={props.handlePlayerNameSubmit}
        />
        <Category
          playerName={props.playerName}
          playerCategories={props.playerCategories}
          gameStatus={props.gameStatus}
        />
        <QuizContainer
          playerName={props.playerName}
          currentQuestion={props.currentQuestion}
        />
        <End
          playerName={props.playerName}
          currentPoints={props.currentPoints}
        />
      </React.Fragment>
    )


}

export default MiddleContainer;
