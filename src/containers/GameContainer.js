import React, { Component } from 'react';
import './GameContainer.css';
import CellContainer from './CellContainer';
import MiddleContainer from './MiddleContainer';

class GameContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions: [],
      categories: [
        {id: 9, name: "General Knowledge", state: 1},
        {id: 17, name: "Science & Nature", state: 1},
        {id: 20, name: "Mythology", state: 1},
        {id: 21, name: "Sports", state: 1},
        {id: 22, name: "Geography", state: 1},
        {id: 23, name: "History", state: 1},
        {id: 24, name: "Politics", state: 1},
        {id: 25, name: "Art", state: 0},
        {id: 27, name: "Animals", state: 1}
      ],
      difficulties: ["easy", "medium", "hard"]
      // difficulties: ["easy"]
    };
    this.getQuestionCount = this.getQuestionCount.bind(this);
    // this.handleCategorySelected = this.handleCategorySelected.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount(){
    let allQuestions = [];
    let defaultQuestionCount = 5
    const questionCategories = this.state.categories.map((category, index) => {
      if (this.state.categories[index].state === 1){
        let easyQCount = 0;
        let medQCount = 0;
        let hardQCount = 0;
        // console.log(category.id);
        // this.getQuestionCount(category.id);
        // console.log("Easy:", easyQCount, "Medium:", medQCount, "Hard:", hardQCount);
        // console.log(easyQCount);
        const questionDifficulty = this.state.difficulties.map(difficulty => {
          let url = "https://opentdb.com/api.php?amount=" +
            defaultQuestionCount +
            "&category=" +
            this.state.categories[index].id +
            "&difficulty=" +
            difficulty +
            "&type=multiple";
          fetch(url)
          .then(response => response.json())
          .then((json) => (allQuestions.push(json.results)))
          // .then(blah =>
          // this.setState({questions: allQuestions}));
        })
      }
    })
    console.log("All Questions", allQuestions);
    // this.setState({questions: allQuestions})
    this.state.questions = allQuestions;
    console.log("this State", this.state.questions);
  }

  getQuestionCount(catId, easyQuestionCount, mediumQuestionCount, hardQuestionCount){
    // console.log("cat id: ", catId, " diff: ", diff);
    let questionCount = [];
    let questionCountUrl = "https://opentdb.com/api_count.php?category=" +
      catId;
    // console.log(questionCountUrl);
    fetch (questionCountUrl)
    .then(response => response.json())
    .then((json) => {
      questionCount.push(json.category_question_count)
      // console.log("Question Count:", questionCount[0]);
      easyQuestionCount = questionCount[0].total_easy_question_count;
      mediumQuestionCount = questionCount[0].total_medium_question_count;
      hardQuestionCount = questionCount[0].total_hard_question_count;
      console.log("Cat:", catId, "Easy:", easyQuestionCount, "Medium:", mediumQuestionCount, "Hard:", hardQuestionCount);
      return (easyQuestionCount, mediumQuestionCount, hardQuestionCount)
    });
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
