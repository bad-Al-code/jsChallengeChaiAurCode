document.addEventListener("DOMContentLoaded", () => {
  console.log("Social Media Dashboard Loaded");

  const loginForm = document.getElementById("login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }
});

function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    localStorage.setItem("user", JSON.stringify({ username, password }));

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    alert("Login successful!");
  } else {
    alert("Please enter both username and password.");
  }
}
