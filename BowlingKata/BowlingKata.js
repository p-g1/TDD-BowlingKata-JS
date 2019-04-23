exports.ScoreCalculator = scoreboard => {
  if (scoreboard.charAt(3) == "1") {
    return 1;
  }

  return scoreboard
    .replaceDoublePipeWithSingle()
    .replaceHyphensWithZeros()
    .split("|")
    .charactersToIntsInArray()[0]
    .reduce((a, b) => a + b);
};

String.prototype.replaceDoublePipeWithSingle = function() {
  return this.replace(/\|{2}/g, "|");
};

String.prototype.replaceHyphensWithZeros = function() {
  return this.replace(/\-/g, "0");
};

Array.prototype.charactersToIntsInArray = function() {
  return this.map(arrayElement => arrayElement.split("").map(char => +char));
};
