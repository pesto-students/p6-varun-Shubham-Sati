const allOperations = require("./assignment_4");

describe("all arithmetic operations", () => {
  test("sum of numbers", () => {
    expect(allOperations.sum(2, 1)).toBe(3);
  });

  test("difference of numbers", () => {
    expect(allOperations.diff(1, 1)).toBe(0);
  });

  test("product of numbers", () => {
    expect(allOperations.product(1, 1)).toBe(1);
  });
});
