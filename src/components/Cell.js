import React from 'react';
import './Cell.css';

const Cell = (props) => {

  var figureStyle = {
    outline: "2px solid black"
  };

  if((parseInt(props.position, 10) === props.currentCell + 1) && props.gameStatus > 0) {
    return (
      <article id={props.difficulty} className="box">
        <div id="inner" className={props.cellImages[parseInt(props.position - 1, 10)]}>
          <figure style={figureStyle} className="unanswered">Cell {props.position}</figure>
          <figure className="answered">Cell {props.position}</figure>
        </div>
      </article>
    )
  }
  else {
    return (
      <article id={props.difficulty} className="box">
        <div id="inner" className={props.cellImages[parseInt(props.position - 1, 10)]}>
          <figure className="unanswered">Cell {props.position}</figure>
          <figure className="answered">Cell {props.position}</figure>
        </div>
      </article>
    )
  }

}

export default Cell;
