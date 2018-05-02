import React, { Component } from 'react';
import './ChartContainer.css';

import { render } from 'react-dom';
import { Chart } from 'react-google-charts';


class ChartContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      playerData: []
    };
  }

  async componentDidMount(){
    let url = "http://localhost:3001/players";
    fetch(url)
    .then(response => response.json())
    .then ((json) => {
      this.setState({playerData: (json)})
      // this.state.playerData = (json)
      console.log("this",this.state.playerData)
    })
  }


  render(){
    if (!this.state.playerData) return null;
    return (
        <div className="chart-container" style={{zIndex: this.props.showChart}}>
          <p>I'm a Chart Container</p>
          <Chart
            chartType="ColumnChart"
            data={[['Name', 'Score'],
                  // [this.state.playerData[9].name, this.state.playerData[9].result],
                  // [this.state.playerData[10].name, this.state.playerData[10].result],
                  // [this.state.playerData[11].name, this.state.playerData[11].result]
                  ["Ed", 1000],
                  ["Debbie", 980],
                  ["Graeme",900],
                  ["Sarah", 800]
                ]}
            options={{}}
            graph_id="ColumnChart"
            width="100%"
            height="400px"
            legend_toggle
          />
        </div>
    )
  }

}


export default ChartContainer;
