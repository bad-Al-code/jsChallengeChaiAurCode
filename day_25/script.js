document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const query = document.getElementById("search-input").value.trim();
  if (query) {
    searchMovies(query);
  }
});

async function searchMovies(query) {
  const apiKey = "191ec3a6";
  const url = `http://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      console.log(data.Search);
      displayMovies(data.Search);
    } else {
      console.error(data.Error);
      document.getElementById("movie-list").innerHTML = `<p>${data.Error}</p>`;
    }
  } catch (error) {
    console.error("Error fetching movie data:", error);
    document.getElementById("movie-list").innerHTML =
      `<p>Failed to fetch movie data. Please try again later.</p>`;
  }
}

async function fetchMovieDetails(imdbID) {
  console.log(`Fetching details for IMDb ID: ${imdbID}`);
  const apiKey = "191ec3a6";
  const url = `http://www.omdbapi.com/?i=${encodeURIComponent(imdbID)}&apikey=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      console.log("Movie details:", data);
      displayMovieDetails(data);
    } else {
      console.error(data.Error);
      document.getElementById("movie-details").innerHTML =
        `<p>${data.Error}</p>`;
    }
  } catch (error) {
    console.error("Error fetching movie details:", error);
    document.getElementById("movie-details").innerHTML =
      `<p>Failed to fetch movie details. Please try again later.</p>`;
  }
}

function displayMovies(movies) {
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    movieElement.innerHTML = `
            <img src="${movie.Poster !== "N/A" ? movie.Poster : "path-to-default-image.jpg"}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>Release Year: ${movie.Year}</p>
            <button class="more-info" data-imdbid="${movie.imdbID}">More Info</button>
        `;

    movieList.appendChild(movieElement);
  });

  document.getElementById("movie-list").addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("more-info")) {
      const imdbID = e.target.getAttribute("data-imdbid");
      fetchMovieDetails(imdbID);
    }
  });
}

function displayMovieDetails(movie) {
  const modal = document.getElementById("movie-modal");
  document.getElementById("modal-title").textContent = movie.Title;
  document.getElementById("modal-poster").src =
    movie.Poster !== "N/A" ? movie.Poster : "path-to-default-image.jpg";
  document.getElementById("modal-year").textContent = movie.Year;
  document.getElementById("modal-director").textContent = movie.Director;
  document.getElementById("modal-actors").textContent = movie.Actors;
  document.getElementById("modal-plot").textContent = movie.Plot;
  document.getElementById("modal-genre").textContent = movie.Genre;
  document.getElementById("modal-language").textContent = movie.Language;

  modal.style.display = "block"; // Show the modal
}

document.querySelector(".close-button").addEventListener("click", function () {
  document.getElementById("movie-modal").style.display = "none";
});

window.addEventListener("click", function (e) {
  const modal = document.getElementById("movie-modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
