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

      questions: [[[{
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Easy Gen Knowledge",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }],[{
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Medium Gen Knowledge",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }],[{
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Hard Gen Knowledge",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }]],[[{
        "category": "Mythology",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Easy Mythology",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }],[{
        "category": "Mythology",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Medium Mythology",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }],[{
        "category": "Mythology",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Hard Mythology",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }]],[[{
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Easy Sports",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }],[{
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Medium Sports",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }],[{
        "category": "Sports",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Hard Sports",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }]],[[{
        "category": "Geography",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Easy Geography",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }],[{
        "category": "Geography",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Medium Geography",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }],[{
        "category": "Geography",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Hard Geography",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }]],[[{
        "category": "History",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Easy History",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }],[{
        "category": "History",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Medium History",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }],[{
        "category": "History",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Hard History",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }]],[[{
        "category": "Animals",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Easy Animals",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }],[{
        "category": "Animals",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Medium Animals",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }],[{
        "category": "Animals",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Hard Animals",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }]],[[{
        "category": "Politics",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Easy Politics",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }],[{
        "category": "Politics",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Medium Politics",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }],[{
        "category": "Politics",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Hard Politics",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }]],[[{
        "category": "Art",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Easy Art",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }],[{
        "category": "Art",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Medium Art",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }],[{
        "category": "Art",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Hard Art",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      }]]],

      currentCategory: {id: 0,   name: "To be selected...",  state: 1}, // default - might want to change this later

      currentQuestion: {
        "category": "",
        "type": "",
        "difficulty": "",
        "question": "What's the colour of the sky?",
        "correct_answer": "Blue",
        "incorrect_answers":[
          "Red",
          "Green",
          "Yellow"
        ]
      },      // Hard coded until we have API data

      currentCell: 0,

      currentPoints: 0,

      currentDifficulty: 1
    }
    this.handleMove = this.handleMove.bind(this);
    this.handlePlayerNameKeyUp = this.handlePlayerNameKeyUp.bind(this);
    this.handlePlayerNameSubmit = this.handlePlayerNameSubmit.bind(this);
    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.handleResult = this.handleResult.bind(this);
    this.checkIncrementDiffculty = this.checkIncrementDiffculty.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
    this.sampleQuestion = this.sampleQuestion.bind(this);
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
    this.sampleQuestion();
  }

  sampleQuestion() {
    let index = 0;
    let categoryIndex = null;
    this.state.questions.forEach(function(categoryGroup) {
      if (categoryGroup[0][0].category === this.state.currentCategory.name) {
        categoryIndex = index;
      }
      index += 1;
    }.bind(this));
    // loop through questions to find index of selected category (by checking first question.category in each)
    // find length of sub-array (based on difficulty as index)
    // generate random number based on length
    // set current question to be sampled question
    console.log(categoryIndex);
    // NOT COMPLETE - WORK IN PROGRESS
  }

  handleResult(result) {
    if(result) {
      console.log("Correct!");
      this.setState({
        currentCell: this.state.currentCell + 1,
        currentPoints: this.state.currentPoints + 1,
        gameStatus: 1
      });
      this.removeCategory();
      this.checkIncrementDiffculty();
    }
    else {
      console.log("Incorrect!");
      this.setState({
        gameStatus: 1
      })
    }
  }

  removeCategory(){
    let index = 0;
    this.state.playerCategories.forEach(function(category) {
      if (category === this.state.currentCategory) {
        this.state.playerCategories.splice(index, 1);
      }
      index += 1;
    }.bind(this));
  }

  checkIncrementDiffculty() {
    if((this.state.currentCell + 1) === 5 || (this.state.currentCell + 1) === 10 || (this.state.currentCell + 1) === 15) {
      this.setState({
        currentDifficulty: this.state.currentDifficulty + 1,
        playerCategories: this.state.allCategories
      });
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
          <CellContainer
            currentCell={this.state.currentCell}
          />
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
