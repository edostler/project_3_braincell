// You need to write integration/acceptance tests to ensure all of the units of code work together in the browser to perform as the user would wish.

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('game status functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."

  it('should have a game status 0', function(){
    gameStatus = element(by.css('#gameStatus'))
    element(by.css('#0')).click();
    expect(gameStatus.getAttribute('value')).to.eventually.equal('0')
  });

  it('should have a game status 1', function(){
    gameStatus = element(by.css('#gameStatus'))
    element(by.css('#1')).click();
    expect(gameStatus.getAttribute('value')).to.eventually.equal('1')
  });

  it('should have a game status 2', function(){
    gameStatus = element(by.css('#gameStatus'))
    element(by.css('#2')).click();
    expect(gameStatus.getAttribute('value')).to.eventually.equal('2')
  });
