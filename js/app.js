async function SlideDatafn() {
  let nowUrl = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=IN'
  fetch(nowUrl,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);

      let SliderData = [];
      let cards = ``;
      let slider = ``;
      let a = response.results;
      console.log(formattedDate)
      for (let ab of a) {
        if (ab.release_date > formattedDate) {
          SliderData.push(ab)
        }
      }
      console.log(SliderData[0])
      SliderMake(SliderData)
    })
    .catch((err) => console.error(err));
}
SlideDatafn()

async function SliderMake(SliderData) {
  let slider = ''; 
  try {
    for (let j = 0; j < 5; j++) {
      const movieId = SliderData[j].id;
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const movieData = await response.json();
      console.log(movieData)
      slider += `
        <div class="mySlides fade" style="display: block;">
          <div class="banner-detail">
          <img src="https://image.tmdb.org/t/p/w500/${movieData.poster_path}" alt="">
          <div class="movie-detail">
          <p class="status">${movieData.status}</p>
              <h1>${movieData.title}</h1>
              <div class="genre">${movieData.genres.map(genre => `<span>${genre.name}</span>`).join(' ')}</div>
              <h2 class="information">${movieData.tagline}</h2>
              <h5 class="information">${movieData.overview}</h5>
            </div>
          </div>
          <div class="backFilter"></div>
          <img class="background" src="https://image.tmdb.org/t/p/original/${movieData.backdrop_path}">
        </div>
      `;
    }

    document.querySelector(".in-slideshow-container").innerHTML = slider;
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle error here, e.g., show a message to the user
  }
}






















let url = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&release_date.gte=2022-01-01&sort_by=popularity.desc&with_origin_country=IN&with_original_language=hi'
fetch(url,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    let cards = ``;
    for (a of response.results) {
      cards += `  <a href="detail.html?id=${a.id}" class="movieCards">
  <div class="img-section">
      <img src="https://image.tmdb.org/t/p/original${a.poster_path}" alt="">
  </div>
  <h3 class="title">${a.title}</h3>
  </a>`;
    }
    document.querySelector(".movie").innerHTML = cards
  })
  .catch((err) => console.error(err));


let tvUrl = 'https://api.themoviedb.org/3/discover/tv?include_adult=true&include_video=false&language=en-US&page=1&release_date.gte=2022-01-01&sort_by=popularity.desc&with_origin_country=IN&with_original_language=hi'
fetch(tvUrl,
  options
)
  .then((response) => response.json())
  .then((response) => {
    let cards = ``;
    for (a of response.results) {
      cards += `  <div class="movieCards">
  <div class="img-section">
      <img src="https://image.tmdb.org/t/p/original${a.poster_path}" alt="">
  </div>
  <h3 class="title">${a.name}</h3>
  </div>`;
    }
    document.querySelector(".tv").innerHTML = cards
  })
  .catch((err) => console.error(err));

let UpcomingUrl = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=IN'
fetch(UpcomingUrl,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    let cards = ``;
    for (a of response.results) {
      cards += `  <a href="detail.html?id=${a.id}" class="movieCards">
  <div class="img-section">
      <img src="https://image.tmdb.org/t/p/original${a.poster_path}" alt="">
  </div>
  <h3 class="title">${a.title}</h3>
  </a>`;
    }
    document.querySelector(".upcoming").innerHTML = cards
  })
  .catch((err) => console.error(err));







// let url23 = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=2024-06-01&primary_release_date.lte=2024-06-29&region=IN&sort_by=popularity.desc&watch_region=IN&with_watch_providers=IN&year=2024";
// fetch(url23,
//   options
// )
//   .then((response) => response.json())
//   .then((response) => {
//     // console.log(url23)
//     // console.log(response);
//     let cards = ``;
//     for (a of response.results) {
//       cards += `  <div class="movieCards">
//   <div class="img-section">
//       <img src="https://image.tmdb.org/t/p/original${a.poster_path}" alt="">
//   </div>
//   <h3 class="title">${a.title}</h3>
//   </div>`;
//     }
//     document.querySelector(".movie").innerHTML = cards
//   })
//   .catch((err) => console.error(err));


