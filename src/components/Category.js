import React from 'react';
import './Category.css';

const Category = (props) => {

  // Put each category (name) into an 'option' of a select drop-down list:
  const options = props.playerCategories.map((category, index) => {
    return <option value={index} key={index}>{category.name}</option>
  });

  return (
    <React.Fragment>
      <p>I'm a Category</p>
      <p>Number of categories to choose from: {props.playerCategories.length}</p>

      <select
        onChange={props.handleCategorySelect}
        id="category-selector"
        defaultValue="default">
        <option disabled value="default">Choose a category...</option>
        {options}
      </select>


    </React.Fragment>
  )

}

export default Category;
