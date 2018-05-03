import React from 'react';
import './ChartBox.css';

import { Chart } from 'react-google-charts';


const ChartBox = (props) => {

  // Create the data points, and add to data array:
  const getData = (xValue, yValue) => {
    let dataElement = [];
    if(xValue && yValue){
      dataElement.push(xValue);
      dataElement.push(yValue);
    }
    return dataElement;
  }

  // Add elements for each player, that contain each x,y value:
  const data = props.players.map((player, index) => {
    if(props.xAxis === "Name"){
      return getData(player.name, player.result.points);
    }
    else if(props.xAxis === "Timestamp"){
      return getData(player.timestamp, player.result.points);
    }
    else {
      return [];
    }
  });

  // First element in the chart data array is the x,y axis titles
  // Subsequent elements in the chart data array are the x,y value-pairs:
  let dataArray = [[props.xAxis, props.yAxis]].concat(data);

  return (
    <div className="chart-box">
      <Chart
        chartType={props.type}
        data={dataArray}
        options={{}}
        graph_id={props.type}
        width="100%"
        height="400px"
        legend_toggle
      />
    </div>
  )

}

export default ChartBox;
