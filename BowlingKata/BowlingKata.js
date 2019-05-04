exports.ScoreCalculator = scoreboard => {
  return scoreboard
    .replaceDoublePipeWithSingle()
    .replaceHyphensWithZeros()
    .split("|")
    .convertCharsToIntsInArray()
    .handleSpecialCharacters()
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
  var temp = this.map(arrayElement => arrayElement
    .split(""));
    for (var i = 0; i < temp.length; i++) {
      temp[i][0] == "X" ? temp[i][0] = 10 : temp[i][0] = Number(temp[i][0]);
      temp[i][1] == "/" ? temp[i][1] = 10 - Number(temp[i][0]) : temp[i][1] = Number(temp[i][1]);
    } 
      return temp;
};

Array.prototype.handleSpecialCharacters = function() {
  for (var i = 0; i < this.length; i++) {
    if (this[i][0] === 10) {
      this[i+1][0] === 10 ?
      this[i][0] += this[i+1][0] + this[i+2][0]:
      this[i][0] += this[i+1][0] + this[i+1][1]; 
    }
    else if (this[i].reduce((a,b)=>a+b) === 10) {
      this[i][1] += this[i+1][0];
    }
  }
  return this;
  }

