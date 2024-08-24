const [bodyElement, btnDark, btnLight, btnToggle] = document.querySelectorAll(
  '[data-js="body"], [data-js="dark-mode-button"], [data-js="light-mode-button"], [data-js="toggle-button"]'
);
const setDarkMode = (state) => {
  if (state) {
    bodyElement.classList.add("dark");
  } else {
    bodyElement.classList.remove("dark");
  }
};
function toggleDarkMode() {
  bodyElement.classList.toggle("dark");
}

btnDark.addEventListener("click", () => setDarkMode(true));
btnLight.addEventListener("click", () => setDarkMode(false));
btnToggle.addEventListener("click", toggleDarkMode);

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  toggleDarkMode();
}
