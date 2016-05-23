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
