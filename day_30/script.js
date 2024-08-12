document
  .getElementById("register-button")
  .addEventListener("click", function () {
    const username = document.getElementById("register-username").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value.trim();

    if (username === "" || email === "" || password === "") {
      showMessage("Please fill in all fields.", "error");
      return;
    }

    if (localStorage.getItem(username)) {
      showMessage("Username is already taken.", "error");
      return;
    }

    const newUser = {
      username: username,
      email: email,
      password: password,
      profilePicture: "default-profile.png",
    };

    localStorage.setItem(username, JSON.stringify(newUser));
    showMessage("Registration successful! You can now log in.", "success");
  });

document.getElementById("login-button").addEventListener("click", function () {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  if (username === "" || password === "") {
    showMessage("Please fill in all fields.", "error");
    return;
  }

  const storedUser = JSON.parse(localStorage.getItem(username));
  if (!storedUser || storedUser.password !== password) {
    showMessage("Invalid username or password.", "error");
    return;
  }

  sessionStorage.setItem("loggedInUser", JSON.stringify(storedUser));
  showMessage("Login successful!", "success");

  displayProfile(storedUser);
});

function displayProfile(user) {
  document.getElementById("username").textContent = user.username;
  document.getElementById("email").textContent = user.email;
  document.getElementById("profile-picture").src =
    user.profilePicture || "default-profile.png";

  document.getElementById("user-auth").style.display = "none";
  document.getElementById("user-profile").style.display = "block";
}

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
  .getElementById("update-profile-button")
  .addEventListener("click", function () {
    const newUsername = document.getElementById("new-username").value.trim();
    const newEmail = document.getElementById("new-email").value.trim();
    const newProfilePicture = document.getElementById("new-profile-picture")
      .files[0];

    if (newUsername !== "") {
      loggedInUser.username = newUsername;
    }
    if (newEmail !== "") {
      loggedInUser.email = newEmail;
    }
    if (newProfilePicture) {
      const reader = new FileReader();
      reader.onload = function (e) {
        loggedInUser.profilePicture = e.target.result;
        document.getElementById("profile-picture").src = e.target.result;
      };
      reader.readAsDataURL(newProfilePicture);
    }

    localStorage.setItem(loggedInUser.username, JSON.stringify(loggedInUser));
    sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    displayProfile(loggedInUser);

    document.getElementById("edit-profile-form").style.display = "none";
    document.getElementById("edit-profile-button").style.display = "block";

    showMessage("Profile updated successfully!", "success");
  });

const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
if (loggedInUser) {
  displayProfile(loggedInUser);
}

function showMessage(message, type) {
  const messageBox = document.createElement("div");
  messageBox.className = `message ${type}`;
  messageBox.textContent = message;
  document.body.appendChild(messageBox);

  setTimeout(() => {
    document.body.removeChild(messageBox);
  }, 3000);
}
