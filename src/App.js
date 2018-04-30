import React, { Component } from 'react';
import './App.css';
import GameContainer from './containers/GameContainer';
import ChartContainer from './containers/ChartContainer';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      showChart: 0
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header
          showChart={this.state.showChart}
          // playerName={this.state.playerName}
          // currentPoints={this.state.currentPoints}
        />
        <ChartContainer
          showChart={this.state.showChart}
        />
        <GameContainer/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
