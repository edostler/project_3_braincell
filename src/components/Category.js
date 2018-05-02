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
