import React from 'react';
import './CellContainer.css';
import Cell from '../components/Cell';
import BlankCell from '../components/BlankCell';

const CellContainer = (props) => {

  return (
    <article className="grid">
      <div className="row">
        <Cell currentCell={props.currentCell} difficulty="easy" position="5"/>
        <Cell currentCell={props.currentCell} difficulty="medium" position="6"/>
        <Cell currentCell={props.currentCell} difficulty="medium" position="7"/>
        <Cell currentCell={props.currentCell} difficulty="medium" position="8"/>
        <Cell currentCell={props.currentCell} difficulty="medium" position="9"/>
        <Cell currentCell={props.currentCell} difficulty="medium" position="10"/>
      </div>
      <div className="row">
        <Cell currentCell={props.currentCell} difficulty="easy" position="4"/>
        <BlankCell />
        <BlankCell />
        <BlankCell />
        <BlankCell />
        <Cell currentCell={props.currentCell} difficulty="hard" position="11"/>
      </div>
      <div className="row">
        <Cell currentCell={props.currentCell} difficulty="easy" position="3"/>
        <BlankCell />
        <BlankCell />
        <BlankCell />
        <BlankCell />
        <Cell currentCell={props.currentCell} difficulty="hard" position="12"/>
      </div>
      <div className="row">
        <Cell currentCell={props.currentCell} difficulty="easy" position="2"/>
        <BlankCell />
        <BlankCell />
        <BlankCell />
        <BlankCell />
        <Cell currentCell={props.currentCell} difficulty="hard" position="13"/>
      </div>
      <div className="row">
        <Cell currentCell={props.currentCell} difficulty="easy" position="1"/>
        <BlankCell />
        <BlankCell />
        <BlankCell />
        <BlankCell />
        <Cell currentCell={props.currentCell} difficulty="hard" position="14"/>
      </div>
      <div className="row">
        <Cell currentCell={props.currentCell} difficulty="mix" position="20"/>
        <Cell currentCell={props.currentCell} difficulty="mix" position="19"/>
        <Cell currentCell={props.currentCell} difficulty="mix" position="18"/>
        <Cell currentCell={props.currentCell} difficulty="mix" position="17"/>
        <Cell currentCell={props.currentCell} difficulty="mix" position="16"/>
        <Cell currentCell={props.currentCell} difficulty="hard" position="15"/>
      </div>
    </article>
  )

}

export default CellContainer;
