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
    };
    // this.loadJokes = this.loadJokes.bind(this);
    // this.handleCategorySelected = this.handleCategorySelected.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  // difficulty = easy, medium, hard
  //
  // type = multiple
  //
  // https://opentdb.com/api.php?amount=50&category=9&difficulty=medium&type=multiple

  // const jokeList = this.props.jokes.map((joke, index) => {
  //   return(
  //     <Joke key={index} joke={joke.joke}></Joke>
  //   )
  // })

  componentDidMount(){
// debugger;
// loop thru this.state.categories
    const gameCategories = this.state.categories.map((category, index) => {
// where state is 1
      if (this.state.categories[index].state === 1){
        // console.log(this.state.categories[index].name);
// use id (this.state.categories[index].id)
// loop thru for each difficulty
        const gameDifficulty = this.state.difficulties.map(difficulty => {
          // console.log("difficult:", difficulty);
  // fetch from API
          let url = "https://opentdb.com/api.php?amount=10&category=" +
            this.state.categories[index].id +
            "&difficulty=" +
            difficulty +
            "&type=multiple";
            // console.log(url);
            fetch(url)
// write content to state
            .then(response => response.json())
            .then(json => this.setState({questions:json.results}))
            // console.log(this.state.questions);
            // this.setState({allQuestions: this.state.allQuestions + this.state.questions});
            // console.log(this.state.allQuestions);
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
