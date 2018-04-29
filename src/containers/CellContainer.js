import React, { Component } from 'react';
import './CellContainer.css';
import Cell from '../components/Cell';

class CellContainer extends Component {

  render(){
    return (
      <article className="grid">
        <div className="row">
          <Cell difficulty="easy" position="1"/>
          <Cell difficulty="easy" position="2"/>
          <Cell difficulty="easy" position="3"/>
          <Cell difficulty="easy" position="4"/>
          <Cell difficulty="easy" position="5"/>
        </div>
        <div className="row">
          <Cell difficulty="medium" position="6"/>
          <Cell difficulty="medium" position="7"/>
          <Cell difficulty="medium" position="8"/>
          <Cell difficulty="medium" position="9"/>
          <Cell difficulty="medium" position="10"/>
        </div>
        <div className="row">
          <Cell difficulty="hard" position="11"/>
          <Cell difficulty="hard" position="12"/>
          <Cell difficulty="hard" position="13"/>
          <Cell difficulty="hard" position="14"/>
          <Cell difficulty="hard" position="15"/>
        </div>
        <div className="row">
          <Cell difficulty="mix" position="16"/>
          <Cell difficulty="mix" position="17"/>
          <Cell difficulty="mix" position="18"/>
          <Cell difficulty="mix" position="19"/>
          <Cell difficulty="mix" position="20"/>
        </div>
      </article>
    )
  }

}

export default CellContainer;
