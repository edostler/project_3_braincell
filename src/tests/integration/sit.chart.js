var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('game status functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  it('should allow the user to view charts', function(){
    showChart = element(by.css('#setState'))
    element(by.css('#handleChartClick')).click();
    expect(showChart.getAttribute('value')).to.eventually.equal()
  });
