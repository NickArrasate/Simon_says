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
