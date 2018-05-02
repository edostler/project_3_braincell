import React from 'react';
import { mount, configure } from 'enzyme';
import GameContainer from '../../containers/AnswerContainer.js';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-15'


configure({adapter: new Adapter()})

test('should render correct answer', () => {
  const acont = new AnswerContainer();
  expect(acont.state.correctAnswer).toEqual("null");
});

test('should render an answer as incorrect', () => {
  const acont = new AnswerContainer();
  expect(acont.state.incorrectAnswers).toEqual("null");
});
