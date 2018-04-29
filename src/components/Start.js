import React from 'react';
import './Start.css';

const Start = (props) => {

  return (
    <form onSubmit={props.handlePlayerNameSubmit}>
    <p>I'm a Start</p>
    <input
      type="text"
      onKeyUp={props.handlePlayerNameKeyUp}
      placeholder="Enter your name"
    />
    <input type="submit" name="submit" value="Start Game" />
  </form>
  )

}

export default Start;
