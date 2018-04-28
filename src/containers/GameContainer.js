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
        {id: 25, name: "Art", state: 1},
        {id: 27, name: "Animals", state: 1}
      ],
      difficulties: ["easy", "medium", "hard"]
      // difficulties: ["easy"]
    };
    // this.loadJokes = this.loadJokes.bind(this);
    // this.handleCategorySelected = this.handleCategorySelected.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount(){
    let allQuestions = [];
    const questionCategories = this.state.categories.map((category, index) => {
      if (this.state.categories[index].state === 1){
        const questionDifficulty = this.state.difficulties.map(difficulty => {
          let url = "https://opentdb.com/api.php?amount=10&category=" +
            this.state.categories[index].id +
            "&difficulty=" +
            difficulty +
            "&type=multiple";
          fetch(url)
          .then(response => response.json())
          .then((json) => (allQuestions.push(json.results)))
        })
      }
    })
    console.log("All Questions", allQuestions);
this.setState({questions: allQuestions})
    // this.state.questions = allQuestions;
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
