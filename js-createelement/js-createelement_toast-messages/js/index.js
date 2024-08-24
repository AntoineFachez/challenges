console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

const message = (content) => {
  const toast = document.createElement("li");
  toast.classList.add("toast-container__message");
  toast.textContent = content;
  return toast;
};

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container

  const textMessage = "some lorem ipsum dolor";
  const newMessage = message(textMessage);

  toastContainer.append(newMessage);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages

  toastContainer.innerHTML = "";
});
