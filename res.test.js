const check = require("./res");

test("Testing", () => {
  expect(check(4000000, 0, 34, 800000)).toBe(960000);
  expect(check(800000, 0, 34, 800000)).toBe(0);
  expect(check(4000000, 0, 40, 8000)).toBe(1596800);
  expect(check(3321321, 56546, 60, 800000)).toBe(257786.7);
});
