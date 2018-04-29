import React from 'react';
import './Cell.css';

const Cell = (props) => {

  if(parseInt(props.position) === props.currentCell) {
    return (
      <article id={props.difficulty} className="box">
        <div className="inner">X</div>
      </article>
    )
  }
  else {
    return (
      <article id={props.difficulty} className="box">
        <div className="inner">Cell {props.position}</div>
      </article>
    )
  }

}

export default Cell;
