const reverseString = require("./reversestring");

test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("String reverses", () => {
  expect(reverseString("hallo")).toEqual("ollah");
});

test("String reverses with uppercase", () => {
    expect(reverseString("Hallo")).toEqual("ollah");
  });