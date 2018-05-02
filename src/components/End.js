import React from 'react';
import './End.css';

const End = (props) => {

  return (
    <div className="end">
      <p className="end-text">End text based on situation</p>
      <div
        onClick={props.handleEndClick}
        className="end-button">
        Continue
      </div>
    </div>
  )

}

export default End;
