function searchForTopResult(userSearchTerm) {

    let urlBeginning = "https://api.boardgameatlas.com/api/search?name=";
    let searchTerm;
    let urlEnding = "&client_id=P3yvzSB2mt";
    
    searchTerm = document.getElementById("userSearchTerm").value;

    let url = urlBeginning + searchTerm + urlEnding;
    
    fetch(url).then(function(response) {
        response.json().then( function(json) { 
            console.log(json.games[0]);
            const div = document.getElementById("topResult");
            div.innerHTML = `
            <h2>Game Name: ${json.games[0].name}</h2>
            <h3>Min. Players: ${json.games[0].min_players}</h3>
            <h3>Max. Players: ${json.games[0].max_players}</h3>
            <img src=${json.games[0].thumb_url}>
            `
        })
    });

}


//https://www.boardgameatlas.com/api/docs
//https://education.launchcode.org/intro-to-professional-web-dev/chapters/fetch/fetch.html