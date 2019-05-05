exports.ScoreCalculator = scoreboard => {
  return scoreboard
    .replaceDoublePipeWithSingle()
    .replaceHyphensWithZeros()
    .splitInto2DArray()
    .handleStrikeCharacters()
    .handleSpareCharacters()
    .convertCharsToIntsInArray()
    .handleSpecialCharacterScoring()
    .sumSubArrays()
    .Add();
};

String.prototype.replaceDoublePipeWithSingle = function() {
  return this.replace(/\|{2}/g, "|");
};

String.prototype.replaceHyphensWithZeros = function() {
  return this.replace(/\-/g, "0");
};

String.prototype.splitInto2DArray = function() {
  return this.split("|").map(arrayElement => arrayElement.split(""));
}

Array.prototype.handleStrikeCharacters = function() {
  return this.map(subArray => subArray
    .map(char => 
         char == "/" ? char 
         : char == "X" ? 10 
         : char));
}

Array.prototype.handleSpareCharacters = function() {
  for (var i = 0; i < this.length; i++) {
    this[i][1] == "/" ? this[i][1] = 10 - Number(this[i][0]) : this[i][1];
  } 
  return this;
}

Array.prototype.convertCharsToIntsInArray = function() {
    return this.map(subArray => subArray.map(char => Number(char)));
};

Array.prototype.handleSpecialCharacterScoring = function() {
  for (var i = 0; i < this.length-2; i++) {
    if (this[i][0] === 10) {
        this[i+1][0] === 10 ?
                  this[i][0] += this[i+1][0] + this[i+2][0]
                  :this[i][0] += this[i+1][0] + this[i+1][1]; 
    }
    else if (this[i].reduce((a,b)=>a+b) === 10) {
      this[i][1] += this[i+1][0];
    }
  }
  return this;
}

Array.prototype.sumSubArrays = function() {
  return this.map(subArray => subArray.reduce((a, b) => a + b));
}

Array.prototype.Add = function() {
  return this.reduce((a, b) => a + b);
}