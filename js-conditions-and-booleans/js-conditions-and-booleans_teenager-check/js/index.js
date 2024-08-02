const main = document.querySelector("main");
const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');

const output = document.createElement("p");

output.textContent = "You are a teen.";
button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);
  checkAge(age);
  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the console.
});
const checkAge = (age) => {
  if (age >= 13 && age <= 18) {
    output.textContent = "You are a teen.";
  } else {
    output.textContent = "You are not a teen.";
  }
  main.appendChild(output);
};
