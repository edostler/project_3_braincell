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
      allCategories: [1,2,3,4,5,6],         // Hard coded until we have API data
      playerCategories: [1,2,3,4,5,6],      // Hard coded until we have API data
      questions: [[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]]],
      currentQuestion: [],
      currentCell: 0,
      currentPoints: 0,
      currentDifficulty: 1
    }
    this.handleMove = this.handleMove.bind(this);
  }

  handleMove(){

  }

  render(){
    return (
      <React.Fragment>
        <p>I'm a Game Container</p>
        <CellContainer/>
        <MiddleContainer
          allCategories={this.state.allCategories}
          playerCategories={this.state.playerCategories}
        />
      </React.Fragment>
    )
  }

}

export default GameContainer;
