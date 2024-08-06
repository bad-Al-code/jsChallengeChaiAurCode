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
      displayMovies(data.Search);
    } else {
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
}

document.getElementById("movie-list").addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("more-info")) {
    const imdbID = e.target.getAttribute("data-imdbid");
    fetchMovieDetails(imdbID);
  }
});

function displayMovieDetails(movie) {
  const movieDetails = document.getElementById("movie-details");
  movieDetails.innerHTML = `
        <h2>${movie.Title}</h2>
        <img src="${movie.Poster !== "N/A" ? movie.Poster : "path-to-default-image.jpg"}" alt="${movie.Title}">
        <p><strong>Release Year:</strong> ${movie.Year}</p>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Actors:</strong> ${movie.Actors}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <p><strong>Genre:</strong> ${movie.Genre}</p>
        <p><strong>Language:</strong> ${movie.Language}</p>
    `;
}
