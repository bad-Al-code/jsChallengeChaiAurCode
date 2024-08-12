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
    console.log(posts);
    postsContainer.innerHTML = "";
    posts.forEach((post, index) => {
      const postElement = document.createElement("div");
      postElement.className = "post";

      const likeText = post.likes > 0 ? `Like (${post.likes})` : "Like";

      const commentsHTML = Array.isArray(post.comments)
        ? post.comments.map((comment) => `<p>${comment}</p>`).join("")
        : "";

      postElement.innerHTML = `
        <div class="post-header">
          <span class="post-username">${post.username}</span>
          <span class="post-timestamp">${post.timestamp}</span>
        </div>
        <h4>${post.title}</h4>
        <p>${post.content}</p>
        ${post.image ? `<img src="${post.image}" alt="Post Image" style="max-width: 100%;">` : ""}
        <div class="post-actions">
          <button class="like-btn" data-index="${index}">${likeText}</button>
          <button class="comment-btn" data-index="${index}">Comment</button>
        </div>
        <div class="comments-section">
          ${commentsHTML}
        </div>
      `;

      postsContainer.appendChild(postElement);
    });

    // Attach event listeners to the like and comment buttons
    document.querySelectorAll(".like-btn").forEach((button) => {
      button.addEventListener("click", handleLike);
    });

    document.querySelectorAll(".comment-btn").forEach((button) => {
      button.addEventListener("click", handleComment);
    });
  }

  renderPosts();

  function handlePostSubmission(event) {
    event.preventDefault();

    const title = document.getElementById("post-title").value;
    const content = document.getElementById("post-content").value;
    const imageInput = document.getElementById("post-image");
    const imageFile = imageInput.files[0];
    const username =
      JSON.parse(localStorage.getItem("user")).username || "Anonymous";
    const timestamp = new Date().toLocaleString();

    let imageUrl = "";

    if (imageFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        imageUrl = e.target.result;
        createPostObject(title, content, imageUrl, username, timestamp);
      };
      reader.readAsDataURL(imageFile);
    } else {
      createPostObject(title, content, "", username, timestamp);
    }

    postForm.reset();
  }

  function createPostObject(
    title,
    content,
    imageUrl = "",
    username,
    timestamp,
  ) {
    const newPost = {
      title,
      content,
      image: imageUrl,
      username,
      timestamp,
      likes: 0,
      comments: [],
    };

    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));

    renderPosts();
  }

  function handleLike(event) {
    const index = event.target.dataset.index;
    posts[index].likes++;
    localStorage.setItem("posts", JSON.stringify(posts));
    renderPosts();
  }

  function handleComment(event) {
    const index = event.target.dataset.index;
    const comment = prompt("Enter your comment:");

    if (comment) {
      posts[index].comments.push(comment);
      localStorage.setItem("posts", JSON.stringify(posts));
      renderPosts();
    }
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
