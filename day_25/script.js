document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const query = document.getElementById("search-input").value;
  searchMovies(query);
});

function searchMovies(query) {
  console.log(`Searching for movies with query: ${query}`);
}
