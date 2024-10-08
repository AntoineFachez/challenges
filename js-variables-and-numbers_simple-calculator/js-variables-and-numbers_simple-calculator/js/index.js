console.clear();

const operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
  const sum = operand1 + operand2;
  console.log(sum);
});

subtractButton.addEventListener("click", () => {
  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.

  const difference = operand1 - operand2;
  console.log(difference);
});

multiplyButton.addEventListener("click", () => {
  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.

  const product = operand1 * operand2;
  console.log(product);
});

divideButton.addEventListener("click", () => {
  // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
  const quotient = operand1 / operand2;
  console.log(quotient);
});

exponentButton.addEventListener("click", () => {
  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
  const power = operand1 ** operand2;
  console.log(power);
});

moduloButton.addEventListener("click", () => {
  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
  const modulo = operand1 % operand2;
  console.log(modulo);
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
  let increaseByOne = operand1 + 1;
  console.log(increase);
});

increaseByFiveButton.addEventListener("click", () => {
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
  let increaseByFive = operand1 + 5;
  console.log(increaseByFive);
});

decreaseByOneButton.addEventListener("click", () => {
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
  let decreaseByOne = operand1 - 1;
  console.log(decreaseByOne);
});

decreaseByFiveButton.addEventListener("click", () => {
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
  let decreaseByFive = operand1 - 5;
  console.log(decreaseByFive);
});

multiplyByTwoButton.addEventListener("click", () => {
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
  let productByTwo = operand1 * 2;
  console.log(productByTwo);
});

divideByTwoButton.addEventListener("click", () => {
  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
  let quotientByTwo = operand1 / 2;
  console.log(quotientByTwo);
});
