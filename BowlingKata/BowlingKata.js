exports.ScoreCalculator = scoreboard => {
  return scoreboard
    .replaceDoublePipeWithSingle()
    .replaceHyphensWithZeros()
    .split("|")
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

Array.prototype.convertCharsToIntsInArray = function() {
  var temp = this.map(arrayElement =>
                      arrayElement.split("")
                                  .map(char => 
                                       char == "/" ? char 
                                       : char == "X" ? 10 
                                       : Number(char)));
    
  for (var i = 0; i < temp.length; i++) {
    temp[i][1] == "/" ? temp[i][1] = 10 - Number(temp[i][0]) : temp[i][1] = Number(temp[i][1]);
  } 
  return temp;
};

Array.prototype.handleSpecialCharacterScoring = function() {
  for (var i = 0; i < this.length-2; i++) {
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

Array.prototype.sumSubArrays = function() {
  return this.map(subArray => subArray.reduce((a, b) => a + b));
}

Array.prototype.Add = function() {
  return this.reduce((a, b) => a + b);
}
