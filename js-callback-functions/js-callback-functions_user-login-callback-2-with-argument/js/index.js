function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
}

handleUserLogin(showWelcomeMessage);

// anonymous function:
handleUserLogin((userName) => {
  console.log(`Welcome ${userName}! You are logged in now.`);
});
