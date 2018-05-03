// You need to write integration/acceptance tests to ensure all of the units of code work together in the browser to perform as the user would wish.

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('game functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."

  it('should allow the user to enter a name', function(){
    this.state.playerResults.name = element(by.css('#this.state.playerResults.name'))
    element(by.css('#handlePlayerNameKeyUp')).click("D");
    element(by.css('#handlePlayerNameKeyUp')).click("o");
    element(by.css('#handlePlayerNameKeyUp')).click("r");
    element(by.css('#handlePlayerNameKeyUp')).click("i");
    element(by.css('#handlePlayerNameKeyUp')).click("s");
    expect(this.state.playerResults.name.getAttribute('value')).to.eventually.equal("Doris")
  });

 // check how to verify name submit, perhaps can verify on player name left column
  // it('should allow the user to submit a name', function(){
  //   playerName = element(by.css('#setState'))
  //   element(by.css('#handlePlayerNameSubmit')).click();
  //   expect(playerName.getAttribute('value')).to.eventually.equal("name")
  // });
