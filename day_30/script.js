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
