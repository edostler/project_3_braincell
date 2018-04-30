import React from 'react';
import './ChartContainer.css';

const ChartContainer = (props) => {

    return (
      <React.Fragment>
        <div className="chart-container" style={{zIndex: props.showChart}}>
          <p>I'm a Chart Container</p>
        </div>
      </React.Fragment>
    )

}

export default ChartContainer;
