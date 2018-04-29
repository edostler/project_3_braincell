import React from 'react';
import './Cell.css';

const Cell = (props) => {

  return (
    <React.Fragment>
      Cell {props.position}
    </React.Fragment>
  )

}

export default Cell;
