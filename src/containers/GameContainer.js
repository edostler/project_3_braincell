import React, { Component } from 'react';
import './GameContainer.css';
import CellContainer from './CellContainer';
import MiddleContainer from './MiddleContainer';

class GameContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      gameStatus: 0,
      // gameStatus: 0 = Start, 1 = Choose Category, 2 = In Play, 3 = End
      playerName: null,
      allCategories: [],
      playerCategories: [],
      questions: [[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]]],
      currentQuestion: [],
      currentCell: 0,
      currentPoints: 0,
      currentDifficulty: 1
    }
    this.handleMove = this.handleMove.bind(this);
  }

  render(){
    return (
      <React.Fragment>
        <p>I'm a Game Container</p>
        <CellContainer/>
        <MiddleContainer/>
      </React.Fragment>
    )
  }

}

export default GameContainer;
