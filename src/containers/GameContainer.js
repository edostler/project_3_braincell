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
        {id: 17, name: "Science & Nature", state: 1}
        {id: 20, name: "Mythology", state: 1}
        {id: 21, name: "Sports", state: 1}
        {id: 22, name: "Geography", state: 1}
        {id: 23, name: "History", state: 1}
        {id: 24, name: "Politics", state: 1}
        {id: 25, name: "Art", state: 1}
        {id: 27, name: "Animals", state: 1}
      ]
    };
    // this.loadJokes = this.loadJokes.bind(this);
    // this.handleCategorySelected = this.handleCategorySelected.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount(){
    fetch("http://api.icndb.com/categories")
    .then(response => response.json())
    .then(json => this.setState({categories:json.value}))
    .then(this.loadRandomJoke(null, null))
    this.loadJokes("all")
  }

  loadRandomJoke(newFirstName, newLastName){
    let url;
    if(!newFirstName || !newLastName){
      url = "http://api.icndb.com/jokes/random/"
    } else {
      url = "http://api.icndb.com/jokes/random/?firstName=" + newFirstName + "&lastName=" + newLastName;
    }
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({randomJoke: json.value}))
  }

  loadJokes(category, newFirstName, newLastName){
    let url;
    if(!newFirstName || !newLastName){
      switch(category){
        case "all":
        url = "http://api.icndb.com/jokes";
        break;
        default:
        url = "http://api.icndb.com/jokes?limitTo=[" + category + "]";
      }
    } else {
      switch(category){
        case "all":
        url = "http://api.icndb.com/jokes?firstName=" + newFirstName + "&lastName=" + newLastName;
        break;
        default:
        url = "http://api.icndb.com/jokes?limitTo=[" + category + "]&firstName=" + newFirstName + "&lastName=" + newLastName;
      }
    }
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({jokes: json.value}));
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
