import React from 'react';
import './Category.css';

const Category = (props) => {

  // Put each category (name) into an 'option' of a select drop-down list:
  const options = props.playerCategories.map((category, index) => {
    return <option value={index} key={index}>{category.name}</option>
  });

  if(props.currentDifficultyValue < 4) {
    return (
      <React.Fragment>
        <div className="category">
          <p className="category-text">What's your favourite category?</p>
          <select
            className="category-select"
            onChange={props.handleCategorySelect}
            id="category-selector"
            defaultValue="default">
            <option
              className="category-option"
              disabled value="default">Choose a category...</option>
            {options}
          </select>

          {/* UNFINISHED CODE FOR CHANGING DROPDOWN TO CLICKABLE TILES
          <div className="category-group">
            <div onClick={props.handleCategorySelect} className="category-button">{props.playerCategories[0].name}</div>
            <div onClick={props.handleCategorySelect} className="category-button">{props.playerCategories[1].name}</div>
            <div onClick={props.handleCategorySelect} className="category-button">{props.playerCategories[2].name}</div>
            <div onClick={props.handleCategorySelect} className="category-button">{props.playerCategories[3].name}</div>
            <div onClick={props.handleCategorySelect} className="category-button">{props.playerCategories[4].name}</div>
            <div onClick={props.handleCategorySelect} className="category-button">{props.playerCategories[5].name}</div>
            <div onClick={props.handleCategorySelect} className="category-button">{props.playerCategories[6].name}</div>
            <div onClick={props.handleCategorySelect} className="category-button">{props.playerCategories[7].name}</div>
            <div onClick={props.handleCategorySelect} className="category-button">{props.playerCategories[8].name}</div>
          </div>
          UNFINISHED CODE FOR CHANGING DROPDOWN TO CLICKABLE TILES */}

        </div>
      </React.Fragment>
    )
  }
  else {
    props.handleCategoryRandomise();
    return null
  }

}

export default Category;
