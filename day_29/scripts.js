document.addEventListener("DOMContentLoaded", () => {
  console.log("Social Media Dashboard Loaded");

  const loginForm = document.getElementById("login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }

  const postForm = document.getElementById("post-form");
  const postsContainer = document.getElementById("posts");

  if (postForm) {
    postForm.addEventListener("submit", handlePostSubmission);
  }

  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  function renderPosts() {
    postsContainer.innerHTML = "";
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.className = "post";

      postElement.innerHTML = `
                <h4>${post.title}</h4>
                <p>${post.content}</p>
                ${post.image ? `<img src="${post.image}" alt="Post Image" style="max-width: 100%;">` : ""}
            `;

      postsContainer.appendChild(postElement);
    });
  }
  renderPosts();

  function handlePostSubmission(event) {
    event.preventDefault();

    const title = document.getElementById("post-title").value;
    const content = document.getElementById("post-content").value;
    const imageInput = document.getElementById("post-image");
    const imageFile = imageInput.files[0];

    let imageUrl = "";

    if (imageFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        imageUrl = e.target.result;
        createPostObject(title, content, imageUrl);
      };
      reader.readAsDataURL(imageFile);
    } else {
      createPostObject(title, content);
    }

    postForm.reset();
  }

  function createPostObject(title, content, imageUrl = "") {
    const newPost = { title, content, image: imageUrl };

    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));

    renderPosts();
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
