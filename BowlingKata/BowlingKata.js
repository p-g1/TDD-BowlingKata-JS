exports.ScoreCalculator = scoreboard => {
  
    return scoreboard
    .replaceDoublePipeWithSingle()
    .replaceHyphensWithZeros()
    .split("|")
    .convertCharsToIntsInArray()
    .handleSpareCharacters()
    .map(subArray => subArray.reduce((a,b)=> a+b))
    .reduce((a, b) => a + b);
};

String.prototype.replaceDoublePipeWithSingle = function() {
  return this.replace(/\|{2}/g, "|");
};

String.prototype.replaceHyphensWithZeros = function() {
  return this.replace(/\-/g, "0");
};

Array.prototype.convertCharsToIntsInArray = function() {
  return this.map(arrayElement => arrayElement
    .split("")
    .map((char, i) => 
      char == "/" ? 10 - Number(i-1):
      char == "X" ? 10 :
      Number(char)));
};

Array.prototype.handleSpareCharacters = function() {
  for (var i = 0; i < this.length; i++) {
    if (this[i][0] === 10) {
      this[i][0] += this[i+1][0] + this[i+1][1]; 
    }
    else if (this[i].reduce((a,b)=>a+b) === 10) {
      this[i][1] += this[i+1][0];
    }
  }
  return this;
  }

// function isSpare() {
//   return self.rolls[frameIndex] + self.rolls[frameIndex + 1] === 10;
// }