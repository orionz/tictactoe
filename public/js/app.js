
// add js for game here

$(function() {
  var moves = ["circle","cross"]
  $(".cell").click(function(e) {
    $(e.target).addClass(moves[0])
    moves.reverse();
  });
});

