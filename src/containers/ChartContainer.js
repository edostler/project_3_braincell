import React, { Component } from 'react';
import './ChartContainer.css';



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
      console.log("this",this.state.playerData)
    })
  }

  render(){
    return (
      <React.Fragment>
        <div className="chart-container" style={{zIndex: this.props.showChart}}>
          <p>I'm a Chart Container</p>
        </div>
      </React.Fragment>
    )
  }

}


export default ChartContainer;
