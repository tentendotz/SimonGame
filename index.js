var buttonColours = ["red", "blue", "green", "yellow"];

var level = 0;

$(document).keydown(function () {
  if (level === 0) {
    $("#level-title").text("Level " + level);
    nextSequence();
  }
});