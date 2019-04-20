const Bowling = require("../BowlingKata.js");
require("jest-each");

describe("BowlingKata", () => {
  test.each`
    input   | expectedResult
    ${"--|--|--|--|--|--|--|--|--|--||--"} | ${0}
    ${"1-|--|--|--|--|--|--|--|--|--||--"} | ${1}
    ${"5-|--|--|--|--|--|--|--|--|--||--"} | ${5}
    ${"9-|--|--|--|--|--|--|--|--|--||--"} | ${9}
    ${"-2|--|--|--|--|--|--|--|--|--||--"} | ${2}
    ${"-6|--|--|--|--|--|--|--|--|--||--"} | ${6}
    ${"-8|--|--|--|--|--|--|--|--|--||--"} | ${8}
  `("should calculate score of $expectedResult from $input", ({ input, expectedResult }) => {
    expect(Bowling.ScoreCalculator(input)).toBe(expectedResult);
  });
});