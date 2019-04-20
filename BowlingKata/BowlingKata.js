exports.ScoreCalculator = scoreboard => {
 
  var missReplacedScoreBoard = scoreboard
                                .replace(/\-/g, '0')
                                .replace(/\|{2}/g, '|');

  var splitScoreBoard = missReplacedScoreBoard.split("|");

  if (splitScoreBoard.every(frame => (frame === "00" || frame === ""))) {
      return 0;
  }

  var splitScoreBoardInts = splitScoreBoard
                                    .map(frame => frame
                                                     .split('')
                                                     .map(score => +score));

  return splitScoreBoardInts[0].reduce((a,b)=>a+b);
};
