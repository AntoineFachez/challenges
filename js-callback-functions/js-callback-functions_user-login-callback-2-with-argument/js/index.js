console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

/* Task 1: Write a function with the "function" keyword named "showWelcomeMessage"
   Call "handleUserLogin" and pass your callback function as the first argument. */
const showWelcomeMessage = () => {
  console.log("Task 1: Welcome Jane Doe! You are logged in now.");
};
handleUserLogin(showWelcomeMessage);

/* Taks 2: Call "handleUserLogin" again but this time write the callback function as an anonymous function 
**inside** the function call (i.e. between the round brackets).
   (You should see the log from your callback message) */
handleUserLogin(() => {
  console.log("Task 2: Welcome Jane Doe! You are logged in now.");
});
