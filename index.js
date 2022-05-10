var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;

$(document).keydown(function () {
  if (level === 0) {
    $("#level-title").text("Level " + level);
    nextSequence();
  }
});