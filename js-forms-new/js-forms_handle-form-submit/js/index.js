console.clear();

const form = document.querySelector('[data-js="form"]');
const badnessInput = document.getElementById("badness");
const age = document.getElementById("age");

const getDataFromForm = (e) => {
  e.preventDefault();
  const data = new FormData(form);
  for (const [name, value] of data.entries()) {
    console.log(name, value);
  }
  form.reset();
  form.elements.firstName.focus();
};
form.addEventListener("submit", (e) => getDataFromForm(e));
badnessInput.addEventListener("input", (e) => {
  e.preventDefault();
  console.log(+age.value + +badnessInput.value);
});
