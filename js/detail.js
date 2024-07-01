const currentUrl = window.location.href;
let url = new URL(currentUrl);
let search_params = url.searchParams;
let id = search_params.get('id');
// let id = 299534;
// let id = 823464;
console.log(id);

async function load() {

    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            let CastCard = "";

            for (cast of response.cast) {
                CastCard += `
     <div class="cast-card cardS">
     <div class="img-section">
                            <img src="https://image.tmdb.org/t/p/w500/${cast.profile_path}" alt="" onerror="this.onerror=null; this.src='./assest/img/cast.png';">
                            </div>
                            <p><b>${cast.original_name}</b></p>
                            <p>${cast.character}</p>
                        </div>`
            }
            document.querySelector(".cast-card-section").innerHTML = CastCard;
        })
        .catch((err) => {
            console.error(err)
        });

    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
        .then(response => response.json())
        .then((response) => {
            let CrewCard = "";

            console.log(response);

            // Iterate over the crew array (ensure it's within bounds)
            for (let j = 0; j < response.crew.length; j++) {
                let ProfileImg = response.crew[j].profile_path ? `https://image.tmdb.org/t/p/w500/${response.crew[j].profile_path}` : "./assest/img/crew.png";

                CrewCard += `
                    <div class="crew-card cardS">
                        <div class="img-section">
                            <img src="${ProfileImg}" alt="${response.crew[j].original_name}" onerror="this.onerror=null; this.src='./assest/img/crew.png';">
                        </div>
                        <p><b>${response.crew[j].original_name}</b></p>
                        <p>${response.crew[j].department}</p>
                    </div>`;
            }

            // Update the HTML content with CrewCard
            document.querySelector(".crew-card-section").innerHTML = CrewCard;
        })
        .catch((err) => {
            console.error(err);
        });



    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            function rating(num) {
                return num.toPrecision(2);
            }
            function number(num) {
                if (num === 0) {
                    return "Sorry but data not found";
                } else {
                    return "&#8377;" + (num * 85).toLocaleString("en-IN");
                }
            }
            let ProductionNameArr = [];
            let ProductionImage = "";
            for (company of response.production_companies) {
                ProductionNameArr.push(company.name)
                if (company.logo_path !== null) {
                    ProductionImage += `<img src="https://image.tmdb.org/t/p/w500/${company.logo_path}">`
                }
            }
            document.querySelector(".ProductionName").innerHTML = ProductionNameArr.toString();
            document.querySelector(".ProductionImgSection").innerHTML = ProductionImage;
            document.querySelector(".MovieName").innerHTML = response.title;
            document.querySelector(".PosterMovie").src = `https://image.tmdb.org/t/p/w500${response.poster_path}`;
            document.querySelector(".backgroundDetailPage").src = `https://image.tmdb.org/t/p/original${response.backdrop_path}`;
            document.querySelector(".TagLine").innerHTML = response.tagline;
            document.querySelector(".overView").innerHTML = response.overview;
            document.querySelector(".rating").innerHTML = rating(response.vote_average);
            document.querySelector(".budgetValue").innerHTML = number(response.budget);
            document.querySelector(".RevenueValue").innerHTML = number(response.revenue);
            let genresArr = [];
            for (gence of response.genres) {
                genresArr.push(gence.name);
            }

            document.querySelector(".gence-more-detailing").innerHTML = genresArr.toString();


        })
        .catch(err => console.error(err));






    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`, options)
        .then(response => response.json())
        .then((response) => {
            let cards = ``;
            for (a of response.results) {
                cards += `  <a href="detail.html?id=${a.id}" class="movieCards">
  <div class="img-section">
      <img src="https://image.tmdb.org/t/p/original${a.poster_path}" alt="">
  </div>
  <h3 class="title">${a.title}</h3>
  </a>`;
            }
            document.querySelector(".Recommendations-card-section").innerHTML = cards;
        })
        .catch(err => console.error(err));


        fetch(`https://api.themoviedb.org/3/movie/${id}/images`, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            let cards = ``;
    
            if (response.backdrops && response.backdrops.length > 0) {
                let numPhotos = Math.min(15, response.backdrops.length);
                for (let i = 0; i < numPhotos; i++) {
                    if (response.backdrops[i].file_path) {
                        let photo = response.backdrops[i].file_path;
                        console.log(photo);
                        cards += `
                        <div class="img-section-photos cardS">
                            <img src="https://image.tmdb.org/t/p/original${photo}" alt="">
                        </div>`;
                    }
                }
            }
    
            document.querySelector(".Photos-card-section").innerHTML = cards;
        })
        .catch(err => console.error(err));



}
load()