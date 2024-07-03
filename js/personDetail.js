const currentUrl = window.location.href;
let url = new URL(currentUrl);
let search_params = url.searchParams;
let id = search_params.get('id');
// let id = 1245;
// let id = 1766034;
// let id = 1340978;
console.log(id);

async function loadPerson() {
    fetch(`https://api.themoviedb.org/3/person/${id}?language=en-US`, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            document.querySelector(".birthDay").innerHTML = new Date(response.birthday).toDateString();
            document.querySelector(".birthPlace").innerHTML = response.place_of_birth
            document.querySelector(".biography-detail").innerHTML = response.biography
            document.querySelector(".PersonName").innerHTML = response.name
        });
    fetch(`https://api.themoviedb.org/3/person/${id}/images`, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            document.querySelector(".personPoster").src = `https://image.tmdb.org/t/p/w500${response.profiles[0].file_path}`;
            document.querySelector(".backgroundDetailPage").src = `https://image.tmdb.org/t/p/original/${response.profiles[1].file_path}`;
        let personPhotoCard = "";
        for(let i=0; i<Math.min(20,response.profiles.length); i++){
personPhotoCard +=`
<div class="personPhoto-card cardS">
                            <img src="https://image.tmdb.org/t/p/w500/${response.profiles[i].file_path}" alt="">
                        </div>`
        }
        
        document.querySelector(".personPhoto-card-section").innerHTML = personPhotoCard;
        
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
            let timeLineCard = "";
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
        
    let timelineYearArr = [];
    for (timeData of data.cast) {
        timelineYearArr.push(timeData.release_date.slice(0, 4));
    }
    
    timelineYearArr = timelineYearArr.filter(year => year !== "");
    timelineYearArr = timelineYearArr.map(year => parseInt(year));
    timelineYearArr = [...new Set(timelineYearArr)];
    timelineYearArr.sort((a, b) => b - a);
    
    let YearDiv = "";
    for (let y of timelineYearArr) {
        let timeLineCard = ""; // Initialize timeLineCard for each year
    let characterGet = "";
        for (let timeData of data.cast) {
            if (timeData.release_date.slice(0, 4) === y.toString()) {
                if(timeData.character === "" || null || undefined){     
                    timeLineCard += `
                        <div class="timeCard">
                            <a href="detail.html?id=${timeData.id}" title="Know More about ${timeData.title}" class="MovieName">${timeData.title}</a>
                        </div>`;
                }else{

                    timeLineCard += `
                    <div class="timeCard">
                    <a href="detail.html?id=${timeData.id}" class="MovieName" title="Know More about ${timeData.title}">${timeData.title}</a>
                    <p class="characterName"> <i>as</i> ${timeData.character}</p>
                    </div>`;
                }
            }
        }
    
        YearDiv += `
            <div class="year-timeline ${y}Y">
                <div class="yearTitle">${y}</div>
                <div class="timeline">
                    ${timeLineCard} <!-- Insert timeLineCard here -->
                </div>
            </div>`;
    }
    
    document.querySelector(".timeline-section").innerHTML = YearDiv;
    

})
        .catch(error => {
            console.error('Error fetching movie credits:', error);
        });

}
loadPerson();

