import React from 'react';
import './Cell.css';

const Cell = (props) => {

  return (
    <article id={props.difficulty} className="box">
      <div className="inner">Cell {props.position}</div>
    </article>
  )

}

export default Cell;
