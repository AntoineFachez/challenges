console.clear();
const separation = "-------------";

const exercises = [
  {
    name: "Exercise 1",
    exercise: `1: The function below is not executed. Can you figure out why? Find the bug and fix it.`,
  },
  {
    name: "Exercise 2",
    exercise:
      "2: Look at the functions below. They are almost identical. Can you find a way to generalize them into a new function with an input parameter? Replace the function calls below with your new function.",
  },
  {
    name: "Exercise 3",
    exercise:
      "3: We log a little separation text for each subtask. This is repetitive code, so lets write a function 'logSeparator' which takes the number of the exercise as a parameter and logs the respective separator. Then use this function to replace the existing separator logs in this javascript file. Note: Separation text means the text that is logged into the console before each exercise. For example: '-------------' and 'Exercise 1:' are the separation texts for the first exercise.",
  },
];
const logSeparator = (exerciseNum) => {
  const exerciseText = exercises[exerciseNum].exercise;

  return separation + exerciseText;
};
// console.log("-------------");
console.log(logSeparator(0));
/*
1: The function below is not executed. Can you figure out why? Find the bug and fix it.
*/

// Uncomment the next line of code and figure out why it does not work:

function logText() {
  console.log("This text does not appear. Why?");
}
logText();

// console.log("-------------");
console.log(logSeparator(1));
/*
2: Look at the functions below. They are almost identical. Can you find a way to generalize them into a new function with an input parameter? Replace the function calls below with your new function.
*/
const greetingTexts = [];
function greetBob() {
  greetingTexts.push("Welcome Bob, good to see you again!");
}

function greetAlice() {
  greetingTexts.push("Welcome Alice, good to see you again!");
}

function greetMary() {
  greetingTexts.push("Welcome Mary, good to see you again!");
}
greetAlice();
greetBob();
greetMary();

// --v-- write your code here --v--

function greet(texts) {
  texts.forEach((text) => {
    console.log(text);
  });
}
greet(greetingTexts);

// --^-- write your code here --^--

// console.log("-------------");
console.log(logSeparator(2));
/*
3: We log a little separation text for each subtask. This is repetitive code, so lets write a function 'logSeparator' which takes the number of the exercise as a parameter and logs the respective separator. Then use this function to replace the existing separator logs in this javascript file.

Note: Separation text means the text that is logged into the console before each exercise. For example: "-------------" and "Exercise 1:" are the separation texts for the first exercise.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--
