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
}

Array.prototype.handleStrikes = function() {
  return this.map(throwsInFrame => throwsInFrame
    .map(ball => 
         ball.isSpare() 
         ? ball 
         : ball.isStrike()
         ? 10 
         : ball
         ));
}

Array.prototype.handleSpares = function() {
  let frames = this, frameThrow1, frameThrow2;
  for (var frameIndex = 0; frameIndex < frames.length; frameIndex++) {
     frameThrow1 = frames[frameIndex][0];
     frameThrow2 = frames[frameIndex][1];
    
    if (frameThrow2 == "/") {
      
      frameThrow2 = (10 - Number(frameThrow1));
      console.log(frames[frameIndex][1], frameThrow2);
    }
    
  } 
  console.log(frames);
  return frames;
}

Array.prototype.convertCharsToIntsInArray = function() {
    return this.map(throwsInFrame => throwsInFrame.map(ball => Number(ball)));
};

Array.prototype.handleSpecialCharacterScoring = function() {
  let frames = this;
  for (var frameIndex = 0; frameIndex < frames.length-2; frameIndex++) {
    let frameThrow1 = frames[frameIndex][0];
    let frameThrow2 = frames[frameIndex][1];
    let nextFrameThrow1 = frames[frameIndex+1][0];
    let nextFrameThrow2 = frames[frameIndex+1][1];
    let nextFramePlusOneThrow1 = frames[frameIndex+2][0];

    if (frameThrow1 === 10) {
      nextFrameThrow1 === 10 
      ? frames[frameIndex][0] += frames[frameIndex+1][0] + frames[frameIndex+2][0]
      : frames[frameIndex][0] += frames[frameIndex+1][0] + frames[frameIndex+1][1]; 
    }
    else if (frames[frameIndex].reduce((a,b)=>a+b) === 10) {
      frameThrow2 += nextFrameThrow1;
    }
  }
  return this;
}

Array.prototype.sumThrowsInFrame = function() {
  return this.map(throwsInFrame => throwsInFrame.reduce((a, b) => a + b));
}

Array.prototype.sumAllFrames = function() {
  return this.reduce((a, b) => a + b);
}

String.prototype.isSpare = function() {
  return this == "/";
}

String.prototype.isStrike = function() {
  return this == "X";
}