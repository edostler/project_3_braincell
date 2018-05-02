import React from 'react';
import { mount, configure } from 'enzyme';
import GameContainer from '../../containers/GameContainer.js';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-15'

// You need to write unit tests to ensure that the majority of functions in the game operate correctly. Test each of the program functions.

  configure({adapter: new Adapter()})

  test('should render correct container', () => {
    const gamecon = new GameContainer();
    expect(gamecon.state.gameStatus).toEqual(0);
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
    const gamecon = new GameContainer();
    expect(gamecon.state.currentPoints).toEqual(0);
  });

  test('should have nine catergories', () => {
    const gamecon = new GameContainer();
    expect(gamecon.state.allCategories.length).toEqual(9);
  });

  test('should have level of difficulty', () => {
    const gamecon = new GameContainer();
    expect(gamecon.state.difficulties).toEqual(["easy", "medium", "hard"]);
  });

  test('should have a name', () => {
    const gamecon = new GameContainer();
    expect(gamecon.state.playerName).toEqual("Debbie");
  });

  test('should have a status 0', () => {
    const gamecon = new GameContainer();
    expect(gamecon.state.gameStatus).toEqual(0);
  });

  test('should have a status 1', () => {
    const gamecon = new GameContainer();
    expect(gamecon.state.gameStatus).toEqual(1);
  });

  test('should have a status 2', () => {
    const gamecon = new GameContainer();
    expect(gamecon.state.gameStatus).toEqual(2);
  });

  test('should have a status 3', () => {
    const gamecon = new GameContainer();
    expect(gamecon.state.gameStatus).toEqual(0);
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
