import { formInnerHTML } from "../../htmlCode/formInnerHTML.js";
import { handleFormSubmit } from "../../actions/formSubmit.js";

export function Form(cardsData) {
  const form = document.createElement("form");
  form.classList.add("form");
  form.innerHTML = /* html */ formInnerHTML;

  const formFields = form.querySelectorAll('[data-js*="input"]');
  const counterOutputs = form.querySelectorAll("[data-js*=amount-left]");

  formFields.forEach((formField, index) => {
    counterOutputs.forEach((output) => {
      output.innerText = formField.maxLength;
    });
    formField.addEventListener("input", () => {
      const currentAmountLeft = formField.maxLength - formField.value.length;
      counterOutputs[index].innerText = currentAmountLeft;
    });
  });

  form.addEventListener("submit", (e) => handleFormSubmit(e, cardsData));

  return form;
}
