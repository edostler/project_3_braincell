import React, { Component } from 'react';
import './GameContainer.css';
import CellContainer from './CellContainer';
import MiddleContainer from './MiddleContainer';
import Header from '../components/Header.js';

class GameContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      gameStatus: 0,
      // gameStatus: 0 = Start, 1 = Choose Category, 2 = In Play, 3 = End
      playerName: null,
      allCategories: [
        {id: 9,   name: "General Knowledge",  state: 1},
        {id: 20,  name: "Mythology",          state: 1},
        {id: 21,  name: "Sports",             state: 1},
        {id: 22,  name: "Geography",          state: 1},
        {id: 23,  name: "History",            state: 1},
        {id: 27,  name: "Animals",            state: 1},
        {id: 24,  name: "Politics",           state: 1},
        {id: 25,  name: "Art",                state: 1}
      ],         // Hard coded until we have API data
      playerCategories: [
        {id: 9,   name: "General Knowledge",  state: 1},
        {id: 20,  name: "Mythology",          state: 1},
        {id: 21,  name: "Sports",             state: 1},
        {id: 22,  name: "Geography",          state: 1},
        {id: 23,  name: "History",            state: 1},
        {id: 27,  name: "Animals",            state: 1},
        {id: 24,  name: "Politics",           state: 1},
        {id: 25,  name: "Art",                state: 1}
      ],      // Hard coded until we have API data
      questions: [[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]]],
      currentQuestion: [
        "What is the colour of the sky?",
        "Blue",
        "Red",
        "Green",
        "Yellow"
      ],      // Hard coded until we have API data
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
        <Header
          playerName={this.state.playerName}
          currentPoints={this.state.currentPoints}
        />
        <CellContainer/>
        <MiddleContainer
          gameStatus={this.state.gameStatus}
          playerName={this.state.playerName}
          playerCategories={this.state.playerCategories}
          currentQuestion={this.state.currentQuestion}
          currentPoints={this.state.currentPoints}
        />
      </React.Fragment>
    )
  }

}

export default GameContainer;
