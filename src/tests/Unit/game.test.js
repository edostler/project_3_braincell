var Category = require('../../components/Category.js')
var Cell = require('../../components/Cell.js')
var Answer = require('../../components/Answer.js')
var Question = require('../../components/Question.js')
var assert = require('assert')

describe('game', function () {
  beforeEach(function () {
    gamecontainer = new gamecontainer()
  });

  // write unit tests here in the form of "it should do something..."
  // it('it has a sample test', function(){
  //   assert.equal(true, true)
  // })

  // it('player can have a name', function(){
  //   category.handleChange();
  //   assert.equal("Debbie", category.playerName);
  // })

  it('player can select from a list of categories', function(){
    // enter entire list of categories
    gamecontainer.handleCategorySelect("history");
    assert.equal("history", gamecontainer.selectedCategory);
  })
  //
  // it('player can select a category', function(){
  //   category.handleChange("History");
  //   assert.equal("History", category.playerCategories);
  // })
  //
  // it('player can change selected a category', function(){
  //   category.handleChange("Geography");
  //   assert.equal("Geography", category.playerCategories);
  // })
  //
  // it('player can have a game status', function(){
  //   category.handleChange("Art");
  //   assert.equal("Art", category.playerCategories);
  // })






});
