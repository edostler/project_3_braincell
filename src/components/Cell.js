import React from 'react';
import './Cell.css';

const Cell = (props) => {

  var figureStyle = {
    // outline: "3px solid black"
    backgroundColor: "#FF9000"
  };

  if((parseInt(props.position, 10) === props.currentCell + 1) && props.gameStatus > 0) {
    return (
      <article id={props.difficulty} className="box">
        <div id="inner" className={props.cellImages[parseInt(props.position - 1, 10)]}>
          <figure style={figureStyle} className="unanswered"></figure>
          <figure className="answered">{props.position}</figure>
        </div>
      </article>
    )
  }
  else {
    return (
      <article id={props.difficulty} className="box">
        <div id="inner" className={props.cellImages[parseInt(props.position - 1, 10)]}>
          <figure className="unanswered"></figure>
          <figure className="answered">{props.position}</figure>
        </div>
      </article>
    )
  }

}

export default Cell;
