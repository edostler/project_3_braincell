import React from 'react';
import './Header.css';

const Header = (props) => {

  return (
      <div className="header">
        <img
          className="header-logo"
          src="logo.png"
          alt=""
        />
        <h1 className="header-title">Welcome to BrainCell!</h1>
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
