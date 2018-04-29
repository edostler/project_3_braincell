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

      currentCategory: {id: 0,   name: "To be selected...",  state: 1}, // default - might want to change this later
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
    this.handlePlayerNameKeyUp = this.handlePlayerNameKeyUp.bind(this);
    this.handlePlayerNameSubmit = this.handlePlayerNameSubmit.bind(this);
    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.handleResult = this.handleResult.bind(this);
  }

  handleMove(){

  }

  // This callback is activated from Start.js,
  // when the player enters their name:
  // (1) Update the playerName to be the one that has been entered
  handlePlayerNameKeyUp(event) {
    this.setState({
      playerName: event.target.value
    });
  }

  // This callback is activated from Start.js,
  // when the player hits submit ('Go' button)
  // after entering their name:
  // (1) Set the gameStatus to 1, so that the Category component is now rendered
  handlePlayerNameSubmit(event) {
    event.preventDefault();
    this.setState({
      gameStatus: 1
    });
  }

  // This callback is activated from Category.js,
  // when the player chooses a category from the select dropdown list:
  // (1) Update the currentCategory to be the one that has been selected
  // (2) Remove that category from the player's list of available categories - TBD
  // (3) Set the gameStatus to 2, so that the QuizContainer is now rendered
  handleCategorySelect(event){
    const index = event.target.value;
    const selectedCategory = this.state.playerCategories[index];
    this.setState({
      currentCategory: selectedCategory,
      gameStatus: 2
    });
  }

  handleResult(result) {
    if(result) {
      console.log("Correct!");
      this.setState({
        currentCell: this.state.currentCell + 1,
        gameStatus: 1
      })
    }
    else {
      console.log("Incorrect!");
      this.setState({
        gameStatus: 1
      })
    }
  }

  render(){
    return (
      <React.Fragment>
        <div className="game-container">
          <p>I'm a Game Container</p>
          <p>Game Status: {this.state.gameStatus}</p>
          <p>Player Name: {this.state.playerName}</p>
          <p>Selected Category: {this.state.currentCategory.name}</p>
          <CellContainer/>
          <MiddleContainer
            gameStatus={this.state.gameStatus}
            playerName={this.state.playerName}
            playerCategories={this.state.playerCategories}
            currentQuestion={this.state.currentQuestion}
            currentPoints={this.state.currentPoints}
            handlePlayerNameKeyUp={this.handlePlayerNameKeyUp}
            handlePlayerNameSubmit={this.handlePlayerNameSubmit}
            handleCategorySelect={this.handleCategorySelect}
            handleResult={this.handleResult}
          />
        </div>
      </React.Fragment>
    )
  }

}

export default GameContainer;
