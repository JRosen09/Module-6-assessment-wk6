const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  // CODE HERE

  test(`check if length is the same after running function`, () => {
    let arr = [1, 2, 3, 4, 5];
    let result = shuffleArray(arr);
    expect(arr.length).toBe(result.length);
  });

  test("should return array of equal lengths as initial argument", () => {
    let example = [1, 2, 3, 4, 5];
    expect(shuffleArray(example).length).toEqual(example.length);
  });
});
