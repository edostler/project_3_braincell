import React, { Component } from 'react';
import './App.css';
import GameContainer from './containers/GameContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GameContainer/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
