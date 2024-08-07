console.clear();

const form = document.querySelector('[data-js="form"]');
console.log("form", form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("data", data);
  console.log(
    `The age-badness-sum of ${data.firstName} is ${
      Number.parseInt(data.age) + Number.parseInt(data.badness)
    }.`
  );
  event.target.reset();
  event.target.elements.firstName.focus();
});
