import React from 'react';
import './Header.css';

const Header = (props) =>{
  if (!props.playerName){
    return "Welcome to BrainCell!!"
  }
  return (
      <div>
        <h1>Hello {props.playerName} welcome to BrainCell!</h1>
        <p>You have earned {props.currentPoints} points, well done!!
        </p>
      </div>
    );
  };

export default Header;
