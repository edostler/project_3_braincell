import React from 'react';
import './End.css';

const End = (props) => {

  if(props.currentCell === 20) {
    return (
      <div className="end">
        <div className="end-textbox">
        <p className="end-text">Congratulations, you win!</p>
        <p className="end-result-points">{props.playerResults.result.points} Points</p>
        <p className="end-result-percentage">{Math.round(props.playerResults.result.totalCorrectPercentage)}% of questions answered correctly</p>
        <p className="end-result-favourite">Your favourite category was {props.playerResults.result.favouriteCategory}!</p>
        </div>
        <div
          onClick={props.handleEndClick}
          className="end-button">
          Continue
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="end">
        <div className="end-textbox">
        <p className="end-text">Out of questions, better luck next time!</p>
        <p className="end-result-points">{props.playerResults.result.points} Points</p>
        <p className="end-result-percentage">{Math.round(props.playerResults.result.totalCorrectPercentage)}% of questions answered correctly</p>
        <p className="end-result-favourite">Your favourite category was {props.playerResults.result.favouriteCategory}!</p>
        </div>
        <div
          onClick={props.handleEndClick}
          className="end-button">
          Continue
        </div>
      </div>
    )
  }


}

export default End;
