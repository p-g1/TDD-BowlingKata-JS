const Bowling = require("../BowlingKata.js");
require("jest-each");

describe("BowlingKata", () => {
  it("should return zero when given scoreboard with all misses", () => {
    expect(Bowling.ScoreCalculator("--|--|--|--|--|--|--|--|--|--||--")).toBe(0);
  });
  it("should return correct score when given scoreboard with a single hit", () => {
    expect(Bowling.ScoreCalculator("1-|--|--|--|--|--|--|--|--|--||--")).toBe(1);
  });
  it("should return correct score when given scoreboard with a single hit", () => {
    expect(Bowling.ScoreCalculator("5-|--|--|--|--|--|--|--|--|--||--")).toBe(5);
  });
  it("should return correct score when given scoreboard with a single hit", () => {
    expect(Bowling.ScoreCalculator("9-|--|--|--|--|--|--|--|--|--||--")).toBe(9);
  });
});