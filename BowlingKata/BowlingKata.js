exports.ScoreCalculator = scoreboard => {
  
    return scoreboard
    .replaceDoublePipeWithSingle()
    .replaceHyphensWithZeros()
    .split("|")
    .charactersToIntsInArray()
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

Array.prototype.charactersToIntsInArray = function() {
  return this.map(arrayElement => arrayElement
    .split("")
    .map(char => char == "/" || char == "X" ? char : char*1));
};

Array.prototype.handleSpecialCharacters = function() {
  for (var i = 0; i < this.length; i++) {
    if (this[i][1] ==  "/") {
      this[i][1] = 10 - this[i][0] + this[i+1][0];
    } 
    if (this[i][0] ==  "X") {
      this[i][0] = 10 + this[i+1][0] + this[i+1][1];
    } 
  }
  return this;
}
