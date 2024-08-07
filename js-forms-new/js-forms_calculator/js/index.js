console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');
const allInputs = document.querySelectorAll("input");

window.addEventListener("load", (e) => {
  e.preventDefault();
  selectedMethod();
});

const selectedMethod = (res) => {
  let valueA, valueB;
  allInputs.forEach((element) => {
    if (element.id === "number-a") {
      valueA = +element.value;
    } else if (element.id === "number-b") {
      valueB = +element.value;
    }
    if (element.value === "addition" && element.checked) {
      res = +add(valueA, valueB);
    } else if (element.value === "subtraction" && element.checked) {
      res = +subtract(valueA, valueB);
    } else if (element.value === "multiplication" && element.checked) {
      res = +multiply(valueA, valueB);
    } else if (element.value === "division" && element.checked) {
      res = +divide(valueA, valueB);
    }
  });
  return res;
};

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  result = selectedMethod(result);

  resultOutput.innerHTML = result;
  // --^-- write your code here --^--
});
