import React from 'react';
import './Cell.css';

const Cell = (props) => {

  return (
    <article id={props.difficulty} className="box">
      <div id="inner" className={props.cellImages[parseInt(props.position - 1, 10)]}>
        <figure className="unanswered">Cell {props.position}</figure>
        <figure className="answered">Cell {props.position}</figure>
      </div>
    </article>
  )

}

export default Cell;
