import React, { Component } from 'react';
import './GameContainer.css';
import CellContainer from './CellContainer';
import MiddleContainer from './MiddleContainer';

class GameContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      allQuestions: [],
      questions: [],
      categories: [
        {id: 9, name: "General Knowledge", state: 1},
        {id: 17, name: "Science & Nature", state: 0},
        {id: 20, name: "Mythology", state: 0},
        {id: 21, name: "Sports", state: 0},
        {id: 22, name: "Geography", state: 0},
        {id: 23, name: "History", state: 0},
        {id: 24, name: "Politics", state: 0},
        {id: 25, name: "Art", state: 0},
        {id: 27, name: "Animals", state: 0}
      ],
      // difficulties: ["easy", "medium", "hard"]
      difficulties: ["easy"]
    };
    // this.loadJokes = this.loadJokes.bind(this);
    // this.handleCategorySelected = this.handleCategorySelected.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount(){
    let batchQuestions = [];
    // let allQuestions = [];
    const questionCategories = this.state.categories.map((category, index) => {
      if (this.state.categories[index].state === 1){
        const questionDifficulty = this.state.difficulties.map(difficulty => {
          let url = "https://opentdb.com/api.php?amount=10&category=" +
            this.state.categories[index].id +
            "&difficulty=" +
            difficulty +
            "&type=multiple";
// console.log(this.state);
          fetch(url)
// write content to state
          .then(response => response.json())
          // .then(json => this.setState({questions:json.results}))
          // .then(json => this.setState(() => {
          //   return {questions: json.results};
          // }))
          // .then((json) => (batchQuestions.push(json.results)))
          .then((json) => (batchQuestions => (json.results)))
          // debugger;
console.log(batchQuestions);


          // let latestQuestions = this.state.questions;
          // console.log("latestQuestions", this.state.questions, latestQuestions);
          // let allQuestions = this.state.allQuestions;
          // allQuestions += latestQuestions;
          // debugger;
          // this.setState({allQuestions: allQuestions});
// console.log(this.state);
        })
      }
    })
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
