import React from 'react';
import './CellContainer.css';
import Cell from '../components/Cell';

const CellContainer = (props) => {

  return (
    <article className="grid">
      <div className="row">
        <Cell currentCell={props.currentCell} difficulty="easy" position="1"/>
        <Cell currentCell={props.currentCell} difficulty="easy" position="2"/>
        <Cell currentCell={props.currentCell} difficulty="easy" position="3"/>
        <Cell currentCell={props.currentCell} difficulty="easy" position="4"/>
        <Cell currentCell={props.currentCell} difficulty="easy" position="5"/>
      </div>
      <div className="row">
        <Cell currentCell={props.currentCell} difficulty="medium" position="6"/>
        <Cell currentCell={props.currentCell} difficulty="medium" position="7"/>
        <Cell currentCell={props.currentCell} difficulty="medium" position="8"/>
        <Cell currentCell={props.currentCell} difficulty="medium" position="9"/>
        <Cell currentCell={props.currentCell} difficulty="medium" position="10"/>
      </div>
      <div className="row">
        <Cell currentCell={props.currentCell} difficulty="hard" position="11"/>
        <Cell currentCell={props.currentCell} difficulty="hard" position="12"/>
        <Cell currentCell={props.currentCell} difficulty="hard" position="13"/>
        <Cell currentCell={props.currentCell} difficulty="hard" position="14"/>
        <Cell currentCell={props.currentCell} difficulty="hard" position="15"/>
      </div>
      <div className="row">
        <Cell currentCell={props.currentCell} difficulty="mix" position="16"/>
        <Cell currentCell={props.currentCell} difficulty="mix" position="17"/>
        <Cell currentCell={props.currentCell} difficulty="mix" position="18"/>
        <Cell currentCell={props.currentCell} difficulty="mix" position="19"/>
        <Cell currentCell={props.currentCell} difficulty="mix" position="20"/>
      </div>
    </article>
  )

}

export default CellContainer;
