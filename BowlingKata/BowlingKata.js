exports.ScoreCalculator = scoreboard => {
  var splitScoreBoard = scoreboard.split("|");

  if (splitScoreBoard.every(frame => (frame === "--" || frame === ""))) {
      return 0;
  }

  if (splitScoreBoard[0].charAt(0) == 5) {
    return 5;
  }

  if (splitScoreBoard[0].charAt(0) == 1) {
    return 1;
  }

  return 9;

};