console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// 1. Named function
const showWelcomeMessage = (userName, userRole) => {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
};
handleUserLogin(showWelcomeMessage);

// 2. Anonymous function
handleUserLogin((userName, userRole) => {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
});
