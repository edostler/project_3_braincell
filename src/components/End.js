import React from 'react';
import './End.css';

const End = (props) => {

  return (
    <div className="end">
      <p>
        I'm an End
      </p>
      <img
        src="chart-icon.png"
        alt=""
        onClick={props.handleEndClick}
      />
    </div>
  )

}

export default End;
