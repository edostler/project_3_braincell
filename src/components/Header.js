import React from 'react';
import './Header.css';

const Header = (props) =>{
  // if (!props.playerName){
  //   return "Welcome to BrainCell!!"
  // }
  return (
      <React.Fragment>
        {/* <h1>Hello {props.playerName} welcome to BrainCell!</h1> */}
        {/* <p>You have earned {props.currentPoints} points, well done!!</p> */}
        <h1 className="header-title">Hello, welcome to BrainCell!</h1>
        <img className="header-logo" src="BrainCell_Framed.png" alt=""/>
        <p className="chart-status">Show Chart Status: {props.showChart}</p>
        <img className="chart-icon" src="chart-icon.png" alt=""/>
      </React.Fragment>
    );
  };

export default Header;
