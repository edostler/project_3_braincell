import React, { Component } from 'react';
import './ChartContainer.css';
import ChartBox from '../components/ChartBox';

class ChartContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      players: []
    };
  }

  async componentDidMount(){
    let url = "http://localhost:3001/players";
    fetch(url)
    .then(response => response.json())
    .then ((json) => {
      this.setState({players: (json)})
    })
  }


  render(){
    if (!this.state.players) return null;
    return (
        <div className="chart-container" style={{zIndex: this.props.showChart}}>
          <ChartBox className="chart-box"
            players={this.state.players}
            type="ColumnChart"
            xAxis="Name"
            yAxis="Result"
          />
          <ChartBox className="chart-box"
            players={this.state.players}
            type="LineChart"
            xAxis="Timestamp"
            yAxis="Result"
          />
        </div>
    )
  }

}

export default ChartContainer;
