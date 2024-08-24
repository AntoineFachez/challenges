import { add, subtract, multiply, divide } from "./index.js";

// Add
test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});
test("returns a negative value if the greater argument is negative", () => {
  // Test case where the first argument is the greater negative number
  expect(add(-5, 3)).toBeLessThan(0);

  // Test case where the second argument is the greater negative number
  expect(add(2, -7)).toBeLessThan(0);
});
test("returns a value close to 0.3 if called with add(0.1, 0.2) ", () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});

// Subtract
test("substracts two numbers", () => {
  expect(subtract(15, 5)).toBe(10);
});
test("returns a negative value if the second argument is greater than the first one", () => {
  expect(subtract(15, 25)).toBeLessThan(0);
});

// Multiply
test("multiply two numbers", () => expect(multiply(2, 4)).toBe(8));
test("return negative if only first arg is negative", () =>
  expect(multiply(-2, 4)).toBeLessThan(0));
test("return negative if only second arg is negative", () =>
  expect(multiply(2, -4)).toBeLessThan(0));
test("return negative if both args are negative", () =>
  expect(multiply(-2, -4)).toBeGreaterThan(0));

// Divide
test("divide two numbers", () => {
  expect(divide(9, 3)).toBe(3);
});
test("You should not do this!", () => {
  expect(divide(9, 0)).toBe("You should not do this!");
});
