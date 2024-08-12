document
  .getElementById("edit-profile-button")
  .addEventListener("click", function () {
    document.getElementById("edit-profile-form").style.display = "block";
    document.getElementById("edit-profile-button").style.display = "none";
  });

document
  .getElementById("cancel-profile-button")
  .addEventListener("click", function () {
    document.getElementById("edit-profile-form").style.display = "none";
    document.getElementById("edit-profile-button").style.display = "block";
  });

document
  .getElementById("save-profile-button")
  .addEventListener("click", function () {
    const newUsername = document.getElementById("new-username").value;
    const newEmail = document.getElementById("new-email").value;
    const newProfilePicture = document.getElementById("new-profile-picture")
      .files[0];

    document.getElementById("username").innerText = newUsername;
    document.getElementById("email").innerText = newEmail;

    if (newProfilePicture) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("profile-picture").src = e.target.result;
      };
      reader.readAsDataURL(newProfilePicture);
    }

    document.getElementById("edit-profile-form").style.display = "none";
  });

// Function to display messages
function showMessage(message, type = "info") {
  alert(`${type.toUpperCase()}: ${message}`);
}

// Registration
document
  .getElementById("register-button")
  .addEventListener("click", function () {
    const username = document.getElementById("reg-username").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const password = document.getElementById("reg-password").value.trim();

    // Basic validation
    if (username === "" || email === "" || password === "") {
      showMessage("All fields are required", "error");
      return;
    }

    if (password.length < 6) {
      showMessage("Password must be at least 6 characters long", "error");
      return;
    }

    // Check if user already exists
    if (localStorage.getItem(username)) {
      showMessage("Username already taken", "error");
      return;
    }

    // Store user information
    const user = {
      username,
      email,
      password, // In a real app, never store passwords as plain text
    };
    localStorage.setItem(username, JSON.stringify(user));
    showMessage("Registration successful! You can now log in.", "success");

    // Clear the form
    document.getElementById("registration-form").reset();
  });

// Login
document.getElementById("login-button").addEventListener("click", function () {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  // Basic validation
  if (username === "" || password === "") {
    showMessage("All fields are required", "error");
    return;
  }

  // Retrieve user from storage
  const storedUser = JSON.parse(localStorage.getItem(username));

  if (!storedUser || storedUser.password !== password) {
    showMessage("Invalid username or password", "error");
    return;
  }

  // Store logged-in user in sessionStorage
  sessionStorage.setItem("loggedInUser", JSON.stringify(storedUser));
  showMessage("Login successful!", "success");

  // Redirect to profile page or show profile information
  displayProfile(storedUser);
});

// Function to display logged-in user's profile
function displayProfile(user) {
  document.getElementById("username").textContent = user.username;
  document.getElementById("email").textContent = user.email;

  // Optional: Hide the auth forms and show the profile section
  document.getElementById("user-auth").style.display = "none";
  document.getElementById("user-profile").style.display = "block";
}

// Check if a user is already logged in
const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
if (loggedInUser) {
  displayProfile(loggedInUser);
}
