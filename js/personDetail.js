const currentUrl = window.location.href;
let url = new URL(currentUrl);
let search_params = url.searchParams;
let id = search_params.get('id');
// let id = 1245;
// let id = 823464;
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
            document.querySelector(".PosterMovie").src = `https://image.tmdb.org/t/p/w500${response.profiles[0].file_path}`;
            document.querySelector(".backgroundDetailPage").src = `https://image.tmdb.org/t/p/original/${response.profiles[1].file_path}`;

        });

    fetch(`https://api.themoviedb.org/3/person/${id}/tagged_images?page=1`, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
        })


}
loadPerson();

