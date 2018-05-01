import React from 'react';
import './Start.css';

const Start = (props) => {

  return (
    <div className="start">
      <form className="submit-name-form" onSubmit={props.handlePlayerNameSubmit}>
        <input
          className="name-input"
          type="text"
          onKeyUp={props.handlePlayerNameKeyUp}
          placeholder="Enter your name"
        />
        <input className="submit-input" type="submit" name="submit" value="Let's Play!" />
      </form>
    </div>
  )

}

export default Start;
