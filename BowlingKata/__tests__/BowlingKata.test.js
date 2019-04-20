const Bowling = require("../BowlingKata.js");
require("jest-each");

describe("BowlingKata", () => {
  it("should return zero when given scoreboard with all misses", () => {
    expect(Bowling.ScoreCalculator("--|--|--|--|--|--|--|--|--|--||--")).toBe(0);
  });
});