import React, { Component } from 'react';
import './CellContainer.css';
import Cell from '../components/Cell';

class CellContainer extends Component {

  render(){
    return (
      <article className="grid">
        <div className="row">
          <div id="easy" className="box"><Cell className="inner" position="01"/></div>
          <div id="easy" className="box"><Cell className="inner" position="02"/></div>
          <div id="easy" className="box"><Cell className="inner" position="03"/></div>
          <div id="easy" className="box"><Cell className="inner" position="04"/></div>
          <div id="easy" className="box"><Cell className="inner" position="05"/></div>
        </div>
        <div className="row">
          <div id="medium" className="box"><Cell className="inner" position="06"/></div>
          <div id="medium" className="box"><Cell className="inner" position="07"/></div>
          <div id="medium" className="box"><Cell className="inner" position="08"/></div>
          <div id="medium" className="box"><Cell className="inner" position="09"/></div>
          <div id="medium" className="box"><Cell className="inner" position="10"/></div>
        </div>
        <div className="row">
          <div id="hard" className="box"><Cell className="inner" position="11"/></div>
          <div id="hard" className="box"><Cell className="inner" position="12"/></div>
          <div id="hard" className="box"><Cell className="inner" position="13"/></div>
          <div id="hard" className="box"><Cell className="inner" position="14"/></div>
          <div id="hard" className="box"><Cell className="inner" position="15"/></div>
        </div>
        <div className="row">
          <div id="mix" className="box"><Cell className="inner" position="16"/></div>
          <div id="mix" className="box"><Cell className="inner" position="17"/></div>
          <div id="mix" className="box"><Cell className="inner" position="18"/></div>
          <div id="mix" className="box"><Cell className="inner" position="19"/></div>
          <div id="mix" className="box"><Cell className="inner" position="20"/></div>
        </div>
      </article>
    )
  }

}

export default CellContainer;
