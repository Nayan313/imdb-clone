const currentUrl = window.location.href;
let url = new URL(currentUrl);
let search_params = url.searchParams;
// let id = search_params.get('id');
// let id = 1245;
let id = 1766034;
// let id = 1340978;
console.log(id);


// let imgEl = new Image();
async function loadPerson() {
    fetch(`https://api.themoviedb.org/3/person/${id}?language=en-US`, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            document.querySelector(".bioName").innerHTML = response.biography
            document.querySelector(".PersonName").innerHTML = response.name
        });
    fetch(`https://api.themoviedb.org/3/person/${id}/images`, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            // document.querySelector(".backgroundDetailPage").src = `https://image.tmdb.org/t/p/original/dDVqfmCzSy3TKSmiS2pJ9QB5E3P.jpg`;
            document.querySelector(".personPoster").src = `https://image.tmdb.org/t/p/w500${response.profiles[0].file_path}`;
            document.querySelector(".backgroundDetailPage").src = `https://image.tmdb.org/t/p/original/${response.profiles[1].file_path}`;

        });

    fetch(`https://api.themoviedb.org/3/person/${id}/tagged_images?page=1`, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
        })
    fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`, options)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            data.cast.sort((a, b) => b.popularity - a.popularity);

            let personMovies = "";

            for (let i = 0; i < Math.min(10, data.cast.length); i++) {
                const movie = data.cast[i];
                const posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'placeholder-image-url';
                personMovies += `
                     <a href="detail.html?id=${movie.id}" class="personMovie-card cardS">
                        <div class="img-section">
                            <img src="${posterPath}" alt="${movie.title}">
                        </div>
                        <p><b>${movie.title}</b></p>
                        <p>${movie.character}</p>
                    </a>`;
            }

            document.querySelector(".personMovie-card-section").innerHTML = personMovies;
        })
        .catch(error => {
            console.error('Error fetching movie credits:', error);
        });

}
loadPerson();

