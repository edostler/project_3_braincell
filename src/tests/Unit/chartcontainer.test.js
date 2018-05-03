import React from 'react';
import { mount, configure } from 'enzyme';
import ChartContainer from '../../containers/ChartContainer.js';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-15'


configure({adapter: new Adapter()})

test('should display player name', () => {
  const chartcon = new ChartContainer();
  expect(chartcon.state.playerData).toEqual("Stan");
});

test('should display player score', () => {
  const chartcon = new ChartContainer();
  expect(chartcon.state.playerData).toEqual(1000);
});
