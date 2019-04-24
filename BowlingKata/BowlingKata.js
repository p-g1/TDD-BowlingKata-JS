exports.ScoreCalculator = scoreboard => {

  // scoreboard = scoreboard.replace(/\//g, "10");
  
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
  return this.map(arrayElement => arrayElement.split("").map(char => char == "/" ? char : char*1));
};

Array.prototype.handleSpecialCharacters = function() {
  return this.map((arrayElement) => arrayElement.map(char => char == "/" ? 10: char)); 
}
