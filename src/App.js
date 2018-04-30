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
      showChart: -2
    }
    this.handleChartClick = this.handleChartClick.bind(this);
  }

  // This callback enables us to toggle the z-index of the ChartContainer
  // so that is visible/invisible to the user - after clicking the chart icon
  // in the header:
  handleChartClick(){
    console.log("Player clicked chart icon..");
    if(this.state.showChart === -2){
      this.setState({
        showChart: 2
      });
    }else{
      this.setState({
        showChart: -2
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header
          showChart={this.state.showChart}
          handleChartClick={this.handleChartClick}
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
