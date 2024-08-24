console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--
for (const language in programmingLanguages) {
  const languageEl = document.createElement("li");
  languageEl.textContent = programmingLanguages[language];

  ol.append(languageEl);
}
// --^-- write/change code here --^--
