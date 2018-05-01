import React from 'react';
import './Header.css';

const Header = (props) => {

  return (
      <div className="header">
        <h1 className="header-title">Welcome to BrainCell!</h1>
        <img
          className="header-logo"
          src="BrainCell_Framed.png"
          alt=""
        />
        <p className="chart-status">Show Chart Status: {props.showChart}</p>
        <img
          className="chart-icon"
          src="chart-icon.png"
          alt=""
          onClick={props.handleChartClick}
        />
      </div>
    );
  };

export default Header;
