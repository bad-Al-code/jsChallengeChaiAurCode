document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const query = document.getElementById("search-input").value;
  searchMovies(query);
});

async function searchMovies(query) {
  // http://www.omdbapi.com/?i=tt3896198&apikey=191ec3a6
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
        `;

    movieList.appendChild(movieElement);
  });
}
