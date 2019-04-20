exports.ScoreCalculator = scoreboard => {
  var splitScoreBoard = scoreboard.split("|");

  if (splitScoreBoard.every(frame => (frame === "--" || frame === ""))) {
      return 0;
  }

};