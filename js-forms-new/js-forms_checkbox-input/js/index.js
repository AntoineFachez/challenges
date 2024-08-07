console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

const complaintSuccessfull = document.querySelector('[data-js="success"]');

function hideTosError(el) {
  el.setAttribute("hidden", "");
}

function showTosError(el) {
  el.removeAttribute("hidden");
}
hideTosError(tosError);
hideTosError(complaintSuccessfull);
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (tosCheckbox.checked) {
    console.log("checkbox is checked");
    hideTosError(tosError);

    showTosError(complaintSuccessfull);
  } else {
    console.log("checkbox is not checked");
    hideTosError(complaintSuccessfull);
    showTosError(tosError);
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
