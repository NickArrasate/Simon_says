(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Game = function(){
  this.sequence = [];
  this.playerMoves = [];
  this.moveCounter = 0;
};

exports.Game.prototype.sequencer = function(){
  var randNum = Math.floor((Math.random() * 4) + 1);
  if(randNum === 1){
    this.sequence.push('red');
  } else if (randNum === 2){
    this.sequence.push('yellow');
  } else if (randNum === 3){
    this.sequence.push('green');
  } else if (randNum === 4){
    this.sequence.push('blue');
  }
};

exports.Game.prototype.playerMove = function(color){
  this.playerMoves.push(color);
};

exports.Game.prototype.moveCheck = function(){
  var match;
  for (var i = 0; i < this.sequence.length; i++){
    if (this.sequence[i] === this.playerMoves[i]){
      match = true;
    } else {
      match = false;
      break;
    }
  }
  return match;
};

exports.Game.prototype.emptyMoves = function(){
  this.playerMoves = [];
}

},{}],2:[function(require,module,exports){
var Game = require('./../js/game.js').Game;

$(document).ready(function(){
  $('#start').click(function(){
    var newGame = new Game();
    newGame.sequencer();
    newGame.sequence[0]
    setTimeout(function(){ $('.' + newGame.sequence[0]).addClass('light' + newGame.sequence[0]);}, 1000);
    setTimeout(function(){ $('.' + newGame.sequence[0]).removeClass('light' + newGame.sequence[0]);}, 2000);
    console.log(newGame.sequence);
    $('#start').hide();

    $('.tile').click(function(){
      var color = $(this).attr('id');
      newGame.playerMove(color);
      newGame.moveCounter += 1;
      if(newGame.moveCounter === newGame.sequence.length){
        if(newGame.moveCheck() === true){
          newGame.emptyMoves();
          newGame.sequencer();
          newGame.moveCounter = 0;
          console.log(newGame.sequence);
        } else {
          alert("you lose");
        }
      }
    });
  });
});

},{"./../js/game.js":1}]},{},[2]);
