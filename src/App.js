import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import GameContainer from './containers/GameContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <GameContainer/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
