import React, { Component } from 'react';
import './App.css';
import GameContainer from './containers/GameContainer';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header
          // playerName={this.state.playerName}
          // currentPoints={this.state.currentPoints}
        />
        <GameContainer/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
