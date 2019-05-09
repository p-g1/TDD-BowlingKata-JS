exports.ScoreCalculator = scoreboard => {
  return scoreboard
    .replaceDoublePipeWithSingle()
    .replaceHyphensWithZeros()
    .splitIntoThrowsInFrames2DArray()
    .handleStrikes()
    .handleSpares()
    .convertCharsToIntsInArray()
    .handleSpecialCharacterScoring()
    .sumThrowsInFrame()
    .sumAllFrames();
};

String.prototype.replaceDoublePipeWithSingle = function() {
  return this.replace(/\|{2}/g, "|");
};

String.prototype.replaceHyphensWithZeros = function() {
  return this.replace(/\-/g, "0");
};

String.prototype.splitIntoThrowsInFrames2DArray = function() {
  return this.split("|").map(frame => frame.split(""));
};

Array.prototype.handleStrikes = function() {
  return this.map(throwsInFrame =>
    throwsInFrame.map(ball =>
      ball.isSpare() ? ball : ball.isStrike() ? 10 : ball
    )
  );
};

Array.prototype.handleSpares = function() {
  let frames = this;
  for (var frameIndex = 0; frameIndex < frames.length; frameIndex++) {
    frames[frameIndex][1].toString().isSpare()
      ? (frames[frameIndex][1] = 10 - Number(frames[frameIndex][0]))
      : frames[frameIndex][1];
  }
  return frames;
};

Array.prototype.convertCharsToIntsInArray = function() {
  return this.map(throwsInFrame => throwsInFrame.map(ball => Number(ball)));
};

Array.prototype.handleSpecialCharacterScoring = function() {
  let frames = this;
  for (var frameIndex = 0; frameIndex < frames.length - 2; frameIndex++) {
    if (frames[frameIndex][0] === 10) {
      frames[frameIndex + 1][0] === 10
        ? (frames[frameIndex][0] +=
            frames[frameIndex + 1][0] + frames[frameIndex + 2][0])
        : (frames[frameIndex][0] +=
            frames[frameIndex + 1][0] + frames[frameIndex + 1][1]);
    } else if (frames[frameIndex].reduce((a, b) => a + b) === 10) {
      frames[frameIndex][1] += frames[frameIndex + 1][0];
    }
  }
  return this;
};

Array.prototype.sumThrowsInFrame = function() {
  return this.map(throwsInFrame => throwsInFrame.reduce((a, b) => a + b));
};

Array.prototype.sumAllFrames = function() {
  return this.reduce((a, b) => a + b);
};

String.prototype.isSpare = function() {
  return this == "/";
};

String.prototype.isStrike = function() {
  return this == "X";
};
