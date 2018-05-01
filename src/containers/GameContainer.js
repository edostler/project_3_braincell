import React, { Component } from 'react';
import './GameContainer.css';
import CellContainer from './CellContainer';
import MiddleContainer from './MiddleContainer';

class GameContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      // categoryIndices: [],
      questions: [],
      playerName: null,
      currentCell: 0,
      currentPoints: 0,
      gameStatus: 0,
      // gameStatus: 0 = Start, 1 = Choose Category, 2 = In Play, 3 = End
      difficulties: ["easy", "medium", "hard"],

      allCategories: [
        {id: 9, name: "General Knowledge", state: 1},
        {id: 17, name: "Science & Nature", state: 1},
        {id: 20, name: "Mythology", state: 1},
        {id: 21, name: "Sports", state: 1},
        {id: 22, name: "Geography", state: 1},
        {id: 23, name: "History", state: 1},
        {id: 24, name: "Politics", state: 1},
        {id: 25, name: "Art", state: 1},
        {id: 27, name: "Animals", state: 1}
      ],

      playerCategories: [
        {id: 9, name: "General Knowledge", state: 1},
        {id: 17, name: "Science & Nature", state: 1},
        {id: 20, name: "Mythology", state: 1},
        {id: 21, name: "Sports", state: 1},
        {id: 22, name: "Geography", state: 1},
        {id: 23, name: "History", state: 1},
        {id: 24, name: "Politics", state: 1},
        {id: 25, name: "Art", state: 1},
        {id: 27, name: "Animals", state: 1}
      ],

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

      currentDifficulty: "easy",
      currentDifficultyValue: "1"
    }
    this.handleMove = this.handleMove.bind(this);
    this.handlePlayerNameKeyUp = this.handlePlayerNameKeyUp.bind(this);
    this.handlePlayerNameSubmit = this.handlePlayerNameSubmit.bind(this);
    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.handleCategoryRandomise = this.handleCategoryRandomise.bind(this);
    this.handleResult = this.handleResult.bind(this);
    this.checkIncrementDiffculty = this.checkIncrementDiffculty.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
    this.sampleQuestion = this.sampleQuestion.bind(this);
  }

  async componentDidMount(){
    let defaultQuestionCount = 20;
    this.state.allCategories.map((category, index) => {
      if (this.state.allCategories[index].state === 1){
        // this.state.categoryIndices.push({index: index, name: category.name})
        let allCategoryQuestions = [];

        this.getQuestionCount(category.id).then(qCount => {
          this.state.difficulties.map(difficulty => {
            let questionCount = 0
            switch(difficulty){
              case "easy":
              questionCount = qCount[0];
              break;
              case "medium":
              questionCount = qCount[1];
              break;
              case "hard":
              questionCount = qCount[2];
              break;
              default:
              questionCount = defaultQuestionCount
            }

            if (questionCount < defaultQuestionCount){
              defaultQuestionCount = questionCount;
            }

            let url = "https://opentdb.com/api.php?amount=" +
              defaultQuestionCount +
            "&category=" +
            this.state.allCategories[index].id +
            "&difficulty=" +
            difficulty;
            fetch(url)
            .then(response => response.json())
            .then((json) => {
              let allQuestionsByDifficulty = [];
              let questionsByDifficulty = (json.results)
              questionsByDifficulty.map(questionBD => {
                if (questionBD.type === "multiple"){
                  allQuestionsByDifficulty.push(questionBD)
                }
                return null;
              })
              allCategoryQuestions.push(allQuestionsByDifficulty)
            })
            return null;
          })
        });
        let prevQuestionsArray = this.state.questions;
        prevQuestionsArray.push(allCategoryQuestions);
        this.setState({questions: prevQuestionsArray});
      }
      return null;
    })
  }

  async getQuestionCount(catId){
    let questionCount = [];
    let questionCountArray = [];
    let questionCountUrl = "https://opentdb.com/api_count.php?category=" +
      catId;
    let response = await fetch (questionCountUrl)
    let json = await response.json()

    questionCount.push(json.category_question_count)
    questionCountArray.push(questionCount[0].total_easy_question_count);
    questionCountArray.push(questionCount[0].total_medium_question_count);
    questionCountArray.push(questionCount[0].total_hard_question_count);
    return questionCountArray;
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
    this.sampleQuestion(selectedCategory);
    this.setState({
      currentCategory: selectedCategory,
      gameStatus: 2
    });
  }

  handleCategoryRandomise(){
    const randomNumber = Math.floor(Math.random() * this.state.playerCategories.length);
    const selectedCategory = this.state.playerCategories[randomNumber];
    this.sampleQuestion(selectedCategory);
    this.setState({
      currentCategory: selectedCategory,
      gameStatus: 2
    });
  }

  findCategoryIndex(selectedCategory) {
    // loop through categoryIndices to find index of selected category
    let categoryIndex = null;
    let index = 0;
    this.state.allCategories.forEach(function(categoryGroup) {
      if (categoryGroup.name === selectedCategory.name) {
        categoryIndex = index;
      }
      index += 1;
    });
    return categoryIndex;
  }

  findDifficultyIndex(categoryIndex) {
    // loop through questions to find index of current difficulty in selected category
    let difficultyIndex = null;
    let index = 0;
    this.state.questions[categoryIndex].forEach(function(difficultyGroup) {
      if (difficultyGroup[0]) {
        if (difficultyGroup[0].difficulty === this.state.currentDifficulty) {
          difficultyIndex = index;
        }
      }
      else if (difficultyGroup[1]) {
        if (difficultyGroup[1].difficulty === this.state.currentDifficulty) {
          difficultyIndex = index;
        }
      }
      else if (difficultyGroup[2]) {
        if (difficultyGroup[2].difficulty === this.state.currentDifficulty) {
          difficultyIndex = index;
        }
      }
      index += 1;
    }.bind(this));
    return difficultyIndex;
  }

  sampleQuestion(selectedCategory) {
    const categoryIndex = this.findCategoryIndex(selectedCategory);
    const difficultyIndex = this.findDifficultyIndex(categoryIndex);
    // get length of array prior to removal of sampled question
    let difficultyArrayLength = null;
    if (this.state.questions[categoryIndex][difficultyIndex]) {
      difficultyArrayLength = this.state.questions[categoryIndex][difficultyIndex].length;
    }
    // generate random number based on length of current category and difficulty and get length of array prior to removal of sampled question
    const randomNumber = Math.floor(Math.random() * difficultyArrayLength);
    // set sampled question using categoryIndex, difficultyIndex and randomNumber
    const sampledQuestion = this.state.questions[categoryIndex][difficultyIndex][randomNumber];
    // set current question to be sampled question
    this.setState({currentQuestion: sampledQuestion});
    // remove sampled question from questions array
    const filteredDifficultyArray = this.state.questions[categoryIndex][difficultyIndex].filter(item => item !== sampledQuestion);
    let filteredQuestionArray = this.state.questions;
    filteredQuestionArray[categoryIndex][difficultyIndex] = filteredDifficultyArray;
    this.setState({questions: filteredQuestionArray});
    console.log(sampledQuestion.difficulty);
    // if sampled question was last in difficulty then remove category from playerCategories
    if (difficultyArrayLength === 1) {
      let filteredCategoryArray = this.state.playerCategories.filter(item => item !== selectedCategory);
      this.setState({playerCategories: filteredCategoryArray});
    }
  }

  handleResult(result) {
    if(result) {
      console.log("Correct!");
      const nextCell = this.state.currentCell + 1
      this.setState({
        currentCell: nextCell,
        currentPoints: this.state.currentPoints + 1,
      });
      if(this.state.currentDifficultyValue < 4) {
        this.removeCategory();
        this.checkIncrementDiffculty();
      }
      if (nextCell !== 20) {
        if (this.state.playerCategories.length === 0) {
          console.log("Out of Questions: Game Over!");
          this.setState({
            gameStatus: 3
          });
        }
        else {
          this.setState({
            gameStatus: 1
          });
        }
      }
      else {
        console.log("Conglatulations!");
        this.setState({
          gameStatus: 3
        });
      }
    }
    else {
      console.log("Incorrect!");
      if (this.state.playerCategories.length === 0) {
        console.log("Out of Questions: Game Over!");
        this.setState({
          gameStatus: 3
        });
      }
      else {
        this.setState({
          gameStatus: 1
        });
      }
    }
  }

  removeCategory(){
    this.state.playerCategories.forEach(function(category) {
      if (category === this.state.currentCategory) {
        let filteredCategoryArray = this.state.playerCategories.filter(item => item !== this.state.currentCategory);
        this.setState({playerCategories: filteredCategoryArray});
      }
    }.bind(this));
  }

  removeExhaustedHardCategories(){
    let remainingHardCategories = this.state.allCategories;
    let categoryIndex = 0;
    let flagArray = [0,0,0,0,0,0,0,0];
    this.state.questions.forEach(function(categoryGroup) {
      let hardDifficultyIndex = null;
      let index = 0;
      categoryGroup.forEach(function(difficultyGroup) {
        if (difficultyGroup[0]) {
          if (difficultyGroup[0].difficulty === "hard") {
            hardDifficultyIndex = index;
          }
        }
        index += 1;
      });
      if (hardDifficultyIndex === null) {
        flagArray[categoryIndex] = 1;
      }
      categoryIndex += 1;
    });
    let flagIndex = 0;
    let flaggedCategory = null;
    let filteredCategoryArray = null;
    flagArray.forEach(function(flag) {
      if(flag === 1) {
        flaggedCategory = this.state.allCategories[flagIndex];
        filteredCategoryArray = remainingHardCategories.filter(item => item !== flaggedCategory);
        remainingHardCategories = filteredCategoryArray;
      }
      flagIndex += 1;
    }.bind(this));
    return remainingHardCategories;
  }

  checkIncrementDiffculty() {
    if((this.state.currentCell + 1) === 5) {
      this.setState({
        currentDifficulty: "medium",
        currentDifficultyValue: 2,
        playerCategories: this.state.allCategories,
      });
    }
    else if ((this.state.currentCell + 1) === 10) {
      this.setState({
        currentDifficulty: "hard",
        currentDifficultyValue: 3,
        playerCategories: this.state.allCategories,
      });
    }
    else if ((this.state.currentCell + 1) === 15) {
      const remainingHardCategories = this.removeExhaustedHardCategories()
      this.setState({
        currentDifficultyValue: 4,
        playerCategories: remainingHardCategories,
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
            handleCategoryRandomise={this.handleCategoryRandomise}
            handleResult={this.handleResult}
            currentDifficultyValue={this.state.currentDifficultyValue}
          />
        </div>
      </React.Fragment>
    )
  }

}

export default GameContainer;
