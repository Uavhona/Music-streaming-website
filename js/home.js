 // Get the username from session storage and display it
 const usernameSpan = document.getElementById("username");
 const username = sessionStorage.getItem("username");
 if (username) {
   usernameSpan.textContent = username;
 }