import React from 'react';
import './CategoryContainer.css';
import Category from '../components/Category';


const CategoryContainer = (props) => {

  // Put each category (name) into an 'option' of a select drop-down list:
  const options = props.playerCategories.map((category, index) => {
    return <option value={index} key={index}>{category.name}</option>
  });

  const handleChange = (event) => {
    console.log("Player has selected: ", props.playerCategories[event.target.value]);
    // (1) Change currentCategory prop on GameContainer
    // (2) Change gameStatus prop on GameContainer
    // (3) Then GameContainer will use both the above props to:
    // (a) Randomly select a quiz question for the chosen currentCategory and
    // (b) Change the displayed component to be QuizContainer - which is displayed when gameStatus = 2
  }

  return (
    <React.Fragment>
      <p>I'm a CategoryContainer</p>
      <p>Player: {props.playerName}</p>
      <p>Number of categories to choose from: {props.playerCategories.length}</p>

      <select
        onChange={handleChange}
        id="category-selector"
        defaultValue="default">
        <option disabled value="default">Choose a category...</option>
        {options}
      </select>

      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </React.Fragment>
  )

}

export default CategoryContainer;
