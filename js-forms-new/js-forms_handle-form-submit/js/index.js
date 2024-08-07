console.clear();

const form = document.querySelector('[data-js="form"]');

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
