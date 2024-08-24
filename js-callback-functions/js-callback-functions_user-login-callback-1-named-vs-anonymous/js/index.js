console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

// Call handleUserLogin below!

/* Task 1. Write a function with the "function" keyword named "showWelcomeMessage" which logs the desired text. Then
   call the higher order function "handleUserLogin" and pass your callback function "showWelcomeMessage" as the first argument.*/
const showWelcomeMessage = (taskNumber) => {
  console.log(`Task ${taskNumber}: Welcome! You are logged in now.`);
};

handleUserLogin(() => showWelcomeMessage(1));

/* Task 2. Call "handleUserLogin" again but this time write an anonymous 
function **inside** the function call (i.e. between the round brackets).
You can write an anonymous function either:*/

//a: arrow
handleUserLogin(() => {
  console.log("Task 2 arrow: Welcome! You are logged in now.");
});
//b: regular
handleUserLogin(function () {
  console.log("Task 2 regular: Welcome! You are logged in now.");
});
/**3. Implement the logic from the previous from "showWelcomeMessage" inside this anonymous function. */
handleUserLogin(function () {
  showWelcomeMessage(3);
});
