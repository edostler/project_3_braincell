import React from 'react';
import { mount, configure } from 'enzyme';
import AnswerContainer from '../../containers/AnswerContainer.js';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-15'


configure({adapter: new Adapter()})

test('should render correct answer', () => {
  const answercon = new AnswerContainer();
  expect(answercon.state.correctAnswer).toEqual("null");
});

test('should render an answer as incorrect', () => {
  const answercon = new AnswerContainer();
  expect(answercon.state.incorrectAnswers).toEqual("null");
});
