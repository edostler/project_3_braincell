import React from 'react';
import { mount, configure } from 'enzyme';
import GameContainer from '../../containers/GameContainer.js';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-15'

// You need to write unit tests to ensure that the majority of functions in the game operate correctly. Test each of the program functions.

  configure({adapter: new Adapter()})

  test('should render correct container', () => {
    const gc = new GameContainer();
    expect(gc.state.gameStatus).toEqual(0);
    // const containers = mount(<GameContainer/>);
    // console.log(containers);
    // expect(containers).toMatchSnapshot();
    // expect(toJson(rawRenderedContainers)).toMatchSnapshot();
  });

  test('should render correct container', () => {
    const gc = new GameContainer();

    let fakeEvent = {
      target: {value: "John"}
    };
    gc.handlePlayerNameKeyUp(fakeEvent)
    expect(gc.state.playerName).toEqual("John");

    const container = shallow(<GameContainer/>);
    container.instance().componentDidMount();
  
  });

  test('should start a new player at zero points', () => {
    const gamecont = new GameContainer();
    expect(gamecont.state.currentPoints).toEqual(0);
  });

  test('should have nine catergories', () => {
    const gamecont = new GameContainer();
    expect(gamecont.state.allCategories.length).toEqual(9);
  });

  test('should have level of difficulty', () => {
    const gamecont = new GameContainer();
    expect(gamecont.state.difficulties).toEqual(["easy", "medium", "hard"]);
  });

  // test('player can select from a list of categories', () => {
  //   const containers = mount.create(
  //   <GameContainer page="http://localhost:3000/">BrainCell</GameContainer>,
  // );
  //   let history = containers.toJSON();
  //   expect(history).toMatchSnapshot();
  //
  // // manually trigger the callback
  // history.props.selectedCategory();
  // // re-rendering
  // history = containers.toJSON();
  // expect(history).toMatchSnapshot();

  // test('player can move through each level', () => {
  // test('player can have a name', () => {
  // test('game can have a status', () => {
