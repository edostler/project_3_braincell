import React from 'react';
import './MiddleContainer.css';
import Start from '../components/Start';
import QuizContainer from './QuizContainer';
import CategoryContainer from './CategoryContainer';
import End from '../components/End';

const MiddleContainer = (props) => {

    if(!props.allCategories || !props.playerCategories){
      return null;
    }

    return (
      <React.Fragment>
        <p>I'm a Middle Container</p>
        <Start/>
        <CategoryContainer
          allCategories={props.allCategories}
          playerCategories={props.playerCategories}
        />
        <QuizContainer/>
        <End/>
      </React.Fragment>
    )


}

export default MiddleContainer;
