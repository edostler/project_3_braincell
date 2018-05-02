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

    if(props.gameStatus === 0) {
      return (
        <div className="middle-container">
          <Start
            playerName={props.playerName}
            handlePlayerNameKeyUp={props.handlePlayerNameKeyUp}
            handlePlayerNameSubmit={props.handlePlayerNameSubmit}
          />
        </div>
      )
    }
    else if(props.gameStatus === 1) {
      return (
        <div className="middle-container">
          <Category
            playerName={props.playerName}
            playerCategories={props.playerCategories}
            handleCategorySelect={props.handleCategorySelect}
            handleCategoryRandomise={props.handleCategoryRandomise}
            currentDifficultyValue={props.currentDifficultyValue}
          />
        </div>
      )
    }
    else if(props.gameStatus === 2) {
      return (
        <div className="middle-container">
          <QuizContainer
            currentQuestion={props.currentQuestion}
            handleResult={props.handleResult}
          />
        </div>
      )
    }
    else {
      return (
        <div className="middle-container">
          <End
            playerName={props.playerName}
            currentPoints={props.currentPoints}
            handleEndClick={props.handleEndClick}
          />
        </div>
      )
    }

}

export default MiddleContainer;
