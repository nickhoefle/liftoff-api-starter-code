function searchForTopResult(userSearchTerm) {

    let urlBeginning = "https://api.themoviedb.org/3/search/movie?api_key=16012a33d67f443093071edcbcdfc9d0&query=";
    let searchTerm;
    
    searchTerm = document.getElementById("userSearchTerm").value;

    let url = urlBeginning + searchTerm;

    let posterURLBeginning = "https://image.tmdb.org/t/p/w500";
    let posterURLEnding;
    let posterURL;
    
    fetch(url).then(function(response) {
        response.json().then( function(json) { 
            console.log(json.results);

            posterURLEnding = json.results[0].poster_path;
            posterURL = posterURLBeginning + posterURLEnding;

            const div = document.getElementById("topResult");
            div.innerHTML = `
            <h2>Movie Title: ${json.results[0].title}</h2>
            <h3>Release Date: ${json.results[0].release_date}</h3>
            <h3>Synopsis: ${json.results[0].overview}</h3>
            <img src=${posterURL}>
            `
        })
    });

}

//https://developers.themoviedb.org/3/getting-started/images
//https://education.launchcode.org/intro-to-professional-web-dev/chapters/fetch/fetch.html