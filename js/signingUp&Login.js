// Step 1: Get the sign-up form and login form elements
const signUpForm = document.querySelector('#signup-form');

// Step 2: Listen for submit events on the sign-up form
signUpForm.addEventListener('submit', (event) => {
  // Step 3: Prevent the default form submission behavior
  event.preventDefault();

  // Step 4: Get the username, email and password values from the form
  const usernameInput = signUpForm.querySelector('input[type="text"]');
  const emailInput = signUpForm.querySelector('input[type="email"]');
  const passwordInput = signUpForm.querySelector('input[type="password"]');

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Step 5: Create a new user object with the username, email and password
  const user = { username, email, password };

  // Step 6: Get the existing users array from local storage or create an empty array if it doesn't exist
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Step 7: Check if the username already exists in the users array
  const existingUser = users.find((u) => u.username === user.username);
  if (existingUser) {
    alert('Username already exists. Please choose a different username.');
    return;
  }

  // Step 8: Add the new user object to the users array
  users.push(user);

  // Step 9: Save the updated users array to local storage
  localStorage.setItem('users', JSON.stringify(users));

  // Step 10: Reset the form
  signUpForm.reset();

  // Step 11: Alert the user that they have successfully registered
  alert('You have successfully registered!');
});



// for logging in
function login(event) {
    event.preventDefault();
    
    // Get the email and password values from the form
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    
    // Get the users array from local storage or create an empty array if it doesn't exist
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Check if there is a user with the given email and password in the users array
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        // Store the logged in user's username in session storage
        sessionStorage.setItem("username", user.username);
        
        // Redirect to the home page or another page of your choice
        window.location.href = "home.html";
        
        // Reset the form
        document.getElementById("login-email").value = "";
        document.getElementById("login-password").value = "";
    } else {
        // Alert incorrect email or password
        alert("Incorrect email or password");
    }
  }
  





