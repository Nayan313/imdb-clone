let searchBar = document.querySelector(".SearchBar");

searchBar.addEventListener("input", () => {
  let value = searchBar.value;
  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => {


let SearchMovie = "";

for(a of response.results){
    SearchMovie += `
    <div class="results-card">
    <div class="img-section">
        <img src="https://image.tmdb.org/t/p/original/${a.poster_path}" alt="">
    </div>
    <div class="backdrop"></div>
    <h3 class="searchName">${a.title}</h3>
</div>`
}
document.querySelector(".search-results").innerHTML = SearchMovie;

    
    })
    .catch((err) => console.error(err));
});
