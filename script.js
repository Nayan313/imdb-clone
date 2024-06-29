const nowOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTk0NmZiOWViYWY4NTZhZWJhNjY2MWU5ODEyOWI4MSIsInN1YiI6IjY2NmQ0MTQ4MDljOWVjZmQ3OGE4ODEwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuGspWhG28Rpu1ny0KU3Gc3-p26CS-rfacEIiOBiL5s",
  },
};
let nowUrl = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=IN'
fetch(nowUrl,
  nowOptions
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    let cards = ``;
    for (a of response.results) {
      cards += `  <div class="cards">
<div class="img-section">
    <img src="https://image.tmdb.org/t/p/original${a.poster_path}" alt="">
</div>
<h3 class="title">${a.title}</h3>
</div>`;
    }
    document.querySelector(".now").innerHTML = cards
  })
  .catch((err) => console.error(err));
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTk0NmZiOWViYWY4NTZhZWJhNjY2MWU5ODEyOWI4MSIsInN1YiI6IjY2NmQ0MTQ4MDljOWVjZmQ3OGE4ODEwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuGspWhG28Rpu1ny0KU3Gc3-p26CS-rfacEIiOBiL5s",
  },
};
let url = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&release_date.gte=2022-01-01&sort_by=popularity.desc&with_origin_country=IN&with_original_language=hi'
fetch(url,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    let cards = ``;
    for (a of response.results) {
      cards += `  <div class="cards">
<div class="img-section">
    <img src="https://image.tmdb.org/t/p/original${a.poster_path}" alt="">
</div>
<h3 class="title">${a.title}</h3>
</div>`;
    }
    document.querySelector(".movie").innerHTML = cards
  })
  .catch((err) => console.error(err));
const tvOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTk0NmZiOWViYWY4NTZhZWJhNjY2MWU5ODEyOWI4MSIsInN1YiI6IjY2NmQ0MTQ4MDljOWVjZmQ3OGE4ODEwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuGspWhG28Rpu1ny0KU3Gc3-p26CS-rfacEIiOBiL5s",
  },
};
let tvUrl = 'https://api.themoviedb.org/3/discover/tv?include_adult=true&include_video=false&language=en-US&page=1&release_date.gte=2022-01-01&sort_by=popularity.desc&with_origin_country=IN&with_original_language=hi'
fetch(tvUrl,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    let cards = ``;
    for (a of response.results) {
      cards += `  <div class="cards">
<div class="img-section">
    <img src="https://image.tmdb.org/t/p/original${a.poster_path}" alt="">
</div>
<h3 class="title">${a.name}</h3>
</div>`;
    }
    document.querySelector(".tv").innerHTML = cards
  })
  .catch((err) => console.error(err));
const UpcomingOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTk0NmZiOWViYWY4NTZhZWJhNjY2MWU5ODEyOWI4MSIsInN1YiI6IjY2NmQ0MTQ4MDljOWVjZmQ3OGE4ODEwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuGspWhG28Rpu1ny0KU3Gc3-p26CS-rfacEIiOBiL5s",
  },
};
let UpcomingUrl = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=IN'
fetch(UpcomingUrl,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    let cards = ``;
    for (a of response.results) {
      cards += `  <div class="cards">
<div class="img-section">
    <img src="https://image.tmdb.org/t/p/original${a.poster_path}" alt="">
</div>
<h3 class="title">${a.title}</h3>
</div>`;
    }
    document.querySelector(".upcoming").innerHTML = cards
  })
  .catch((err) => console.error(err));
