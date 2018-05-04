import React, { Component } from 'react';
import './GameContainer.css';
import CellContainer from './CellContainer';
import MiddleContainer from './MiddleContainer';

const Request = require('../services/requests.js');
const requestPlayers = new Request('http://localhost:3001/players');

const createRequestComplete = function(response){
  // This callback is activated once the POST is complete:
  console.log(response);
}

class GameContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      questions: [],
      currentQuestion: {},
      currentCell: 0,
      answeredQuestions: [
        {name: "General Knowledge", answered: 0, correct: 0},
        {name: "Science & Nature", answered: 0, correct: 0},
        {name: "Mythology", answered: 0, correct: 0},
        {name: "Sports", answered: 0, correct: 0},
        {name: "Geography", answered: 0, correct: 0},
        {name: "History", answered: 0, correct: 0},
        {name: "Politics", answered: 0, correct: 0},
        {name: "Art", answered: 0, correct: 0},
        {name: "Animals", answered: 0, correct: 0}
      ],
      playerResults: {
        name: "UNKNOWN",
        result: {
          points: 0,
          totalCorrectPercentage: null,
          categoryCorrectPercentage: [null, null, null, null, null, null, null, null, null],
          categoryCounter: [0,0,0,0,0,0,0,0,0],
          favouriteCategory: null
        }
      },
      // gameStatus: 0 = Start, 1 = Choose Category, 2 = In Play, 3 = End
      gameStatus: 0,
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

      currentCategory: {id: 0, name: "To be selected...", state: 1},
      currentDifficulty: "easy",
      currentDifficultyValue: "1",
      cellImages: [
        "easy", "easy", "easy", "easy", "easy",
        "medium", "medium", "medium", "medium", "medium",
        "hard", "hard", "hard", "hard", "hard",
        "mix", "mix", "mix", "mix", "mix"
      ],
      lastResult: null,
      correctModal: "none",
      incorrectModal: "none"
    }
    this.handlePlayerNameKeyUp = this.handlePlayerNameKeyUp.bind(this);
    this.handlePlayerNameSubmit = this.handlePlayerNameSubmit.bind(this);
    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.handleCategoryRandomise = this.handleCategoryRandomise.bind(this);
    this.handleResult = this.handleResult.bind(this);
    this.checkIncrementDiffculty = this.checkIncrementDiffculty.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
    this.sampleQuestion = this.sampleQuestion.bind(this);
    this.handleEndClick = this.handleEndClick.bind(this);
    this.handleEndGame = this.handleEndGame.bind(this);
    this.handleCorrectModalOpen = this.handleCorrectModalOpen.bind(this);
    this.handleIncorrectModalOpen = this.handleIncorrectModalOpen.bind(this);
    this.handleCorrectModalClose = this.handleCorrectModalClose.bind(this);
    this.handleIncorrectModalClose = this.handleIncorrectModalClose.bind(this);
    this.updateFavouriteCategory = this.updateFavouriteCategory.bind(this);
  }


  // API FUNCTIONS:
  async componentDidMount(){
    let defaultQuestionCount = 20;
    this.state.allCategories.map((category, index) => {
      if (this.state.allCategories[index].state === 1){
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
              "&category=" + this.state.allCategories[index].id +
              "&difficulty=" + difficulty;
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
    this.setState({playerCategories: this.state.allCategories})
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


  // GAME STATE 0 (START) FUNCTIONS:
  handlePlayerNameKeyUp(event) {
    // This callback is activated from Start.js,
    // when the player enters their name:
    // (1) Update the playerName to be the one that has been entered
    this.setState({
      playerResults: {
        name: event.target.value,
        result: {
          points: this.state.playerResults.result.points,
          totalCorrectPercentage: this.state.playerResults.result.totalCorrectPercentage,
          categoryCorrectPercentage: this.state.playerResults.result.categoryCorrectPercentage,
          categoryCounter: this.state.playerResults.result.categoryCounter
        }
      }
    });
  }

  handlePlayerNameSubmit(event) {
    // This callback is activated from Start.js,
    // when the player hits submit ('Go' button)
    // after entering their name:
    // (1) Set the gameStatus to 1, so that the Category component is now rendered
    event.preventDefault();
    this.setState({
      gameStatus: 1
    });
  }


  // GAME STATE 1 (CHOOSE CATEGORY -> SAMPLE QUESTION) FUNCTIONS:
  handleCategorySelect(event){
    // This callback is activated from Category.js,
    // when the player chooses a category from the select dropdown list:
    // (1) Update the currentCategory to be the one that has been selected
    // (2) Remove that category from the player's list of available categories - TBD
    // (3) Set the gameStatus to 2, so that the QuizContainer is now rendered
    const index = event.target.value;

    // UNFINISHED CODE FOR CHANGING DROPDOWN TO CLICKABLE TILES
    // const categoryName = event.target.value;
    // const allCategories = this.state.playerCategories;
    // let index = 0;
    // let categoryIndex
    // allCategories.forEach(function(categoryGroup) {
    //   if(categoryGroup.name === categoryName) {
    //     categoryIndex = index;
    //   }
    //   index += 1;
    // })
    // UNFINISHED CODE FOR CHANGING DROPDOWN TO CLICKABLE TILES

    this.useSelectedCategory(index);
  }

  handleCategoryRandomise(){
    const randomNumber = Math.floor(Math.random() * this.state.playerCategories.length);
    this.useSelectedCategory(randomNumber);
  }

  useSelectedCategory(index) {
    const selectedCategory = this.state.playerCategories[index];
    this.sampleQuestion(selectedCategory);
    this.setState({
      currentCategory: selectedCategory,
      gameStatus: 2
    });
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
    // if sampled question was last in difficulty then remove category from playerCategories
    if (difficultyArrayLength === 1) {
      let filteredCategoryArray = this.state.playerCategories.filter(item => item !== selectedCategory);
      this.setState({playerCategories: filteredCategoryArray});
    }
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


  // GAME STATE 2 (IN PLAY) FUNCTIONS:
  handleResult(result) {
    let currentResults = this.state.playerResults;
    let newAnsweredQuestions = this.state.answeredQuestions;
    const currentCategory = this.state.currentCategory;
    const categoryIndex = this.findCategoryIndex(currentCategory);
    newAnsweredQuestions[categoryIndex].answered += 1;
    this.setState({
      answeredQuestions: newAnsweredQuestions
    })
    const newCategoryCounter = this.updateCategoryCounter(newAnsweredQuestions)
    currentResults.result.categoryCounter = newCategoryCounter;
    const newFavouriteCategory = this.updateFavouriteCategory(newCategoryCounter);
    currentResults.result.favouriteCategory = newFavouriteCategory;
    if(result) {
      this.setState({
        lastResult: "Correct!"
      })
      const thisCell = this.state.currentCell;
      const nextCell = thisCell + 1;
      const currentDifficultyValue = this.state.currentDifficultyValue
      let currentCellImages = this.state.cellImages;
      currentCellImages[thisCell] = "complete";

      newAnsweredQuestions[categoryIndex].correct += 1;

      const newTotalPercentage = this.calculateTotalPercentage(newAnsweredQuestions);

      const newCategoryPercentages = this.calculateCategoryPercentages(newAnsweredQuestions);

      currentResults.result.points += (20 * currentDifficultyValue);
      currentResults.result.totalCorrectPercentage = newTotalPercentage;
      currentResults.result.categoryCorrectPercentage = newCategoryPercentages;

      this.setState({
        cellImages: currentCellImages,
        currentCell: nextCell,
        playerResults: currentResults,
        answeredQuestions: newAnsweredQuestions
      });
      if(currentDifficultyValue < 4) {
        this.removeCategory();
        this.checkIncrementDiffculty();
      }
      if (nextCell !== 20) {
        if (this.state.playerCategories.length === 0) {
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
        this.setState({
          gameStatus: 3
        });
      }
      this.handleCorrectModalOpen();
    }
    else {
      this.setState({
        lastResult: "Incorrect!"
      })
      const newTotalPercentage = this.calculateTotalPercentage(newAnsweredQuestions);

      const newCategoryPercentages = this.calculateCategoryPercentages(newAnsweredQuestions);

      currentResults.result.points -= 20;
      currentResults.result.totalCorrectPercentage = newTotalPercentage;
      currentResults.result.categoryCorrectPercentage = newCategoryPercentages;

      this.setState({
        playerResults: currentResults
      });
      if (this.state.playerCategories.length === 0) {
        this.setState({
          gameStatus: 3
        });
      }
      else {
        this.setState({
          gameStatus: 1
        });
      }
      this.handleIncorrectModalOpen();
    }
  }

  updateCategoryCounter(currentAnsweredQuestions) {
    let newCategoryCounter = [];
    let index = 0;
    currentAnsweredQuestions.forEach(function(categoryGroup) {
      newCategoryCounter[index] = categoryGroup.answered;
      index += 1;
    })
    return newCategoryCounter;
  }

  updateFavouriteCategory(newCategoryCounter) {
    const currentMaximum = Math.max(...newCategoryCounter);
    let maxCategoryIndex = null;
    let index = 0;
    newCategoryCounter.forEach(function(categoryGroup) {
      if(categoryGroup === currentMaximum) {
        maxCategoryIndex = index;
      }
      index += 1;
    });
    const newFavouriteCategory = this.state.allCategories[maxCategoryIndex].name;
    return newFavouriteCategory;
  }

  calculateTotalPercentage(currentAnsweredQuestions) {
    let totalCorrect = 0;
    let totalAnswered = 0;
    currentAnsweredQuestions.forEach(function(categoryGroup) {
      totalCorrect += categoryGroup.correct;
      totalAnswered += categoryGroup.answered;
    })
    let totalPercentage = (totalCorrect/totalAnswered)*100;
    return totalPercentage;
  }

  calculateCategoryPercentages(currentAnsweredQuestions) {
    let newCategoryPercentages = [];
    let index = 0;
    currentAnsweredQuestions.forEach(function(categoryGroup) {
      newCategoryPercentages[index] = (categoryGroup.correct / categoryGroup.answered)*100;
      index += 1;
    })
    return newCategoryPercentages;
  }

  removeCategory(){
    this.state.playerCategories.forEach(function(category) {
      if (category === this.state.currentCategory) {
        let filteredCategoryArray = this.state.playerCategories.filter(item => item !== this.state.currentCategory);
        this.setState({playerCategories: filteredCategoryArray});
      }
    }.bind(this));
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

  removeExhaustedHardCategories(){
    let remainingHardCategories = this.state.allCategories;
    let categoryIndex = 0;
    let flagArray = [];
    this.state.allCategories.forEach(function(categoryGroup) {
      flagArray.push(0);
    });
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

  handleCorrectModalOpen() {
    this.setState({
      correctModal: "block"
    })
    window.setTimeout(this.handleCorrectModalClose, 1000);
  }

  handleCorrectModalClose() {
    this.setState({
      correctModal: "none"
    })
  }

  handleIncorrectModalOpen() {
    this.setState({
      incorrectModal: "block"
    })
    window.setTimeout(this.handleIncorrectModalClose, 1000);
  }

  handleIncorrectModalClose() {
    this.setState({
      incorrectModal: "none"
    })
  }


  // GAME STATE 3 (END) FUNCTIONS:
  handleEndClick() {
    // On clicking an icon in the End.js component:
    // Post the playerResults object to the Mongo database
    // So that it is available for generating stats/charts/leader-board
    requestPlayers.post(createRequestComplete, this.state.playerResults);
    window.location.reload()
    // this.setState({
    //   gameStatus: 0
    // });
  }


  // DEV FUNCTIONS:
  handleEndGame() {
    this.setState({
      gameStatus: 3
    });
  }


  render(){
    return (
      <div className="game-container">
        <CellContainer
          gameStatus={this.state.gameStatus}
          currentCell={this.state.currentCell}
          cellImages={this.state.cellImages}
        />
        <MiddleContainer
          gameStatus={this.state.gameStatus}
          // START PROPS & FUNCTIONS
          playerName={this.state.playerName}
          handlePlayerNameKeyUp={this.handlePlayerNameKeyUp}
          handlePlayerNameSubmit={this.handlePlayerNameSubmit}
          // CATEGORY PROPS & FUNCTIONS
          playerCategories={this.state.playerCategories}
          currentDifficultyValue={this.state.currentDifficultyValue}
          handleCategorySelect={this.handleCategorySelect}
          handleCategoryRandomise={this.handleCategoryRandomise}
          // QUIZ PROPS & FUNCTIONS
          currentQuestion={this.state.currentQuestion}
          handleResult={this.handleResult}
          // END PROPS & FUNCTIONS
          playerResults={this.state.playerResults}
          currentCell={this.state.currentCell}
          handleEndClick={this.handleEndClick}
        />
        {/* MODAL DISPLAY */}
        <div style={{display: this.state.correctModal}} id="myCorrectModal" className="correct-modal">
          <div className="correct-modal-content">
            <p className="modal">{this.state.lastResult}</p>
            <p className="modal">Total Points: {this.state.playerResults.result.points}</p>
          </div>
        </div>
        <div style={{display: this.state.incorrectModal}} id="myIncorrectModal" className="incorrect-modal">
          <div className="incorrect-modal-content">
            <p className="modal">{this.state.lastResult}</p>
            <p className="modal">Total Points: {this.state.playerResults.result.points}</p>
          </div>
        </div>
        {/* DEV MOVE TO END GAME BUTTON
        <button onClick={this.handleEndGame}>End</button> */}
      </div>
    )
  }

}

export default GameContainer;
